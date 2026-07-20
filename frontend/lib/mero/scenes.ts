// Mapeo semántico de intenciones → IDs del manifiesto de Mero.
// Las escenas representan intenciones, no pantallas.
// Una misma escena puede reutilizarse en Home, Onboarding, Ruta, etc.
//
// USO: <MeroScene id={MERO_SCENES.welcome} />
// NUNCA: <MeroScene id="bienvenido" /> ni <Image src="/mero/..." />

export const MERO_SCENES = {
  // ── Presencia y emoción ──────────────────────────────────────────
  welcome:       "bienvenido",           // entrada principal, onboarding
  greeting:      "saludando",            // saludo casual
  happy:         "feliz",                // positivo general
  celebrating:   "celebrando",           // logro grande
  success:       "muy-bien",             // aprobación de una acción
  encouragement: "vamos",                // "tú puedes"
  thumbsUp:      "pulgar-arriba",        // aprobación rápida

  // ── Estudio ──────────────────────────────────────────────────────
  thinking:      "pensando",             // procesando, analizando
  explaining:    "explicando",           // enseñando un concepto
  reading:       "leyendo",              // leyendo una lección
  studying:      "estudiando-en-escritorio", // sesión de estudio activa
  writing:       "escribiendo",          // tomando notas, respondiendo

  // ── Simulacros y práctica ────────────────────────────────────────
  correct:       "marcando-correcta",
  incorrect:     "marcando-incorrecta",
  completed:     "completado",
  timeWarning:   "tiempo-agotandose",
  submitting:    "entregando-examen",

  // ── Logros y gamificación ────────────────────────────────────────
  streak:        "racha",
  levelUp:       "nivel-nuevo",
  trophy:        "trofeo",
  medal:         "medalla",
  achievement:   "nuevo-logro",

  // ── Estados vacíos y error ───────────────────────────────────────
  error:         "intentalo-otra-vez",   // error genérico recuperable
  dontGiveUp:    "no-te-rindas",
  tryAgain:      "intentalo-otra-vez",
  noConnection:  "sin-conexion",
  noData:        "sin-datos",
  notFound:      "no-encontrado",
} as const;

export type MeroSceneName = keyof typeof MERO_SCENES;

// Registro de variantes — preparado para selección futura (aleatoria o contextual).
// El índice [0] siempre coincide con el valor en MERO_SCENES (el default actual).
// La lógica de selección NO está implementada todavía.
export const MERO_SCENE_VARIANTS: Readonly<Record<MeroSceneName, readonly string[]>> = {
  welcome:       ["bienvenido", "saludando"],
  greeting:      ["saludando", "bienvenido"],
  happy:         ["feliz", "muy-bien"],
  celebrating:   ["celebrando", "racha", "nivel-nuevo"],
  success:       ["muy-bien", "celebrando", "pulgar-arriba"],
  encouragement: ["vamos", "no-te-rindas"],
  thumbsUp:      ["pulgar-arriba"],
  thinking:      ["pensando"],
  explaining:    ["explicando"],
  reading:       ["leyendo"],
  studying:      ["estudiando-en-escritorio", "leyendo", "escribiendo"],
  writing:       ["escribiendo"],
  correct:       ["marcando-correcta", "pulgar-arriba"],
  incorrect:     ["marcando-incorrecta"],
  completed:     ["completado"],
  timeWarning:   ["tiempo-agotandose"],
  submitting:    ["entregando-examen"],
  streak:        ["racha"],
  levelUp:       ["nivel-nuevo"],
  trophy:        ["trofeo"],
  medal:         ["medalla"],
  achievement:   ["nuevo-logro", "trofeo", "medalla"],
  error:         ["intentalo-otra-vez", "no-te-rindas"],
  dontGiveUp:    ["no-te-rindas"],
  tryAgain:      ["intentalo-otra-vez"],
  noConnection:  ["sin-conexion"],
  noData:        ["sin-datos"],
  notFound:      ["no-encontrado"],
};
