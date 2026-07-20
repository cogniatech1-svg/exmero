# ExMero — Visión y Mapa del MVP

> **Estado:** Congelado · Aprobado para desarrollo  
> **Fecha:** 2026-07-19  
> **Este documento es la base sobre la cual se construye ExMero.**  
> No se abre a rediseño. Las modificaciones requieren decisión explícita de producto.

---

## Definición oficial

> ExMero es un entrenador inteligente para aspirantes a concursos públicos en Colombia. Acompaña al usuario antes, durante y después de una convocatoria, explicando el proceso, ayudándolo a entender su convocatoria, manteniéndolo informado y ofreciéndole un entrenamiento personalizado para aumentar sus probabilidades de éxito.

Esta definición es el criterio para aceptar o rechazar cualquier funcionalidad.

---

## Lo que ExMero NO es

Estas decisiones están congeladas:

- No es un reemplazo del SIMO.
- No es un portal de empleo.
- No es una plataforma para realizar inscripciones.
- No es un buscador de miles de cargos.
- No es un banco de preguntas sin contexto.
- No es una academia tradicional.

Cuando el usuario necesite inscribirse, ExMero lo lleva al portal oficial correspondiente. No competimos con el SIMO — lo complementamos.

---

## Regla para aceptar nuevas funcionalidades

Toda propuesta debe responder estas tres preguntas. Si alguna respuesta es NO, pasa a V2:

1. ¿Qué problema real del aspirante resuelve?
2. ¿Aumenta sus probabilidades de aprobar el concurso?
3. ¿Es viable construirla en el MVP sin intentar reemplazar el SIMO?

---

## Punto de partida del usuario

Asumimos que la mayoría de usuarios llegan con un objetivo definido:

- "Quiero prepararme para la DIAN."
- "Quiero concursar para Aerocivil."
- "Quiero presentar una convocatoria territorial."

ExMero comienza a trabajar desde ese momento. No antes.

---

## Los cuatro pilares del MVP

### 1. Entiende tu convocatoria

**No es un tab. Es una capacidad transversal.**

ExMero traduce el lenguaje burocrático de la CNSC exactamente cuando el usuario lo necesita: al lado del término, en el momento de duda, sin salir de la pantalla.

**Formato en MVP:** explicaciones escritas de 100-250 palabras, tono conversacional, como si Mero estuviera hablando. Pueden acompañarse de una ilustración de Mero cuando sea útil. Sin videos en el MVP.

**Regla de contenido:** primero contenido útil. Después formatos más sofisticados.

Conceptos mínimos cubiertos en MVP:
- ¿Qué es una convocatoria pública?
- ¿Qué es OPEC?
- ¿Qué es un empleo (en términos del CNSC)?
- ¿Qué es una lista de elegibles?
- ¿Qué es una reclamación?
- ¿Qué significa nivel Profesional / Técnico / Asistencial?
- ¿Qué evalúan las competencias funcionales?
- ¿Cómo funciona el cronograma de una convocatoria?
- ¿Qué ocurre después del examen?

Cada concepto se activa mediante un chip de ayuda `[?]` contextual en la pantalla donde aparece el término.

**V2:** sección independiente con biblioteca completa de microcontenidos navegables.

---

### 2. Radar

El lugar donde el usuario consulta qué está pasando en el mundo de los concursos públicos.

**No navega miles de cargos. No reemplaza al SIMO.**

Muestra:
- Convocatorias activas (con inscripción abierta)
- Próximas convocatorias (anunciadas, sin abrir aún)
- Convocatorias próximas a cerrar
- Cambios importantes de cronograma
- Publicación de resultados
- Actualizaciones de listas de elegibles
- Actividad reciente relevante

**Feed de actividad:** el usuario debe sentir que vale la pena abrir ExMero incluso cuando no está estudiando. Ejemplos de actividad:
- "Hoy abrió una convocatoria para la DIAN."
- "Se modificó el cronograma de CNSC-2025-DIAN-047."
- "Se publicaron resultados para Aerocivil."

