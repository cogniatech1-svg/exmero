import type { Metadata } from "next";
import Link from "next/link";
import { getMockMisionActiva, getMockUsuario } from "@/lib/mock";
import { MeroScene } from "@/components/mero/MeroScene";
import { MERO_SCENES } from "@/lib/mero/scenes";

export const metadata: Metadata = { title: "Mi Preparación — ExMero" };

const TIPO_LABEL: Record<string, string> = {
  practica: "Práctica",
  repaso: "Repaso",
  simulacro: "Simulacro",
  lectura: "Lectura",
};

export default async function PreparacionPage() {
  const [mision, usuario] = await Promise.all([
    getMockMisionActiva(),
    getMockUsuario(),
  ]);

  const primerNombre = usuario.nombre.split(" ")[0];

  return (
    <div className="flex flex-col gap-6 pt-6 pb-2">

      {/* Mero — escena de apertura */}
      <section className="flex flex-col items-center gap-4 pt-2">
        <MeroScene
          id={MERO_SCENES.encouragement}
          size="xl"
          priority
        />
        <div className="text-center flex flex-col gap-1">
          <p className="text-sm text-foreground-muted font-medium">
            {primerNombre}, esta es tu misión de hoy
          </p>
          <h1 className="text-xl font-bold text-foreground leading-snug">
            {mision.titulo}
          </h1>
          <span className="inline-block mt-1 text-xs font-semibold text-primary bg-primary-50 rounded-full px-3 py-1">
            {TIPO_LABEL[mision.tipo]} · {mision.competencia}
          </span>
        </div>
      </section>

      {/* Propósito visible — regla congelada */}
      <section className="bg-primary-50 rounded-md px-4 py-4">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
          Por qué esta misión hoy
        </p>
        <p className="text-sm text-primary-800 leading-relaxed">
          {mision.proposito}
        </p>
      </section>

      {/* Alcance concreto */}
      <section className="bg-card rounded-md border border-border p-4">
        <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3">
          Qué harás
        </p>
        <div className="flex flex-col gap-2.5">
          <MetaDato icono="📝" valor={`${mision.totalPreguntas} preguntas`} detalle="de Razonamiento Cuantitativo" />
          <MetaDato icono="⏱" valor={`${mision.duracionMin} min`} detalle="duración estimada" />
          <MetaDato icono="⭐" valor={`+${mision.meritoRecompensa} Mérito`} detalle="al completar" />
        </div>
      </section>

      {/* CTA — Empecemos */}
      <div className="flex flex-col gap-3 pt-2">
        <Link
          href="/preparacion/sesion"
          className="w-full bg-primary text-white font-semibold text-base rounded-full py-4 text-center transition-opacity active:opacity-80 block"
        >
          Empecemos
        </Link>
        <Link
          href="/"
          className="w-full text-foreground-muted font-medium text-sm text-center py-2"
        >
          Volver al inicio
        </Link>
      </div>

    </div>
  );
}

function MetaDato({
  icono,
  valor,
  detalle,
}: {
  icono: string;
  valor: string;
  detalle: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg w-6 text-center" aria-hidden="true">{icono}</span>
      <div>
        <span className="text-sm font-bold text-foreground">{valor}</span>
        <span className="text-sm text-foreground-muted"> {detalle}</span>
      </div>
    </div>
  );
}
