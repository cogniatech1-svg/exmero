import type { Metadata } from "next";
import {
  getMockUsuario,
  getMockConvocatoria,
  getMockEstadisticas,
  getMockMisiones,
  mockMensajeMero,
} from "@/lib/mock";

export const metadata: Metadata = { title: "Inicio" };

const TIPO_LABEL: Record<string, string> = {
  practica: "Práctica",
  repaso: "Repaso",
  simulacro: "Simulacro",
  lectura: "Lectura",
};

export default async function HomePage() {
  const [usuario, estadisticas, misiones] = await Promise.all([
    getMockUsuario(),
    getMockEstadisticas(),
    getMockMisiones(),
  ]);

  const convocatoria = usuario.convocatoriaActivaId
    ? await getMockConvocatoria(usuario.convocatoriaActivaId)
    : null;

  const misionHoy = misiones.find((m) => !m.completada) ?? misiones[0];
  const xpPct = Math.round((usuario.xp / usuario.xpSiguienteNivel) * 100);
  const primerNombre = usuario.nombre.split(" ")[0];

  return (
    <div className="flex flex-col gap-5 pt-6 pb-2">

      {/* 1 — Saludo + racha */}
      <section className="flex items-start justify-between">
        <div>
          <p className="text-sm text-foreground-muted font-medium">Buenos días,</p>
          <h1 className="text-2xl font-bold text-foreground">{primerNombre}</h1>
        </div>
        <div className="flex items-center gap-1.5 bg-gold-50 text-gold-700 rounded-full px-3 py-1.5 text-sm font-semibold">
          <span aria-hidden="true">🔥</span>
          <span>{estadisticas.rachaActual} días</span>
        </div>
      </section>

      {/* 2 — Mensaje de Mero */}
      <section className="bg-primary-50 rounded-md px-4 py-3.5 flex gap-3 items-start">
        <span className="text-2xl leading-none mt-0.5 select-none" aria-hidden="true">
          🦈
        </span>
        <p className="flex-1 text-sm text-primary-800 font-medium leading-snug">
          {mockMensajeMero}
        </p>
      </section>

      {/* 3 — Tu sesión de hoy */}
      <section className="bg-card rounded-md border border-border p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wide">
            Tu sesión de hoy
          </span>
          <span className="text-xs font-semibold text-primary bg-primary-50 rounded-full px-2.5 py-0.5">
            {TIPO_LABEL[misionHoy.tipo]}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-base font-bold text-foreground leading-snug">
            {misionHoy.titulo}
          </p>
          <p className="text-sm text-foreground-muted leading-snug">
            {misionHoy.descripcion}
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true">⏱</span>
            <span className="font-semibold text-foreground">{misionHoy.duracionMin} min</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true">⭐</span>
            <span className="font-semibold text-gold-600">+{misionHoy.xpRecompensa} XP</span>
          </span>
        </div>

        <button
          type="button"
          className="w-full bg-primary text-white font-semibold text-sm rounded-full py-3 transition-opacity active:opacity-80"
        >
          Comenzar sesión
        </button>
      </section>

      {/* 4 — Progreso general */}
      <section className="bg-card rounded-md border border-border p-4 flex flex-col gap-3">
        <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wide">
          Tu progreso
        </span>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-foreground-muted">Probabilidad de aprobar</p>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-3xl font-bold text-foreground">
                {estadisticas.probabilidadActual}%
              </span>
              {estadisticas.tendencia === "subiendo" && (
                <span className="text-sm font-bold text-teal-500">↑</span>
              )}
              {estadisticas.tendencia === "bajando" && (
                <span className="text-sm font-bold text-destructive">↓</span>
              )}
            </div>
          </div>
          {convocatoria && (
            <div className="text-right">
              <p className="text-xs font-medium text-foreground-subtle">
                {convocatoria.entidad}
              </p>
              <p className="text-xs font-semibold text-foreground-muted">
                {convocatoria.diasRestantes} días restantes
              </p>
            </div>
          )}
        </div>

        <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${estadisticas.probabilidadActual}%` }}
          />
        </div>

        <div className="pt-2 border-t border-border">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-medium text-foreground-muted">
              Nivel {usuario.nivel}
            </span>
            <span className="text-xs text-foreground-muted">
              {usuario.xp.toLocaleString("es-CO")} /{" "}
              {usuario.xpSiguienteNivel.toLocaleString("es-CO")} XP
            </span>
          </div>
          <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold-400 rounded-full"
              style={{ width: `${xpPct}%` }}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
