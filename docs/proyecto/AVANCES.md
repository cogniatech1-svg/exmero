# Historial de avances — ExMero

---

## Avance 1 — Fundamentos del producto
**Estado:** ✅ Congelado  
**Fecha:** 2026-07-19

### Documentos producidos

| Documento | Ruta | Descripción |
|---|---|---|
| Visión MVP | `docs/producto/EXMERO_MVP_VISION.md` | Definición oficial, pilares, mapa del producto, decisiones congeladas |
| Modelo funcional | `docs/producto/MODELO_FUNCIONAL.md` | Cinco entidades, dominio global, foco, preparaciones, mérito |
| Home funcional | `docs/producto/funcional/HOME_FUNCIONAL.md` | Especificación completa de la pantalla de inicio |
| Sistema de misiones | `docs/producto/funcional/SISTEMA_MISIONES.md` | Motor del entrenamiento, cuatro fases, mérito, constancia |
| Sesión de preparación | `docs/producto/funcional/SESION_PREPARACION.md` | Recorrido completo de la sesión, papel de Mero, cierre |

### Decisiones congeladas de este avance

- ExMero es un entrenador inteligente para aspirantes a concursos públicos en Colombia.
- Navegación oficial: Inicio · Radar · Mi Preparación · Mi Progreso · Perfil.
- Cuatro métricas: Mérito (entrenamiento genuino) · Constancia (continuidad) · Dominio (conocimiento) · Probabilidad de aprobación.
- Mero nunca aparece por decoración. Cada intervención tiene función.
- El silencio de Mero es tan importante como su voz.
- El Home siempre tiene una misión activa.
- Una sesión nunca termina en veredicto: termina en puente hacia el siguiente paso.

---

## Avance 2 — Primer recorrido funcional
**Estado:** ✅ Completado y desplegado en Cloudflare Pages  
**Fecha de inicio:** 2026-07-19  
**Plataforma:** Cloudflare Pages

### Objetivo

Permitir que un usuario complete una misión completa desde el Home hasta el regreso al Home.

### Recorrido implementado

```
Inicio de la aplicación
↓
Home (misión del día visible)
↓
Umbral de misión (propósito visible + Mero)
↓
Sesión de preparación (preguntas + feedback + explicaciones)
↓
Cierre de sesión (reconocimiento + dominio + mérito + puente)
↓
Regreso al Home
```

### Criterios de aceptación

- [x] La navegación refleja los labels y rutas oficiales (Radar, Mi Preparación, Mi Progreso, Perfil)
- [x] El Home muestra la misión del día con propósito visible
- [x] El botón "Comenzar sesión" lleva al umbral de la misión
- [x] El umbral muestra competencia, propósito, alcance y Mero
- [x] La sesión permite responder preguntas una a una
- [x] La retroalimentación de Mero aparece en momentos correctos y guarda silencio en el resto
- [x] Las explicaciones aparecen tras respuesta incorrecta
- [x] El cierre muestra reconocimiento, avance de dominio y mérito ganado
- [x] El cierre siempre mira hacia el siguiente paso
- [x] El regreso al Home funciona sin fricción
- [x] La terminología usa Mérito y Constancia (no XP ni Racha)
- [x] La aplicación funciona y es accesible en Cloudflare Pages

### URL de producción

- **Producción:** https://exmero.pages.dev
- **Primer deployment:** https://2c1a6518.exmero.pages.dev

---

## Mejora 2.1 — Biblioteca Visual Mero: migración a WebP con transparencia
**Estado:** ✅ Completado y desplegado en producción  
**Fecha:** 2026-07-20  
**PR:** #10 `feature/mvp-01-home` → `main`

### Objetivo

Convertir todos los activos visuales de Mero de JPG/PNG opaco a WebP con canal alpha (fondo transparente), optimizados para Next.js y Cloudflare Pages.

### Cambios realizados

- 28 activos convertidos (22 JPG + 6 PNG → 28 WebP @ 840px)
- Fondo blanco removido con flood-fill desde los 4 bordes
- `manifest.ts` actualizado: todos los assets usan `ext: "webp"`
- Archivos originales eliminados tras verificación en preview

### Resultado

| | Antes | Después |
|---|---|---|
| Formato | 22 JPG + 6 PNG | 28 WebP con alpha |
| Tamaño total | ~3.9 MB | 1.4 MB |
| Promedio/asset | ~140 KB | 49.5 KB |
| Reducción | — | **64% (~2.5 MB)** |

### Verificación completada

- [x] 28 escenas cargan sin errores en producción
- [x] `manifest.ts` referencia únicamente `.webp`
- [x] Cero errores 404 en consola
- [x] Transparencias correctas, sin halos blancos
- [x] Home funciona correctamente (bloque Mérito/Nivel eliminado según HOME_FUNCIONAL.md)
- [x] Cero referencias residuales a `.jpg` o `.png` en el código

### Fuente única de imágenes

La Biblioteca Visual de Mero usa ahora **exclusivamente WebP con transparencia**.  
Componente: `<MeroScene id={MERO_SCENES.xxx} />` — nunca referenciar `/mero/...` directamente.

---

## Biblioteca Visual Mero — v1.0 CONGELADA
**Estado:** 🔒 Congelada  
**Fecha:** 2026-07-20  
**Auditoría:** 28/28 escenas aprobadas manualmente

### Resultado de auditoría visual

| Categoría | Escenas | Resultado |
|---|---|---|
| estados | 6 | ✅ todas aprobadas |
| gestos | 2 | ✅ todas aprobadas |
| estudio | 5 | ✅ todas aprobadas |
| simulacros | 5 | ✅ todas aprobadas |
| gamificacion | 5 | ✅ todas aprobadas |
| ayuda | 5 | ✅ todas aprobadas |

### Criterios verificados en las 28 escenas

- [x] Sin halos blancos ni píxeles residuales de fondo
- [x] Bordes limpios, sin recortes accidentales de la silueta
- [x] Elementos compuestos preservados (burbujas, texto, badges, confeti, marcos sticker)
- [x] Sin transparencias por error en partes del personaje
- [x] Sin deformaciones ni cambios de proporción
- [x] Tamaño consistente (840px lado mayor) en toda la biblioteca

### Reglas de congelamiento

- No agregar ni reemplazar assets sin justificación documentada en `DECISIONES_DE_DISENO.md`
- Todo nuevo asset debe seguir el mismo proceso: WebP + alpha + 840px + flood-fill
- La fuente canónica es `manifest.ts` — nunca referenciar rutas `/mero/...` directamente
- Componente oficial: `<MeroScene id={MERO_SCENES.xxx} />`

---
