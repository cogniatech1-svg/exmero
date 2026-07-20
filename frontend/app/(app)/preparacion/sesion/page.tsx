"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { MeroScene } from "@/components/mero/MeroScene";
import { MERO_SCENES } from "@/lib/mero/scenes";
import { getPreguntasMision } from "@/lib/mock";
import type { Pregunta } from "@/types";
import { cn } from "@/lib/utils";

const PREGUNTAS: Pregunta[] = getPreguntasMision("mod_03");
const DOMINIO_ANTES = 33;
const MERITO_MISION = 150;

type Fase = "pregunta" | "feedback";

interface EstadoPregunta {
  seleccionId: string | null;
  correcta: boolean | null;
}

export default function SesionPage() {
  const router = useRouter();
  const [indice, setIndice] = useState(0);
  const [fase, setFase] = useState<Fase>("pregunta");
  const [estados, setEstados] = useState<EstadoPregunta[]>(
    PREGUNTAS.map(() => ({ seleccionId: null, correcta: null }))
  );

  const pregunta = PREGUNTAS[indice];
  const estadoActual = estados[indice];
  const total = PREGUNTAS.length;
  const esUltima = indice === total - 1;

  const handleSeleccion = useCallback(
    (opcionId: string) => {
      if (fase !== "pregunta") return;
      const correcta = opcionId === pregunta.correctaId;
      setEstados((prev) => {
        const copia = [...prev];
        copia[indice] = { seleccionId: opcionId, correcta };
        return copia;
      });
      setFase("feedback");
    },
    [fase, pregunta, indice]
  );

  const handleSiguiente = useCallback(() => {
    if (esUltima) {
      const correctasFinal =
        estados.slice(0, indice).filter((e) => e.correcta === true).length +
        (estadoActual.correcta ? 1 : 0);

      const ratio = correctasFinal / total;
      const meritoGanado = Math.round(MERITO_MISION * Math.max(ratio, 0.3));
      const dominioDelta = Math.round(ratio * 10);
      const dominioDespues = Math.min(100, DOMINIO_ANTES + dominioDelta);

      const params = new URLSearchParams({
        correctas: String(correctasFinal),
        total: String(total),
        merito: String(meritoGanado),
        dominioAntes: String(DOMINIO_ANTES),
        dominioDespues: String(dominioDespues),
        competencia: "Razonamiento Cuantitativo",
      });

      router.push(`/preparacion/cierre?${params.toString()}`);
    } else {
      setIndice((i) => i + 1);
      setFase("pregunta");
    }
  }, [esUltima, estados, estadoActual, indice, total, router]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-5rem)] pt-4 pb-2">

      {/* Progreso */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-1.5 bg-surface-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${(indice / total) * 100}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-foreground-muted shrink-0">
          {indice + 1} / {total}
        </span>
      </div>

      {/* Enunciado */}
      <div className="flex flex-col gap-6 flex-1">
        <p className="text-base font-semibold text-foreground leading-relaxed">
          {pregunta.enunciado}
        </p>

        {/* Opciones */}
        <div className="flex flex-col gap-3">
          {pregunta.opciones.map((opcion) => {
            const seleccionada = estadoActual.seleccionId === opcion.id;
            const esCorrecta = opcion.id === pregunta.correctaId;
            const enFeedback = fase === "feedback";

            let estilo =
              "border-border bg-card text-foreground hover:border-primary/40";
            if (enFeedback && esCorrecta) {
              estilo = "border-teal-500 bg-teal-50 text-teal-800";
            } else if (enFeedback && seleccionada && !esCorrecta) {
              estilo = "border-destructive bg-red-50 text-destructive";
            } else if (seleccionada && !enFeedback) {
              estilo = "border-primary bg-primary-50 text-primary";
            }

            return (
              <button
                key={opcion.id}
                type="button"
                onClick={() => handleSeleccion(opcion.id)}
                disabled={enFeedback}
                className={cn(
                  "w-full text-left rounded-md border-2 px-4 py-3.5 text-sm font-medium leading-snug transition-colors",
                  estilo
                )}
              >
                <span className="font-bold mr-2 uppercase">{opcion.id}.</span>
                {opcion.texto}
              </button>
            );
          })}
        </div>

        {/* Retroalimentación de Mero — aparece solo en fase feedback */}
        {fase === "feedback" && (
          <div
            className={cn(
              "rounded-md p-4 flex gap-3 items-start",
              estadoActual.correcta
                ? "bg-teal-50 border border-teal-200"
                : "bg-red-50 border border-red-200"
            )}
          >
            {/* Mero aparece: correcto → señal de aprobación · incorrecto → explicando */}
            <MeroScene
              id={
                estadoActual.correcta
                  ? MERO_SCENES.correct
                  : MERO_SCENES.explaining
              }
              size="sm"
              className="shrink-0"
            />
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <p
                className={cn(
                  "text-sm font-bold",
                  estadoActual.correcta ? "text-teal-700" : "text-red-700"
                )}
              >
                {estadoActual.correcta ? "Correcto" : "No era esa"}
              </p>
              {/* Explicación solo tras respuesta incorrecta — regla congelada */}
              {!estadoActual.correcta && (
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {pregunta.explicacion}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Botón siguiente — aparece solo en fase feedback · Mero guarda silencio en flujo normal */}
      {fase === "feedback" && (
        <div className="pt-4">
          <button
            type="button"
            onClick={handleSiguiente}
            className="w-full bg-primary text-white font-semibold text-sm rounded-full py-3.5 transition-opacity active:opacity-80"
          >
            {esUltima ? "Ver resultados" : "Siguiente"}
          </button>
        </div>
      )}
    </div>
  );
}
