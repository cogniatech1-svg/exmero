// Fuente única de verdad para todos los activos visuales de Mero.
// NO referenciar rutas /mero/... directamente en componentes de UI.
// Usar <MeroScene id="..." /> o MERO_SCENES para acceso semántico.

export type MeroCategory =
  | "estados"
  | "gestos"
  | "estudio"
  | "simulacros"
  | "gamificacion"
  | "ayuda"
  | "cargos";

export type MeroEmotion =
  | "joy"
  | "celebration"
  | "pride"
  | "focus"
  | "encouragement"
  | "resilience"
  | "neutral"
  | "concern";

export type MeroContext =
  | "home"
  | "practice"
  | "simulacro"
  | "progress"
  | "onboarding"
  | "empty-state"
  | "achievement"
  | "error";

export interface MeroAsset {
  id: string;
  category: MeroCategory;
  ext: "webp";
  alt: string;
  emotion: MeroEmotion;
  action: string;
  contexts: MeroContext[];
  priority: "high" | "normal" | "low";
}

export const MERO_ASSETS: readonly MeroAsset[] = [
  // ── Estados ──────────────────────────────────────────────────────
  {
    id: "bienvenido",
    category: "estados",
    ext: "webp",
    alt: "Mero da la bienvenida con los brazos abiertos",
    emotion: "joy",
    action: "welcoming",
    contexts: ["home", "onboarding"],
    priority: "high",
  },
  {
    id: "feliz",
    category: "estados",
    ext: "webp",
    alt: "Mero sonríe feliz",
    emotion: "joy",
    action: "smiling",
    contexts: ["home", "practice", "achievement"],
    priority: "normal",
  },
  {
    id: "celebrando",
    category: "estados",
    ext: "webp",
    alt: "Mero celebra saltando de alegría",
    emotion: "celebration",
    action: "celebrating",
    contexts: ["achievement", "simulacro"],
    priority: "normal",
  },
  {
    id: "muy-bien",
    category: "estados",
    ext: "webp",
    alt: 'Mero gesticula "¡muy bien!"',
    emotion: "encouragement",
    action: "praising",
    contexts: ["practice", "achievement"],
    priority: "normal",
  },
  {
    id: "saludando",
    category: "estados",
    ext: "webp",
    alt: "Mero saluda con la mano",
    emotion: "joy",
    action: "waving",
    contexts: ["onboarding", "home"],
    priority: "normal",
  },
  {
    id: "vamos",
    category: "estados",
    ext: "webp",
    alt: "Mero anima con energía: ¡vamos!",
    emotion: "encouragement",
    action: "cheering",
    contexts: ["home", "practice", "simulacro"],
    priority: "normal",
  },
  // ── Gestos ───────────────────────────────────────────────────────
  {
    id: "pulgar-arriba",
    category: "gestos",
    ext: "webp",
    alt: "Mero da un pulgar arriba de aprobación",
    emotion: "encouragement",
    action: "approving",
    contexts: ["practice", "achievement"],
    priority: "normal",
  },
  {
    id: "senalando-arriba",
    category: "gestos",
    ext: "webp",
    alt: "Mero señala hacia arriba",
    emotion: "neutral",
    action: "pointing-up",
    contexts: ["practice", "home"],
    priority: "low",
  },
  // ── Estudio ──────────────────────────────────────────────────────
  {
    id: "pensando",
    category: "estudio",
    ext: "webp",
    alt: "Mero piensa con la mano en la barbilla",
    emotion: "focus",
    action: "thinking",
    contexts: ["practice"],
    priority: "high",
  },
  {
    id: "explicando",
    category: "estudio",
    ext: "webp",
    alt: "Mero explica gesticulando con las manos",
    emotion: "neutral",
    action: "explaining",
    contexts: ["practice"],
    priority: "high",
  },
  {
    id: "leyendo",
    category: "estudio",
    ext: "webp",
    alt: "Mero lee concentrado",
    emotion: "focus",
    action: "reading",
    contexts: ["practice", "progress"],
    priority: "normal",
  },
  {
    id: "estudiando-en-escritorio",
    category: "estudio",
    ext: "webp",
    alt: "Mero estudia en su escritorio",
    emotion: "focus",
    action: "studying",
    contexts: ["home", "practice"],
    priority: "normal",
  },
  {
    id: "escribiendo",
    category: "estudio",
    ext: "webp",
    alt: "Mero escribe tomando notas",
    emotion: "focus",
    action: "writing",
    contexts: ["practice", "simulacro"],
    priority: "normal",
  },
  // ── Simulacros ───────────────────────────────────────────────────
  {
    id: "marcando-correcta",
    category: "simulacros",
    ext: "webp",
    alt: "Mero marca una respuesta correcta",
    emotion: "joy",
    action: "marking-correct",
    contexts: ["practice", "simulacro"],
    priority: "high",
  },
  {
    id: "marcando-incorrecta",
    category: "simulacros",
    ext: "webp",
    alt: "Mero marca una respuesta incorrecta",
    emotion: "concern",
    action: "marking-incorrect",
    contexts: ["practice", "simulacro"],
    priority: "high",
  },
  {
    id: "completado",
    category: "simulacros",
    ext: "webp",
    alt: "Mero señala que la sesión está completada",
    emotion: "pride",
    action: "completing",
    contexts: ["simulacro", "practice"],
    priority: "normal",
  },
  {
    id: "tiempo-agotandose",
    category: "simulacros",
    ext: "webp",
    alt: "Mero advierte que el tiempo se agota",
    emotion: "concern",
    action: "warning-time",
    contexts: ["simulacro"],
    priority: "normal",
  },
  {
    id: "entregando-examen",
    category: "simulacros",
    ext: "webp",
    alt: "Mero entrega el examen completado",
    emotion: "pride",
    action: "submitting",
    contexts: ["simulacro"],
    priority: "normal",
  },
  // ── Gamificación ─────────────────────────────────────────────────
  {
    id: "racha",
    category: "gamificacion",
    ext: "webp",
    alt: "Mero celebra la racha de días estudiando",
    emotion: "celebration",
    action: "celebrating-streak",
    contexts: ["home", "achievement"],
    priority: "high",
  },
  {
    id: "nivel-nuevo",
    category: "gamificacion",
    ext: "webp",
    alt: "Mero celebra haber subido de nivel",
    emotion: "celebration",
    action: "leveling-up",
    contexts: ["achievement"],
    priority: "normal",
  },
  {
    id: "trofeo",
    category: "gamificacion",
    ext: "webp",
    alt: "Mero sostiene un trofeo",
    emotion: "pride",
    action: "holding-trophy",
    contexts: ["achievement", "progress"],
    priority: "normal",
  },
  {
    id: "medalla",
    category: "gamificacion",
    ext: "webp",
    alt: "Mero luce una medalla de logro",
    emotion: "pride",
    action: "showing-medal",
    contexts: ["achievement"],
    priority: "normal",
  },
  {
    id: "nuevo-logro",
    category: "gamificacion",
    ext: "webp",
    alt: "Mero anuncia un nuevo logro desbloqueado",
    emotion: "celebration",
    action: "announcing-achievement",
    contexts: ["achievement"],
    priority: "normal",
  },
  // ── Ayuda ────────────────────────────────────────────────────────
  {
    id: "sin-conexion",
    category: "ayuda",
    ext: "webp",
    alt: "Mero indica que no hay conexión a internet",
    emotion: "concern",
    action: "showing-no-connection",
    contexts: ["error", "empty-state"],
    priority: "normal",
  },
  {
    id: "sin-datos",
    category: "ayuda",
    ext: "webp",
    alt: "Mero señala que no hay datos disponibles",
    emotion: "concern",
    action: "showing-empty",
    contexts: ["empty-state"],
    priority: "normal",
  },
  {
    id: "no-encontrado",
    category: "ayuda",
    ext: "webp",
    alt: "Mero no encontró lo que buscabas",
    emotion: "concern",
    action: "showing-not-found",
    contexts: ["empty-state", "error"],
    priority: "normal",
  },
  {
    id: "no-te-rindas",
    category: "ayuda",
    ext: "webp",
    alt: "Mero anima: no te rindas, sigue intentando",
    emotion: "resilience",
    action: "encouraging",
    contexts: ["error", "practice"],
    priority: "normal",
  },
  {
    id: "intentalo-otra-vez",
    category: "ayuda",
    ext: "webp",
    alt: "Mero invita a intentarlo otra vez",
    emotion: "resilience",
    action: "retrying",
    contexts: ["error", "practice"],
    priority: "normal",
  },
] as const;

export function getMeroAsset(id: string): MeroAsset | undefined {
  return (MERO_ASSETS as readonly MeroAsset[]).find((a) => a.id === id);
}

export function getMeroSrc(id: string): string | null {
  const asset = getMeroAsset(id);
  return asset ? `/mero/${asset.category}/${asset.id}.${asset.ext}` : null;
}
