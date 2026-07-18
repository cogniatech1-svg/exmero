# ExMero — Fuente oficial de identidad de marca

> Este documento establece qué recursos constituyen la identidad visual oficial de ExMero
> y cuáles han sido descartados como referencia.
> En caso de conflicto entre cualquier documento y este archivo, este prevalece.

---

## La identidad oficial de ExMero está conformada por

### 1. Logo oficial
El logotipo de ExMero en sus variantes aprobadas (horizontal, isotipo, versión oscura, versión clara).
Ubicación canónica: `design/source_of_truth/logo/` (cuando quede congelada la biblioteca).

### 2. Mascota Mero
Mero es el entrenador personal del usuario. Es un personaje, no un ícono.
Tiene un sistema completo de expresión visual:

- **Biblioteca de emociones:** las expresiones faciales de Mero para diferentes estados emocionales.
- **Biblioteca de gestos:** poses completas del cuerpo de Mero (bienvenida, estudio, celebración, pensamiento, aliento).
- **Biblioteca de estudio:** variantes de Mero en contextos de aprendizaje.
- **Biblioteca de simulacros:** variantes de Mero en contextos de práctica y evaluación.
- **Estados especiales:** versiones para situaciones concretas (racha en riesgo, logro desbloqueado, etc.).
- **Versiones con transparencia:** para uso sobre fondos de color.

Ubicación canónica: `design/source_of_truth/mero/`

### 3. Colores oficiales

| Nombre | Valor | Uso |
|---|---|---|
| Mero Blue | `#4badd9` | Color primario de marca. Acciones principales, CTAs, estados activos. |
| Navy | `#0f1b3d` | Fondo oscuro, texto principal, elementos de jerarquía alta. |
| Gold | `#f2a429` | Logros, trofeos, gamificación, rachas de alto nivel. |
| Teal | `#00c4cc` | Acento secundario, elementos de apoyo, highlights de IA. |
| Red | `#e03a1b` | Errores, alertas, estados destructivos. |

La paleta completa con sus escalas (50–900) está definida en `frontend/app/globals.css`.

### 4. Tipografía oficial

| Fuente | Uso | Pesos |
|---|---|---|
| **Manrope** | Toda la interfaz funcional: botones, cuerpo, datos, etiquetas, navegación. | 400 / 500 / 600 / 700 / 800 |
| **Source Serif 4** | Solo para títulos editoriales con peso emocional y frases de Mero en momentos especiales. Nunca en UI funcional. | 600 / 700 |

### 5. Ilustraciones
Ilustraciones de escena y contexto que complementan la narrativa del producto.
Ubicación canónica: `design/source_of_truth/ilustraciones/`

### 6. Iconografía
El sistema de íconos lineal (1.5px stroke, esquinas redondeadas).
En desarrollo funcional, se usa Lucide React como base hasta que la biblioteca personalizada esté congelada.
Ubicación canónica: `design/source_of_truth/iconos/`

---

## Recursos descartados como referencia oficial

Los siguientes recursos **NO deben usarse** como referencia de identidad visual del producto:

### Recursos del ZIP "Exmero Arquitectura de producto completo"
- `assets/mero-hero.png`
- `assets/mero-laptop.png`
- `assets/mero-reading.png`
- `assets/mero-thumbsup.png`
- `assets/mero-trophy.png`

Estos archivos fueron utilizados exclusivamente durante la etapa de exploración del producto para visualizar la arquitectura funcional. No representan el estilo gráfico oficial ni las proporciones, paleta o expresión definitiva del personaje Mero.

### Paleta del Design Spec (ZIP)
- Navy `#141a33`, Teal `#0e9f80`, Amber `#c9821a`

Esta paleta fue usada en el documento de arquitectura para hacer los mockups legibles. No es la paleta de marca de ExMero. La identidad oficial usa Mero Blue, Navy oscuro y Gold.

### Mockups temporales
Cualquier mockup o wireframe producido antes de que la biblioteca oficial esté congelada es referencia provisional. Solo los recursos dentro de `design/source_of_truth/` son canónicos.

---

## Reglas de uso de la marca

1. **Nunca usar imágenes exploratorias en la app en producción.**
2. **Nunca usar la paleta del Design Spec ZIP en la UI.** El Design Spec es referencia de arquitectura, no de identidad.
3. **Nunca modificar las proporciones ni colores de Mero** sin aprobación explícita.
4. **El degradado teal→navy del logo** no se usa en la UI de la app. Solo en piezas de marca (splash, marketing).
5. **Todo asset nuevo de Mero** debe seguir las guías de la biblioteca oficial antes de integrarse al producto.

---

## Estado de la biblioteca oficial

> **En construcción.** La biblioteca oficial de imágenes de ExMero está siendo desarrollada.
> Cuando quede congelada, todos los assets se centralizarán en `design/source_of_truth/`.
> Hasta entonces, el desarrollo funcional puede proceder usando placeholders o el emoji 🦈 como representación de Mero en la UI.

---

*Última revisión: 2026-07-18*
