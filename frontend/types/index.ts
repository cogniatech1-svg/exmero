// ─── Usuario ────────────────────────────────────────────────────────────────

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  avatar?: string;
  nivel: number;
  merito: number;
  meritoSiguienteNivel: number;
  constanciaActual: number;
  constanciaMaxima: number;
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
  proposito: string;       // por qué esta misión hoy — visible antes de iniciar
  competencia: string;     // nombre de la competencia
  tipo: TipoMision;
  moduloId: string;
  duracionMin: number;
  totalPreguntas: number;
  completada: boolean;
  meritoRecompensa: number;
}

// ─── Pregunta de práctica ────────────────────────────────────────────────────

export interface OpcionRespuesta {
  id: string;
  texto: string;
}

export interface Pregunta {
  id: string;
  competenciaId: string;
  enunciado: string;
  opciones: OpcionRespuesta[];
  correctaId: string;
  explicacion: string; // solo se muestra tras respuesta incorrecta
  dificultad: "baja" | "media" | "alta";
}

// ─── Resultado de sesión ─────────────────────────────────────────────────────

export interface ResultadoSesion {
  misionId: string;
  competencia: string;
  totalPreguntas: number;
  correctas: number;
  meritoGanado: number;
  dominioAntes: number;   // 0–100
  dominioDespues: number; // 0–100
  constanciaDia: boolean;
}

// ─── Progreso / estadísticas ─────────────────────────────────────────────────

export type TendenciaProgreso = "subiendo" | "estable" | "bajando";

export interface EstadisticasProgreso {
  preguntasHoy: number;
  preguntasSemana: number;
  tiempoEstudioHoyMin: number;
  constanciaActual: number;
  probabilidadActual: number;
  tendencia: TendenciaProgreso;
  historialSemanal: number[];
}

// ─── Gamificación ────────────────────────────────────────────────────────────

export interface Logro {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  desbloqueado: boolean;
  fechaDesbloqueo?: string;
}
