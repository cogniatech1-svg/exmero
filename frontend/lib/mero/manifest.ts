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
  { id: "bienvenido", category: "estados", ext: "webp", alt: "Mero da la bienvenida con los brazos abiertos", emotion: "joy", action: "welcoming", contexts: ["home", "onboarding"], priority: "high" },
  { id: "feliz", category: "estados", ext: "webp", alt: "Mero sonríe feliz", emotion: "joy", action: "smiling", contexts: ["home", "practice", "achievement"], priority: "high" },
  { id: "celebrando", category: "estados", ext: "webp", alt: "Mero celebra saltando de alegría", emotion: "celebration", action: "celebrating", contexts: ["achievement", "simulacro"], priority: "normal" },
  { id: "bien-hecho", category: "estados", ext: "webp", alt: "Mero muestra aprobación: bien hecho", emotion: "encouragement", action: "praising", contexts: ["practice", "achievement"], priority: "normal" },
  { id: "vamos", category: "estados", ext: "webp", alt: "Mero anima con energía: ¡vamos!", emotion: "encouragement", action: "cheering", contexts: ["home", "practice", "simulacro"], priority: "high" },
  { id: "muy-bien", category: "estados", ext: "webp", alt: "Mero gesticula muy bien", emotion: "encouragement", action: "approving", contexts: ["practice", "achievement"], priority: "normal" },
  { id: "saludando", category: "estados", ext: "webp", alt: "Mero saluda con la mano", emotion: "joy", action: "waving", contexts: ["onboarding", "home"], priority: "normal" },
  { id: "excelente", category: "estados", ext: "webp", alt: "Mero celebra con gesto de excelente", emotion: "celebration", action: "excelling", contexts: ["achievement", "practice"], priority: "normal" },
  { id: "mano-en-el-pecho", category: "estados", ext: "webp", alt: "Mero pone la mano en el pecho en señal de compromiso", emotion: "pride", action: "committing", contexts: ["onboarding", "home"], priority: "low" },
  { id: "brazos-abiertos", category: "estados", ext: "webp", alt: "Mero extiende los brazos en señal de apertura", emotion: "joy", action: "opening-arms", contexts: ["onboarding", "home"], priority: "low" },
  { id: "invitando-a-continuar", category: "estados", ext: "webp", alt: "Mero invita a continuar con un gesto", emotion: "encouragement", action: "inviting", contexts: ["practice", "home"], priority: "normal" },
  { id: "sigue", category: "estados", ext: "webp", alt: "Mero anima a seguir adelante", emotion: "encouragement", action: "urging-forward", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "casi", category: "estados", ext: "webp", alt: "Mero anima: casi lo logras", emotion: "encouragement", action: "almost-there", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "confeti", category: "estados", ext: "webp", alt: "Mero celebra con confeti", emotion: "celebration", action: "celebrating-confetti", contexts: ["achievement"], priority: "normal" },
  { id: "fuegos-artificiales", category: "estados", ext: "webp", alt: "Mero celebra con fuegos artificiales", emotion: "celebration", action: "fireworks", contexts: ["achievement"], priority: "low" },
  { id: "aplaudiendo", category: "estados", ext: "webp", alt: "Mero aplaude con entusiasmo", emotion: "celebration", action: "clapping", contexts: ["achievement", "practice"], priority: "normal" },
  { id: "escuchando", category: "estados", ext: "webp", alt: "Mero escucha atentamente", emotion: "focus", action: "listening", contexts: ["practice", "onboarding"], priority: "normal" },
  { id: "tomando-cafe", category: "estados", ext: "webp", alt: "Mero toma un café", emotion: "neutral", action: "having-coffee", contexts: ["home"], priority: "low" },
  // ── Gestos ───────────────────────────────────────────────────────
  { id: "pulgar-arriba", category: "gestos", ext: "webp", alt: "Mero da un pulgar arriba de aprobación", emotion: "encouragement", action: "approving", contexts: ["practice", "achievement"], priority: "high" },
  { id: "senalando-arriba", category: "gestos", ext: "webp", alt: "Mero señala hacia arriba", emotion: "neutral", action: "pointing-up", contexts: ["practice", "home"], priority: "normal" },
  { id: "senalando-abajo", category: "gestos", ext: "webp", alt: "Mero señala hacia abajo", emotion: "neutral", action: "pointing-down", contexts: ["practice"], priority: "low" },
  { id: "senalando-derecha", category: "gestos", ext: "webp", alt: "Mero señala hacia la derecha", emotion: "neutral", action: "pointing-right", contexts: ["practice", "home"], priority: "low" },
  { id: "mostrando-un-ejemplo", category: "gestos", ext: "webp", alt: "Mero muestra un ejemplo con las manos", emotion: "neutral", action: "showing-example", contexts: ["practice"], priority: "normal" },
  { id: "mostrando-resultados", category: "gestos", ext: "webp", alt: "Mero presenta los resultados", emotion: "neutral", action: "presenting-results", contexts: ["practice", "simulacro", "progress"], priority: "normal" },
  // ── Estudio ──────────────────────────────────────────────────────
  { id: "pensando", category: "estudio", ext: "webp", alt: "Mero piensa con la mano en la barbilla", emotion: "focus", action: "thinking", contexts: ["practice"], priority: "high" },
  { id: "explicando", category: "estudio", ext: "webp", alt: "Mero explica gesticulando con las manos", emotion: "neutral", action: "explaining", contexts: ["practice"], priority: "high" },
  { id: "leyendo", category: "estudio", ext: "webp", alt: "Mero lee concentrado", emotion: "focus", action: "reading", contexts: ["practice", "progress"], priority: "normal" },
  { id: "estudiando-en-escritorio", category: "estudio", ext: "webp", alt: "Mero estudia en su escritorio", emotion: "focus", action: "studying", contexts: ["home", "practice"], priority: "high" },
  { id: "escribiendo", category: "estudio", ext: "webp", alt: "Mero escribe tomando notas", emotion: "focus", action: "writing", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "explicando-paso-a-paso", category: "estudio", ext: "webp", alt: "Mero explica paso a paso", emotion: "neutral", action: "step-by-step", contexts: ["practice"], priority: "normal" },
  { id: "tomando-notas", category: "estudio", ext: "webp", alt: "Mero toma notas con un lápiz", emotion: "focus", action: "taking-notes", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "analizando", category: "estudio", ext: "webp", alt: "Mero analiza información", emotion: "focus", action: "analyzing", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "haciendo-flashcards", category: "estudio", ext: "webp", alt: "Mero repasa con flashcards", emotion: "focus", action: "flashcards", contexts: ["practice"], priority: "low" },
  { id: "resolviendo-preguntas", category: "estudio", ext: "webp", alt: "Mero resuelve preguntas", emotion: "focus", action: "solving", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "ensenando", category: "estudio", ext: "webp", alt: "Mero enseña frente a una pizarra", emotion: "neutral", action: "teaching", contexts: ["practice"], priority: "normal" },
  { id: "buscando-informacion", category: "estudio", ext: "webp", alt: "Mero busca información", emotion: "focus", action: "searching", contexts: ["practice", "empty-state"], priority: "normal" },
  { id: "leer", category: "estudio", ext: "webp", alt: "Mero lee un documento", emotion: "focus", action: "reading-doc", contexts: ["practice"], priority: "low" },
  { id: "leyendo-un-libro", category: "estudio", ext: "webp", alt: "Mero lee un libro", emotion: "focus", action: "reading-book", contexts: ["practice"], priority: "low" },
  { id: "comparando-opciones", category: "estudio", ext: "webp", alt: "Mero compara opciones", emotion: "focus", action: "comparing", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "mirando-una-pantalla", category: "estudio", ext: "webp", alt: "Mero mira una pantalla", emotion: "focus", action: "watching-screen", contexts: ["practice", "home"], priority: "low" },
  { id: "con-un-resaltador", category: "estudio", ext: "webp", alt: "Mero marca con un resaltador", emotion: "focus", action: "highlighting", contexts: ["practice"], priority: "low" },
  { id: "con-computador", category: "estudio", ext: "webp", alt: "Mero trabaja con un computador", emotion: "focus", action: "using-computer", contexts: ["practice", "home"], priority: "normal" },
  { id: "con-un-portatil", category: "estudio", ext: "webp", alt: "Mero usa un portátil", emotion: "focus", action: "using-laptop", contexts: ["practice"], priority: "low" },
  { id: "con-una-tablet", category: "estudio", ext: "webp", alt: "Mero usa una tablet", emotion: "focus", action: "using-tablet", contexts: ["practice"], priority: "low" },
  // ── Simulacros ───────────────────────────────────────────────────
  { id: "marcando-correcta", category: "simulacros", ext: "webp", alt: "Mero marca una respuesta correcta", emotion: "joy", action: "marking-correct", contexts: ["practice", "simulacro"], priority: "high" },
  { id: "marcando-incorrecta", category: "simulacros", ext: "webp", alt: "Mero marca una respuesta incorrecta", emotion: "concern", action: "marking-incorrect", contexts: ["practice", "simulacro"], priority: "high" },
  { id: "completado", category: "simulacros", ext: "webp", alt: "Mero señala que la sesión está completada", emotion: "pride", action: "completing", contexts: ["simulacro", "practice"], priority: "high" },
  { id: "tiempo-agotandose", category: "simulacros", ext: "webp", alt: "Mero advierte que el tiempo se agota", emotion: "concern", action: "warning-time", contexts: ["simulacro"], priority: "high" },
  { id: "entregando-examen", category: "simulacros", ext: "webp", alt: "Mero entrega el examen completado", emotion: "pride", action: "submitting", contexts: ["simulacro"], priority: "normal" },
  { id: "revisando-examen", category: "simulacros", ext: "webp", alt: "Mero revisa el examen", emotion: "focus", action: "reviewing-exam", contexts: ["simulacro", "practice"], priority: "normal" },
  { id: "respondiendo", category: "simulacros", ext: "webp", alt: "Mero responde una pregunta", emotion: "focus", action: "answering", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "corrigiendo-respuestas", category: "simulacros", ext: "webp", alt: "Mero corrige respuestas", emotion: "focus", action: "correcting", contexts: ["practice", "simulacro"], priority: "normal" },
  { id: "revisando-normas", category: "simulacros", ext: "webp", alt: "Mero revisa las normas del examen", emotion: "focus", action: "reviewing-rules", contexts: ["simulacro"], priority: "normal" },
  { id: "cronometro", category: "simulacros", ext: "webp", alt: "Mero muestra un cronómetro", emotion: "neutral", action: "showing-timer", contexts: ["simulacro"], priority: "low" },
  { id: "con-cronometro", category: "simulacros", ext: "webp", alt: "Mero sostiene un cronómetro", emotion: "concern", action: "holding-timer", contexts: ["simulacro"], priority: "low" },
  // ── Gamificación ─────────────────────────────────────────────────
  { id: "racha", category: "gamificacion", ext: "webp", alt: "Mero celebra la racha de días estudiando", emotion: "celebration", action: "celebrating-streak", contexts: ["home", "achievement"], priority: "high" },
  { id: "nivel-nuevo", category: "gamificacion", ext: "webp", alt: "Mero celebra haber subido de nivel", emotion: "celebration", action: "leveling-up", contexts: ["achievement"], priority: "normal" },
  { id: "trofeo", category: "gamificacion", ext: "webp", alt: "Mero sostiene un trofeo", emotion: "pride", action: "holding-trophy", contexts: ["achievement", "progress"], priority: "normal" },
  { id: "medalla", category: "gamificacion", ext: "webp", alt: "Mero luce una medalla de logro", emotion: "pride", action: "showing-medal", contexts: ["achievement"], priority: "normal" },
  { id: "nuevo-logro", category: "gamificacion", ext: "webp", alt: "Mero anuncia un nuevo logro desbloqueado", emotion: "celebration", action: "announcing-achievement", contexts: ["achievement"], priority: "normal" },
  { id: "diamante", category: "gamificacion", ext: "webp", alt: "Mero sostiene un diamante de rango", emotion: "pride", action: "showing-diamond", contexts: ["achievement", "progress"], priority: "low" },
  { id: "estrella", category: "gamificacion", ext: "webp", alt: "Mero muestra una estrella de logro", emotion: "pride", action: "showing-star", contexts: ["achievement"], priority: "low" },
  { id: "insignia", category: "gamificacion", ext: "webp", alt: "Mero muestra una insignia obtenida", emotion: "pride", action: "showing-badge", contexts: ["achievement"], priority: "low" },
  { id: "celebrando-aprobacion", category: "gamificacion", ext: "webp", alt: "Mero celebra la aprobación del concurso", emotion: "celebration", action: "celebrating-approval", contexts: ["achievement", "simulacro"], priority: "normal" },
  { id: "meta-alcanzada", category: "gamificacion", ext: "webp", alt: "Mero festeja haber alcanzado una meta", emotion: "celebration", action: "goal-reached", contexts: ["achievement", "progress"], priority: "normal" },
  { id: "meta-cumplida", category: "gamificacion", ext: "webp", alt: "Mero confirma que la meta fue cumplida", emotion: "pride", action: "goal-completed", contexts: ["achievement", "progress"], priority: "normal" },
  // ── Ayuda ────────────────────────────────────────────────────────
  { id: "sin-conexion", category: "ayuda", ext: "webp", alt: "Mero indica que no hay conexión a internet", emotion: "concern", action: "showing-no-connection", contexts: ["error", "empty-state"], priority: "high" },
  { id: "sin-datos", category: "ayuda", ext: "webp", alt: "Mero señala que no hay datos disponibles", emotion: "concern", action: "showing-empty", contexts: ["empty-state"], priority: "high" },
  { id: "no-encontrado", category: "ayuda", ext: "webp", alt: "Mero no encontró lo que buscabas", emotion: "concern", action: "showing-not-found", contexts: ["empty-state", "error"], priority: "high" },
  { id: "no-te-rindas", category: "ayuda", ext: "webp", alt: "Mero anima: no te rindas, sigue intentando", emotion: "resilience", action: "encouraging", contexts: ["error", "practice"], priority: "normal" },
  { id: "intentalo-otra-vez", category: "ayuda", ext: "webp", alt: "Mero invita a intentarlo otra vez", emotion: "resilience", action: "retrying", contexts: ["error", "practice"], priority: "normal" },
  { id: "error", category: "ayuda", ext: "webp", alt: "Mero muestra un error inesperado", emotion: "concern", action: "showing-error", contexts: ["error"], priority: "normal" },
  { id: "guardado", category: "ayuda", ext: "webp", alt: "Mero confirma que se guardó correctamente", emotion: "joy", action: "confirming-save", contexts: ["practice", "simulacro"], priority: "low" },
  { id: "guardar-copia", category: "ayuda", ext: "webp", alt: "Mero sugiere guardar una copia", emotion: "neutral", action: "saving-copy", contexts: ["practice"], priority: "low" },
  { id: "actualizando", category: "ayuda", ext: "webp", alt: "Mero indica que se está actualizando", emotion: "neutral", action: "updating", contexts: ["error", "empty-state"], priority: "low" },
  // ── Cargos ───────────────────────────────────────────────────────
  { id: "con-bata", category: "cargos", ext: "webp", alt: "Mero viste una bata de laboratorio", emotion: "pride", action: "wearing-lab-coat", contexts: ["onboarding", "home"], priority: "low" },
  { id: "con-casco", category: "cargos", ext: "webp", alt: "Mero lleva un casco de seguridad", emotion: "pride", action: "wearing-helmet", contexts: ["onboarding", "home"], priority: "low" },
  { id: "con-toga", category: "cargos", ext: "webp", alt: "Mero viste toga de graduación", emotion: "pride", action: "wearing-gown", contexts: ["achievement", "onboarding"], priority: "normal" },
  { id: "con-traje-ejecutivo", category: "cargos", ext: "webp", alt: "Mero viste traje ejecutivo", emotion: "pride", action: "wearing-suit", contexts: ["onboarding", "home"], priority: "low" },
  { id: "con-carpeta", category: "cargos", ext: "webp", alt: "Mero sostiene una carpeta de documentos", emotion: "neutral", action: "holding-folder", contexts: ["practice", "simulacro"], priority: "low" },
  { id: "con-maletin", category: "cargos", ext: "webp", alt: "Mero lleva un maletín de trabajo", emotion: "pride", action: "holding-briefcase", contexts: ["onboarding", "home"], priority: "low" },
  { id: "con-documentos", category: "cargos", ext: "webp", alt: "Mero sostiene documentos", emotion: "neutral", action: "holding-documents", contexts: ["practice", "simulacro"], priority: "low" },
  { id: "con-documentos-oficiales", category: "cargos", ext: "webp", alt: "Mero presenta documentos oficiales", emotion: "pride", action: "presenting-documents", contexts: ["simulacro", "onboarding"], priority: "low" },
  { id: "con-lupa", category: "cargos", ext: "webp", alt: "Mero inspecciona con una lupa", emotion: "focus", action: "inspecting", contexts: ["practice", "empty-state"], priority: "low" },
  { id: "con-uniforme-dian", category: "cargos", ext: "webp", alt: "Mero viste uniforme de la DIAN", emotion: "pride", action: "wearing-dian-uniform", contexts: ["onboarding", "home"], priority: "low" },
  { id: "con-uniforme-policia", category: "cargos", ext: "webp", alt: "Mero viste uniforme de policía", emotion: "pride", action: "wearing-police-uniform", contexts: ["onboarding", "home"], priority: "low" },
] as const;

export function getMeroAsset(id: string): MeroAsset | undefined {
  return (MERO_ASSETS as readonly MeroAsset[]).find((a) => a.id === id);
}

export function getMeroSrc(id: string): string | null {
  const asset = getMeroAsset(id);
  return asset ? `/mero/${asset.category}/${asset.id}.${asset.ext}` : null;
}