**MVP:** contenido curado manualmente por el equipo.  
**V2:** servicio automático de monitoreo del portal CNSC (ver sección Monitoreo).

---

### 3. Mi Preparación

El corazón del producto.

Aquí vive todo el entrenamiento:
- Diagnóstico inicial (calibración)
- Plan personalizado
- Misiones y sesiones diarias
- Práctica de preguntas
- Retroalimentación de Mero
- Simulacros (modalidad interna, sin tab propio)
- Progreso del entrenamiento

**Lenguaje:** entrenamiento, sesión, misión, simulacro. Nunca: curso, alumno, capítulo, lección magistral.

**Simulacro:** es una modalidad dentro de Mi Preparación. No tiene tab propio. Esta decisión está congelada.

---

### 4. Mi Progreso

Responde principalmente una pregunta: **¿Estoy más cerca de aprobar que la semana pasada?**

No es un informe. Es un espejo motivador.

Muestra:
- Probabilidad de aprobación (número central, con tendencia)
- Racha actual
- XP y nivel
- Progreso por área de preparación
- Fortalezas detectadas
- Oportunidades de mejora

No muestra: estadísticas innecesarias, gráficas complejas, comparativas con otros usuarios (V2).

---

## Mero como entrenador

Mero no es una mascota. Es el entrenador personal del usuario.

Debe:
- Explicar conceptos técnicos en lenguaje simple
- Traducir la burocracia de la CNSC
- Corregir respuestas incorrectas con claridad
- Motivar cuando el usuario pierde el ritmo
- Celebrar logros de forma genuina
- Acompañar sin interrumpir

**Regla:** Mero nunca aparece únicamente como decoración. Cada aparición tiene una función.

---

## Gamificación

ExMero debe ser entretenido sin convertirse en un videojuego. Toda mecánica refuerza la disciplina hacia el objetivo real: aprobar el concurso.

**Mecánicas aceptadas en MVP:**
- XP (puntos de experiencia por sesiones completadas)
- Misiones diarias
- Rachas (días consecutivos de entrenamiento)
- Insignias (hitos significativos: primera sesión, racha de 7 días, primer simulacro, etc.)
- Retos temáticos (semanales, por área de preparación)

**Prohibido en todas las versiones:**
- Monedas o divisas virtuales
- Gemas u objetos de valor
- Cofres o cajas de loot
- Ruletas o azar
- Accesorios cosméticos

**V2:**
- Evolución visual de Mero (el personaje cambia a medida que el usuario progresa)
- Retos entre usuarios (requiere comunidad)

---

## Navegación definitiva

**Esta estructura está congelada.**

```
🏠  Inicio
📡  Radar
🎯  Mi Preparación
📈  Mi Progreso
👤  Perfil
```

| Tab | Ruta | Propósito |
|---|---|---|
| Inicio | `/` | Dashboard diario: misión del día, mensaje de Mero, resumen de progreso |
| Radar | `/radar` | Convocatorias, actividad reciente, alertas |
| Mi Preparación | `/preparacion` | Plan, sesiones, práctica, simulacros |
| Mi Progreso | `/progreso` | Estadísticas, evolución, fortalezas, logros |
| Perfil | `/perfil` | Convocatoria activa, configuración, fechas |

---

## Mapa del producto (MVP)

