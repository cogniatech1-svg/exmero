# Guía de uso — Biblioteca Visual de Mero

> **Estado:** Activo · MVP (28 activos)  
> **Fuente oficial de imágenes:** `03_Productos/exmero/01_Marca/referencias/`  
> **Activos en producción:** `frontend/public/mero/{categoria}/`

---

## Regla arquitectónica (obligatoria)

**Prohibido** referenciar activos de Mero directamente en componentes de UI.

```tsx
// ✗ PROHIBIDO — nunca hacer esto
<Image src="/mero/estados/bienvenido.jpg" alt="..." />
import bienvenido from "@/public/mero/estados/bienvenido.jpg";
```

**Toda ilustración de Mero se renderiza exclusivamente mediante `<MeroScene />`:**

```tsx
// ✓ CORRECTO
import { MeroScene } from "@/components/mero/MeroScene";
import { MERO_SCENES } from "@/lib/mero/scenes";

<MeroScene id={MERO_SCENES.welcome} size="sm" priority />
```

Esta regla garantiza que el manifest sea la única fuente de verdad y que cualquier cambio de activo se propague automáticamente a todas las pantallas.

---

## Arquitectura en tres capas

```
01_Marca/referencias/      ← archivos originales (fuente oficial, no modificar)
       ↓ copiar + renombrar
public/mero/{categoria}/   ← activos listos para Next.js
       ↓ registrar en
lib/mero/manifest.ts       ← id, ruta, alt, emotion, action, contexts, priority
       ↓ mapear en
lib/mero/scenes.ts         ← intenciones semánticas que usan las pantallas
       ↓ consumir con
components/mero/MeroScene  ← único punto de renderizado
```

---

## Uso en pantallas

```tsx
import { MeroScene } from "@/components/mero/MeroScene";
import { MERO_SCENES } from "@/lib/mero/scenes";

// Escenas por intención — reutilizables en cualquier pantalla
<MeroScene id={MERO_SCENES.welcome}      size="sm" priority />
<MeroScene id={MERO_SCENES.explaining}   size="md" />
<MeroScene id={MERO_SCENES.correct}      size="md" />
<MeroScene id={MERO_SCENES.noData}       size="lg" />
```

Las escenas son **intenciones, no pantallas**. `MERO_SCENES.welcome` puede aparecer en Home, Onboarding o cualquier otro contexto donde Mero dé la bienvenida.

### Props de `<MeroScene />`

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `id` | `string` | — | ID del activo (siempre via `MERO_SCENES`) |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Tamaño en píxeles cuadrados |
| `priority` | `boolean` | auto | Sobreescribe la prioridad del manifiesto |
| `className` | `string` | — | Clases Tailwind adicionales |

### Tamaños

| Size | Px | Uso típico |
|---|---|---|
| `sm` | 80 × 80 | Inline en tarjetas o mensajes |
| `md` | 140 × 140 | Cards de estado, notificaciones |
| `lg` | 200 × 200 | Pantallas de logro, empty states |
| `xl` | 280 × 280 | Onboarding, pantallas de resultado |

---

## Escenas disponibles (`MERO_SCENES`)

| Escena | Asset default | Intención |
|---|---|---|
| `welcome` | bienvenido | Entrada principal, onboarding |
| `greeting` | saludando | Saludo casual |
| `happy` | feliz | Positivo general |
| `celebrating` | celebrando | Logro grande |
| `success` | muy-bien | Aprobación de una acción |
| `encouragement` | vamos | "Tú puedes" |
| `thumbsUp` | pulgar-arriba | Aprobación rápida |
| `thinking` | pensando | Procesando, analizando |
| `explaining` | explicando | Enseñando un concepto |
| `reading` | leyendo | Leyendo una lección |
| `studying` | estudiando-en-escritorio | Sesión de estudio activa |
| `writing` | escribiendo | Tomando notas, respondiendo |
| `correct` | marcando-correcta | Respuesta correcta |
| `incorrect` | marcando-incorrecta | Respuesta incorrecta |
| `completed` | completado | Sesión o examen terminado |
| `timeWarning` | tiempo-agotandose | El tiempo se agota |
| `submitting` | entregando-examen | Entregando el examen |
| `streak` | racha | Celebración de racha |
| `levelUp` | nivel-nuevo | Subida de nivel |
| `trophy` | trofeo | Trofeo de logro |
| `medal` | medalla | Medalla |
| `achievement` | nuevo-logro | Nuevo logro desbloqueado |
| `error` | intentalo-otra-vez | Error genérico recuperable |
| `dontGiveUp` | no-te-rindas | Resiliencia |
| `tryAgain` | intentalo-otra-vez | Reintentar |
| `noConnection` | sin-conexion | Sin internet |
| `noData` | sin-datos | Sin datos disponibles |
| `notFound` | no-encontrado | No encontrado (404) |

---

## Variantes (arquitectura preparada)

Cada escena tiene un registro de variantes en `MERO_SCENE_VARIANTS`. El índice `[0]` siempre es el asset default actual. La lógica de selección (aleatoria, contextual, por usuario) **no está implementada todavía** — está preparada para una iteración futura.

```ts
// lib/mero/scenes.ts
MERO_SCENE_VARIANTS.welcome    // ["bienvenido", "saludando"]
MERO_SCENE_VARIANTS.success    // ["muy-bien", "celebrando", "pulgar-arriba"]
MERO_SCENE_VARIANTS.achievement // ["nuevo-logro", "trofeo", "medalla"]
```

Cuando se implemente la selección, el componente recibirá una prop `scene` (en lugar de `id`) y resolverá la variante internamente. El API actual (`id`) no cambiará para los casos que lo necesiten.

---

## Agregar un nuevo activo

### 1. Copiar a `public/mero/{categoria}/`

Slug kebab-case, sin acentos, sin espacios:

```
public/mero/estados/brazos-abiertos.jpg
```

Convención: minúsculas · `ñ→n` · `é→e` · `á→a` · espacios→`-`

### 2. Registrar en `manifest.ts`

```ts
{
  id: "brazos-abiertos",
  category: "estados",
  ext: "jpg",
  alt: "Mero extiende los brazos en señal de bienvenida",
  emotion: "joy",
  action: "open-arms",
  contexts: ["onboarding", "home"],
  priority: "normal",
},
```

### 3. Agregar o actualizar en `scenes.ts`

Si es un nuevo default o una nueva intención:

```ts
// Nueva escena
openArms: "brazos-abiertos",

// O nueva variante de escena existente
MERO_SCENE_VARIANTS.welcome = ["bienvenido", "saludando", "brazos-abiertos"],
```

---

## Estándar de formato y tamaño

| Criterio | Estándar |
|---|---|
| **Formato preferido** | JPG (fondo opaco o blanco) |
| **Con transparencia** | PNG |
| **WebP / conversión** | Next.js `<Image>` convierte automáticamente |
| **Animados** | No aceptados en esta versión |
| **Dimensión mínima** | 400 × 400 px |
| **Dimensión recomendada** | 800 × 800 px |
| **Relación de aspecto** | Cuadrada (1:1) o retrato suave (3:4) |
| **Peso máximo** | 500 KB (Next.js optimiza en runtime) |
| **Margen alrededor del personaje** | ~10% en cada lado |
| **Pre-comprimir** | No — entregar la mayor resolución disponible |
