import type {
  Usuario,
  Convocatoria,
  MisionDiaria,
  EstadisticasProgreso,
  Logro,
} from "@/types";

export const mockUsuario: Usuario = {
  id: "usr_001",
  nombre: "Valentina Ríos",
  email: "valentina.rios@gmail.com",
  nivel: 7,
  xp: 3240,
  xpSiguienteNivel: 4000,
  rachaActual: 12,
  rachaMáxima: 18,
  convocatoriaActivaId: "conv_001",
};

export const mockConvocatoria: Convocatoria = {
  id: "conv_001",
  nombre: "Profesional Universitario Grado 11",
  entidad: "DIAN",
  cargo: "Profesional en Gestión Tributaria",
  fechaExamen: "2026-09-15",
  diasRestantes: 59,
  probabilidadAprobacion: 62,
  modulos: [
    {
      id: "mod_01",
      nombre: "Competencias Básicas",
      pesoEnPrueba: 40,
      progreso: 71,
      nivelDominio: "alto",
      preguntasPracticadas: 284,
      preguntasTotales: 400,
    },
    {
      id: "mod_02",
      nombre: "Competencias Comportamentales",
      pesoEnPrueba: 30,
      progreso: 48,
      nivelDominio: "medio",
      preguntasPracticadas: 144,
      preguntasTotales: 300,
    },
    {
      id: "mod_03",
      nombre: "Razonamiento Cuantitativo",
      pesoEnPrueba: 20,
      progreso: 33,
      nivelDominio: "bajo",
      preguntasPracticadas: 66,
      preguntasTotales: 200,
    },
    {
      id: "mod_04",
      nombre: "Aptitud Verbal",
      pesoEnPrueba: 10,
      progreso: 55,
      nivelDominio: "medio",
      preguntasPracticadas: 55,
      preguntasTotales: 100,
    },
  ],
};

export const mockMisiones: MisionDiaria[] = [
  {
    id: "mis_01",
    titulo: "Practica 15 preguntas de Razonamiento",
    descripcion: "Tu módulo más débil. ¡10 min de práctica marcan la diferencia!",
    tipo: "practica",
    moduloId: "mod_03",
    duracionMin: 10,
    completada: false,
    xpRecompensa: 120,
  },
  {
    id: "mis_02",
    titulo: "Repasa Competencias Comportamentales",
    descripcion: "Refuerza los conceptos vistos ayer antes de avanzar.",
    tipo: "repaso",
    moduloId: "mod_02",
    duracionMin: 8,
    completada: true,
    xpRecompensa: 80,
  },
  {
    id: "mis_03",
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
  preguntasHoy: 32,
  preguntasSemana: 187,
  tiempoEstudioHoyMin: 45,
  rachaActual: 12,
  probabilidadActual: 62,
  tendencia: "subiendo",
  historialSemanal: [58, 59, 60, 59, 61, 62, 62],
};

export const mockLogros: Logro[] = [
  {
    id: "log_01",
    nombre: "Primera Sangre",
    descripcion: "Completaste tu primera sesión de práctica.",
    icono: "⚡",
    desbloqueado: true,
    fechaDesbloqueo: "2026-06-01",
  },
  {
    id: "log_02",
    nombre: "Racha de 7",
    descripcion: "Estudiaste 7 días seguidos.",
    icono: "🔥",
    desbloqueado: true,
    fechaDesbloqueo: "2026-06-20",
  },
  {
    id: "log_03",
    nombre: "Maestro del Módulo",
    descripcion: "Alcanza dominio alto en cualquier módulo.",
    icono: "🏆",
    desbloqueado: true,
    fechaDesbloqueo: "2026-07-10",
  },
  {
    id: "log_04",
    nombre: "Simulacro Élite",
    descripcion: "Supera el 80% en un simulacro completo.",
    icono: "🎯",
    desbloqueado: false,
  },
  {
    id: "log_05",
    nombre: "Racha de 30",
    descripcion: "Estudiaste 30 días consecutivos.",
    icono: "💎",
    desbloqueado: false,
  },
];