```
ExMero MVP
│
├── Onboarding (flujo único al primer ingreso)
│   ├── Bienvenida de Mero
│   ├── ¿Para qué quieres prepararte?
│   ├── Calibración inicial (5 preguntas, sin presión)
│   └── Tu punto de partida
│
├── Inicio
│   ├── Saludo personalizado + racha
│   ├── Misión del día [CTA principal]
│   ├── Mensaje contextual de Mero
│   └── Resumen de progreso + cuenta regresiva al examen
│
├── Radar
│   ├── Feed de actividad reciente
│   ├── Convocatorias activas
│   ├── Próximas convocatorias
│   └── Detalle de convocatoria
│       ├── Información general
│       ├── Cronograma
│       ├── Cargos destacados
│       └── Link al portal oficial (SIMO/CNSC)
│
├── Mi Preparación
│   ├── Vista del plan
│   │   ├── Áreas de preparación con progreso
│   │   ├── Próxima misión sugerida
│   │   └── Estado general del entrenamiento
│   ├── Sesión activa
│   │   ├── Pregunta + opciones de respuesta
│   │   ├── Retroalimentación de Mero (respuesta correcta o incorrecta)
│   │   ├── Microayuda contextual [?] cuando aplica
│   │   └── Progreso de la sesión (preguntas restantes)
│   ├── Cierre de sesión
│   │   ├── Resumen: preguntas, aciertos, tiempo
│   │   ├── XP ganado
│   │   ├── Mensaje de Mero
│   │   └── CTA: siguiente misión o volver a inicio
│   └── Simulacro
│       ├── Configuración (área o examen completo, tiempo)
│       ├── Sesión bajo condiciones reales
│       └── Resultado básico (puntaje por área, comparativo con umbral)
│
├── Mi Progreso
│   ├── Probabilidad de aprobación (central, con tendencia)
│   ├── Progreso por área
│   ├── Racha + XP + nivel
│   ├── Fortalezas detectadas
│   └── Áreas prioritarias de mejora
│
└── Perfil
    ├── Convocatoria activa
    ├── Cargo y fecha de examen
    ├── Ajuste del plan (horas disponibles por semana)
    └── Configuración básica de la app
```

---

## Recorrido definitivo del usuario

### Primera vez

1. Descarga ExMero porque quiere prepararse para una convocatoria específica.
2. Mero lo recibe y pregunta su objetivo.
3. Calibración: 5 preguntas de diagnóstico. Mero comenta cada respuesta. Sin puntaje visible.
4. ExMero muestra su punto de partida: qué áreas necesitan más trabajo.
5. Primera misión disponible en el Home. El usuario comienza de inmediato.

### Rutina diaria

1. Abre ExMero. Home muestra la misión del día y un mensaje de Mero.
2. Entra a Mi Preparación. Completa su sesión (15-25 minutos).
3. Ve el cierre: XP, progreso actualizado, siguiente paso.
4. Opcionalmente revisa el Radar para estar informado.
5. Cierra la app.

### Semanalmente

1. Revisa Mi Progreso: ¿mejoró la probabilidad de aprobación?
2. Si tiene tiempo extra: simulacro de una sección.
3. Mero sugiere el área más rezagada para la semana siguiente.

### Antes del examen

1. Simulacros completos en condiciones reales.
2. ExMero muestra cuenta regresiva en el Home.
3. Día del examen: Mero envía mensaje de motivación real, no genérico.

### Post examen (MVP básico)

El usuario marca su convocatoria como "Examen realizado". El Home cambia de modo: ya no muestra misiones, muestra "Estamos esperando resultados contigo."

Seguimiento completo (resultados, lista de elegibles, reclamaciones) → V2.

---

## Pantallas del MVP — Orden de construcción

| # | Pantalla | Prioridad | Justificación |
|---|---|---|---|
| 1 | Sesión activa (preguntas + feedback) | Crítica | Es el producto. Sin esto no hay nada. |
| 2 | Cierre de sesión | Crítica | Cierra el loop. Sin esto la sesión no tiene resolución. |
| 3 | Plan / Vista de preparación | Alta | El usuario necesita ver su ruta completa. |
| 4 | Onboarding — calibración | Alta | Personaliza todo lo que viene. |
| 5 | Onboarding — bienvenida y objetivo | Alta | Primer contacto con el producto. |
| 6 | Radar — lista de convocatorias | Alta | Motor de retención fuera del ciclo de estudio. |
| 7 | Radar — detalle de convocatoria | Alta | Información útil para decisiones del usuario. |
| 8 | Mi Progreso | Media | Motivación sostenida. Esencial para la retención. |
| 9 | Simulacro | Media | Diferencia ExMero de un banco de preguntas. |
| 10 | Perfil | Baja | Necesario pero sin impacto directo en la experiencia diaria. |
| — | Home | Construida | Ajustes menores pendientes (labels de navegación, Radar). |

