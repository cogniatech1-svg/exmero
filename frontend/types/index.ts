// ─── Usuario ────────────────────────────────────────────────────────────────

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  avatar?: string;
  nivel: number;
  xp: number;
  xpSiguienteNivel: number;
  rachaActual: number;
  rachaMáxima: number;
  convocatoriaActivaId?: string;
}

// ─── Convocatoria ────────────────────────────────────────────────────────────

export interface Convocatoria {
  id: string;
  nombre: string;
  entidad: string;
  cargo: string;
  fechaExamen?: string; // ISO date
  diasRestantes?: number;
  probabilidadAprobacion: number; // 0–100
  modulos: ModuloEstudio[];
}

// ─── Módulo de estudio ───────────────────────────────────────────────────────

export type NivelDominio = "bajo" | "medio" | "alto";

export interface ModuloEstudio {
  id: string;
  nombre: string;
  pesoEnPrueba: number; // % del examen
  progreso: number;     // 0–100
  nivelDominio: NivelDominio;
  preguntasPracticadas: number;
  preguntasTotales: number;
}

// ─── Misión diaria ───────────────────────────────────────────────────────────

export type TipoMision = "practica" | "repaso" | "simulacro" | "lectura";

export interface MisionDiaria {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: TipoMision;
  moduloId: string;
  duracionMin: number;
  completada: boolean;
  xpRecompensa: number;
}

// ─── Progreso / estadísticas ─────────────────────────────────────────────────

export type TendenciaProgreso = "subiendo" | "estable" | "bajando";

export interface EstadisticasProgreso {
  preguntasHoy: number;
  preguntasSemana: number;
  tiempoEstudioHoyMin: number;
  rachaActual: number;
  probabilidadActual: number;
  tendencia: TendenciaProgreso;
  historialSemanal: number[]; // 7 valores, % promedio por día (lun→dom)
}

// ─── Gamificación ────────────────────────────────────────────────────────────

export interface Logro {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string; // emoji
  desbloqueado: boolean;
  fechaDesbloqueo?: string;
}
