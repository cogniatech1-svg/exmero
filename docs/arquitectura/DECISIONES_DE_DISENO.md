# ExMero — Decisiones de diseño

> Registro oficial de decisiones de diseño tomadas, pospuestas y descartadas.
> Propósito: evitar que se revisen decisiones ya cerradas y documentar el razonamiento detrás de cada una.

---

## Decisiones oficiales y en vigor

### D-001 — Tipografía del producto

**Estado:** Aprobada · Activa desde T0.11.5

- **UI completa:** Manrope (400/500/600/700/800)
- **Editorial y frases de Mero con peso emocional:** Source Serif 4 (600/700)

**Razón:** Manrope ofrece legibilidad óptima en pantallas pequeñas y un carácter técnico-amigable coherente con la naturaleza del producto (preparación a concursos). Source Serif 4 aporta calidad editorial en los momentos de comunicación de Mero, diferenciando la voz del entrenador de la UI funcional.

**Descartada:** Plus Jakarta Sans (fue usada durante Proceso 0 de scaffolding, eliminada en T0.11.5).

---

### D-002 — Paleta de color

**Estado:** Aprobada · Activa desde T0.5 con ajustes en T0.11.5

**Identidad Mero:**
- **Primario:** Mero Blue (`#4badd9`) — color de la piel del personaje. Es el azul de acción de la marca.
- **Secundario:** Navy (`#0f1b3d` como navy-800) — color del hoodie y aleta.
- **Gamificación:** Gold (`#f2a429`) — logros, trofeos, rachas de alto nivel.
- **Acento UI:** Teal (`#00c4cc`) — cordones del hoodie, elementos de apoyo.
- **Error:** Red (`#e03a1b`).

**Ajuste T0.11.5 — tokens semánticos cálidos:**
Los tokens de superficie y borde fueron actualizados de grises azulados fríos a tonos cálidos beige, consistentes con el fondo `#faf9f6`:
- `--background`: `#ffffff` → `#faf9f6`
- `--surface`: `#f5f7fa` → `#f1efe9`
- `--border`: `#dde3ec` → `#ece9e2`
- `--foreground-muted`: `#4a5c7a` → `#7a7f86`

**Descartada:** Migración completa a la paleta teal `#0e9f80` + navy `#141a33` propuesta en el Design Spec ZIP. La identidad visual oficial de ExMero ya estaba consolidada con Mero Blue antes de recibir ese documento. El Design Spec se usa como referencia de arquitectura de producto, no de identidad de marca.

---

### D-003 — Navegación principal (Bottom Nav)

**Estado:** Aprobada · Activa desde T0.11.5

Cinco secciones con tabs iguales. Sin FAB central en la barra de navegación:

| Posición | Sección | Ruta | Icono |
|---|---|---|---|
| 1 | Inicio | `/` | House |
| 2 | Ruta | `/ruta` | Map |
| 3 | Simulacros | `/simulacros` | Target |
| 4 | Progreso | `/progreso` | BarChart2 |
| 5 | Perfil | `/perfil` | User |

**Razón:** La sección "Ruta" es el eje del aprendizaje y merece un lugar permanente en la navegación principal. La estructura de 5 tabs iguales reduce la jerarquía visual en la navegación y deja el protagonismo a cada sección.

---

### D-004 — Fondo global

**Estado:** Aprobada · Activa desde T0.11.5

Fondo `#faf9f6` (blanco cálido, no puro). El blanco puro `#ffffff` queda reservado para cards flotantes y elementos que necesitan contraste máximo sobre el fondo de página.

---

### D-005 — Radios de esquina

**Estado:** Aprobada · Activa desde T0.5

- `12px` (`--radius-md`): componentes estándar, cards, botones, inputs.
- `20px` (`--radius-xl`): sheets, modales, overlays.
- `9999px` (`--radius-full`): chips, badges, avatares, FAB.

---

### D-006 — Fuente única de verdad para `cn()`

**Estado:** Aprobada · Activa desde T0.8

`cn()` (clsx + tailwind-merge) vive en `packages/ui/src/utils/cn.ts`.
`frontend/lib/utils.ts` lo re-exporta. Ningún otro archivo implementa su propia versión.

---

## Decisiones pospuestas

### DP-001 — Posición definitiva del FAB de Mero

**Estado:** Pospuesta — pendiente de pruebas de uso

La posición final del botón flotante de acceso al chat con Mero (esquina inferior derecha vs. integrado en Home vs. otra ubicación) se decidirá después de pruebas de uso con usuarios reales. La arquitectura del producto lo coloca en el lower-right sobre el bottom nav, pero la implementación espera validación.

---

### DP-002 — Iconografía SVG personalizada vs. Lucide React

**Estado:** Pospuesta

El sistema de iconos actual usa Lucide React por velocidad de desarrollo. El Design Spec menciona iconografía lineal 1.5px con esquinas redondeadas que podría no coincidir exactamente con Lucide. Se evaluará cuando la identidad visual oficial esté completamente congelada.

---

### DP-003 — Modo oscuro

**Estado:** Pospuesta — post-MVP

El Design Spec define que el modo oscuro usa navy como fondo (`--navy-800` o similar). No se implementa hasta que el modo claro esté completamente validado con usuarios.

---

### DP-004 — `packages/ui` build pipeline

**Estado:** Pospuesta

`@exmero/ui` actualmente expone `./src/index.ts` directamente como entrypoint. Funciona en dev con path aliasing de TypeScript/Next.js. Antes de agregar lógica de componentes reales al paquete, se debe configurar un build step (tsup o similar) para garantizar compatibilidad en todos los entornos.

---

## Principios inmutables de diseño

1. **Identidad de Mero primero.** En cualquier conflicto entre el Design Spec y la identidad oficial de marca, prevalece la marca.
2. **Un CTA primario por pantalla.** Nunca más de uno.
3. **El error nunca es una pantalla en blanco.** Siempre hay un fallback visible.
4. **Mero nunca dice "estás mal".** El tono es siempre de coach, no de sistema.
5. **El color nunca es el único portador de significado.** Correcto/incorrecto siempre llevan ícono además de color (accesibilidad daltonismo).
6. **Mínimo 44×44px en todo elemento interactivo.**
7. **Sin urgencia falsa.** Los contadores y banners de "oferta limitada" son prohibidos si no son reales.

---

*Última revisión: 2026-07-18*
