"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { MeroScene } from "@/components/mero/MeroScene";
import { MERO_SCENES } from "@/lib/mero/scenes";
import { mockUsuario } from "@/lib/mock";

function CierreContenido() {
  const params = useSearchParams();
  const router = useRouter();

  const correctas = Number(params.get("correctas") ?? 0);
  const total = Number(params.get("total") ?? 8);
  const merito = Number(params.get("merito") ?? 90);
  const dominioAntes = Number(params.get("dominioAntes") ?? 33);
  const dominioDespues = Number(params.get("dominioDespues") ?? 40);
  const competencia = params.get("competencia") ?? "Razonamiento Cuantitativo";

  const ratio = total > 0 ? correctas / total : 0;
  const constanciaHoy = mockUsuario.constanciaActual + 1;

  // Escena de Mero según desempeño
  const sceneMero =
    ratio >= 0.9
      ? MERO_SCENES.celebrating
      : ratio >= 0.6
      ? MERO_SCENES.success
      : MERO_SCENES.encouragement;

  // Texto de reconocimiento — concreto, no genérico
  const reconocimiento =
    ratio >= 0.9
      ? `Sesión impecable. ${correctas} de ${total} correctas en ${competencia}. Así se construye.`
      : ratio >= 0.6
      ? `${correctas} de ${total} correctas. Razonamiento Cuantitativo está subiendo.`
      : `${correctas} de ${total} hoy. Lo que importa: ya practicaste, ya aprendiste.`;

  // Avance cualitativo de dominio (sin porcentaje, conforme a la decisión congelada)
  const avanceTexto =
    dominioDespues > dominioAntes
      ? `Tu dominio de ${competencia} subió en esta sesión.`
      : `Seguiste entrenando ${competencia}. El dominio se construye sesión a sesión.`;

  // Texto puente al mañana — siempre mirando adelante
  const puenteTexto =
    ratio >= 0.7
      ? `Mañana subimos la dificultad. Estás listo.`
      : `Mañana practicamos los mismos conceptos con ángulos distintos. Vas a notar la diferencia.`;

  return (
    <div className="flex flex-col gap-6 pt-6 pb-2">

      {/* Mero — presencia plena en el cierre */}
      <section className="flex flex-col items-center gap-4">
        <MeroScene id={sceneMero} size="xl" priority />
      </section>

      {/* 1 — Reconocimiento primero, antes que cualquier número */}
      <section className="flex flex-col gap-1 text-center px-2">
        <p className="text-base font-bold text-foreground leading-snug">
          {reconocimiento}
        </p>
      </section>

      {/* 2 — Evidencia de avance de dominio (cualitativa) */}
      <section className="bg-primary-50 rounded-md px-4 py-3.5">
        <p className="text-sm text-primary-800 font-medium leading-snug">
          {avanceTexto}
        </p>
      </section>

      {/* 3 — Mérito ganado + Constancia */}
      <section className="bg-card rounded-md border border-border p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wide">
              Mérito ganado
            </span>
            <span className="text-2xl font-bold text-gold-600">+{merito}</span>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wide">
              Constancia
            </span>
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true">🔥</span>
              <span className="text-2xl font-bold text-foreground">{constanciaHoy} días</span>
            </div>
          </div>
        </div>

        {/* Resumen sobrio — información, no veredicto */}
        <div className="pt-2 border-t border-border flex items-center gap-1.5 text-xs text-foreground-muted">
          <span>{correctas} correctas</span>
          <span>·</span>
          <span>{total - correctas} para reforzar</span>
          <span>·</span>
          <span>{total} preguntas</span>
        </div>
      </section>

      {/* 4 — Puente al mañana — Mero siempre mira adelante */}
      <section className="flex gap-3 items-center bg-card rounded-md border border-border px-4 py-3.5">
        <MeroScene id={MERO_SCENES.studying} size="sm" />
        <p className="flex-1 text-sm text-foreground-muted font-medium leading-snug">
          {puenteTexto}
        </p>
      </section>

      {/* CTA — volver al Home */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="w-full bg-primary text-white font-semibold text-base rounded-full py-4 text-center transition-opacity active:opacity-80"
        >
          Volver al inicio
        </button>
      </div>

    </div>
  );
}

export default function CierrePage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-64 gap-4 pt-12">
          <MeroScene id={MERO_SCENES.thinking} size="lg" />
          <p className="text-sm text-foreground-muted">Calculando tu resultado…</p>
        </div>
      }
    >
      <CierreContenido />
    </Suspense>
  );
}