---

## Funcionalidades que pasan a V2

Estas decisiones están cerradas. No se evalúan para MVP.

| Funcionalidad | Razón para diferir |
|---|---|
| Módulo "Entiende tu convocatoria" como tab independiente | Requiere biblioteca de contenido que no está lista |
| Videos y contenido multimedia | Primero validar el contenido escrito |
| Monitoreo automático del CNSC | Infraestructura compleja; manual es suficiente para MVP |
| Alertas push personalizadas | Requiere notificaciones y monitoreo automático |
| Evolución visual de Mero | Requiere producción de activos adicionales y lógica de estado |
| Múltiples convocatorias simultáneas | Un usuario, una convocatoria activa en MVP |
| Seguimiento post-examen completo | Resultados, lista de elegibles, reclamaciones — meses después del examen |
| Analítica avanzada de simulacros | Comparativas, curvas de probabilidad, proyecciones estadísticas |
| Retos entre usuarios / comunidad | Requiere masa crítica de usuarios |
| Lecciones conceptuales estructuradas (3-5 min) | Se reemplaza con feedback de Mero en sesión activa |

---

## Monitoreo de la CNSC

Desde la arquitectura se asume un servicio independiente que revisa periódicamente el portal de la CNSC y detecta:

- Nuevas convocatorias publicadas
- Apertura y cierre de inscripciones
- Cambios de cronograma
- Publicación de resultados
- Actualizaciones de listas de elegibles

**El frontend nunca consultará directamente el portal de la CNSC.**

En MVP: contenido del Radar mantenido manualmente.  
En V2: servicio automatizado alimenta el Radar en tiempo real.

---

## Lenguaje del producto

**Usar siempre:**

| En lugar de... | Usar... |
|---|---|
| Curso | Entrenamiento / Preparación |
| Alumno | Aspirante / Usuario |
| Capítulo | Sesión / Misión / Fase |
| Módulo (genérico) | Área de preparación |
| Lección | Sesión / Retroalimentación de Mero |
| Clase | Sesión de entrenamiento |
| Ejercicio | Pregunta / Práctica |

El producto habla como un entrenador deportivo inteligente, no como una institución educativa.

---

## Decisiones oficialmente congeladas

Estas decisiones no se reabren sin justificación explícita de producto:

1. **Definición del producto:** ExMero es un entrenador inteligente para aspirantes a concursos públicos en Colombia.
2. **Navegación:** Inicio · Radar · Mi Preparación · Mi Progreso · Perfil.
3. **Simulacros:** modalidad dentro de Mi Preparación. Sin tab propio.
4. **Entiende tu convocatoria:** capacidad contextual, no tab en MVP.
5. **Lenguaje:** entrenamiento, sesión, misión, simulacro. Prohibidos: curso, alumno, capítulo.
6. **Gamificación:** XP, misiones, rachas, insignias. Prohibidos: monedas, gemas, cofres, ruletas.
7. **Convocatorias:** una activa por usuario en MVP.
8. **Radar MVP:** contenido curado manualmente.
9. **Videos:** fuera del MVP. Primero contenido escrito.
10. **SIMO:** ExMero no lo reemplaza. Lo complementa con un link al portal oficial.
11. **Mero:** entrenador activo con función en cada aparición. Nunca decorativo.
12. **Microayudas:** texto conversacional de 100-250 palabras. Sin videos.
