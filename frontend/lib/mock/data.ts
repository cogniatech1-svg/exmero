import type {
  Usuario,
  Convocatoria,
  MisionDiaria,
  EstadisticasProgreso,
  Logro,
} from "@/types";

// Fuente canónica: docs/producto/MVP_DATA_MODEL.md
// Si hay discrepancia entre este archivo y ese documento, el documento prevalece.

export const mockUsuario: Usuario = {
  id: "usr_001",
  nombre: "Valentina Ríos Herrera",
  email: "valentina.rios@ejemplo.co",
  nivel: 3,
  xp: 2340,
  xpSiguienteNivel: 3000,
  rachaActual: 7,
  rachaMáxima: 12,
  convocatoriaActivaId: "conv_001",
};

export const mockConvocatoria: Convocatoria = {
  id: "conv_001",
  nombre: "Profesional Universitario Grado 11",
  entidad: "DIAN",
  cargo: "Profesional Universitario Grado 11 — Área Tributaria",
  fechaExamen: "2026-09-20",
  diasRestantes: 64,
  probabilidadAprobacion: 68,
  modulos: [
    {
      id: "mod_01",
      nombre: "Competencias Básicas",
      pesoEnPrueba: 30,
      progreso: 71,
      nivelDominio: "alto",
      preguntasPracticadas: 284,
      preguntasTotales: 400,
    },
    {
      id: "mod_02",
      nombre: "Comportamentales",
      pesoEnPrueba: 25,
      progreso: 48,
      nivelDominio: "medio",
      preguntasPracticadas: 144,
      preguntasTotales: 300,
    },
    {
      id: "mod_03",
      nombre: "Razonamiento Cuantitativo",
      pesoEnPrueba: 25,
      progreso: 33,
      nivelDominio: "bajo",
      preguntasPracticadas: 66,
      preguntasTotales: 200,
    },
    {
      id: "mod_04",
      nombre: "Aptitud Verbal",
      pesoEnPrueba: 20,
      progreso: 55,
      nivelDominio: "medio",
      preguntasPracticadas: 55,
      preguntasTotales: 100,
    },
  ],
};

export const mockMisiones: MisionDiaria[] = [
  {
    id: "mision-001",
    titulo: "Razonamiento numérico básico",
    descripcion:
      "Practica series numéricas y proporciones — el área con mayor impacto en tu puntaje ahora mismo.",
    tipo: "practica",
    moduloId: "mod_03",
    duracionMin: 20,
    completada: false,
    xpRecompensa: 150,
  },
  {
    id: "mision-002",
    titulo: "Repaso Comportamentales",
    descripcion: "Refuerza ética y toma de decisiones bajo presión.",
    tipo: "repaso",
    moduloId: "mod_02",
    duracionMin: 15,
    completada: false,
    xpRecompensa: 100,
  },
  {
    id: "mision-003",
    titulo: "Mini simulacro: 20 preguntas mixtas",
    descripcion: "Simula las condiciones reales del examen CNSC.",
    tipo: "simulacro",
    moduloId: "mod_01",
    duracionMin: 25,
    completada: false,
    xpRecompensa: 200,
  },
];

export const mockEstadisticas: EstadisticasProgreso = {
  preguntasHoy: 12,
  preguntasSemana: 47,
  tiempoEstudioHoyMin: 34,
  rachaActual: 7,
  probabilidadActual: 68,
  tendencia: "subiendo",
  // Preguntas practicadas por día: lun–dom de la semana actual
  historialSemanal: [8, 12, 6, 15, 12, 0, 0],
};

export const mockLogros: Logro[] = [
  {
    id: "log_01",
    nombre: "Primera sesión",
    descripcion: "Completaste tu primera sesión de práctica.",
    icono: "⚡",
    desbloqueado: true,
    fechaDesbloqueo: "2026-06-15",
  },
  {
    id: "log_02",
    nombre: "Racha de 3 días",
    descripcion: "Estudiaste 3 días seguidos.",
    icono: "🔥",
    desbloqueado: true,
    fechaDesbloqueo: "2026-06-20",
  },
  {
    id: "log_03",
    nombre: "100 preguntas practicadas",
    descripcion: "Alcanzaste 100 preguntas de práctica.",
    icono: "🏆",
    desbloqueado: true,
    fechaDesbloqueo: "2026-07-01",
  },
  {
    id: "log_04",
    nombre: "Racha de 7 días",
    descripcion: "Estudiaste 7 días seguidos.",
    icono: "💎",
    desbloqueado: true,
    fechaDesbloqueo: "2026-07-18",
  },
  {
    id: "log_05",
    nombre: "Racha de 14 días",
    descripcion: "Estudiaste 14 días consecutivos.",
    icono: "🎯",
    desbloqueado: false,
  },
];

// Mensaje contextual de Mero — variante activa: racha de 7 días
// Ver MVP_DATA_MODEL.md para la tabla completa de variantes
export const mockMensajeMero =
  "¡7 días seguidos, Valentina! Razonamiento Cuantitativo te está esperando — ahí está tu próximo salto.";
