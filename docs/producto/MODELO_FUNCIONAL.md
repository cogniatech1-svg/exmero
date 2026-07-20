# ExMero — Modelo Funcional del Producto

> **Estado:** Propuesta para aprobación · Reemplaza la decisión "una convocatoria activa por usuario"  
> **Fecha:** 2026-07-19  
> **Relación con otros documentos:** complementa `EXMERO_MVP_VISION.md`. Cuando este documento se apruebe, la decisión congelada #7 de la visión queda actualizada.

---

## El principio rector

> **El usuario entrena competencias. Las convocatorias son objetivos que consumen ese entrenamiento.**

Este es el cambio conceptual central. Hasta ahora pensábamos la convocatoria como el contenedor del progreso ("mi progreso en la DIAN"). Eso obliga a duplicar el esfuerzo cuando el usuario tiene dos objetivos.

El modelo correcto invierte la relación: el conocimiento vive en el usuario, no en la convocatoria. La convocatoria solo define **qué competencias evalúa, con qué peso y a qué profundidad**. La probabilidad de aprobar cada convocatoria se calcula proyectando el dominio real del usuario sobre los requisitos de esa convocatoria.

Consecuencia directa: si el usuario estudia Constitución preparando la DIAN, su dominio de Constitución sube — y su probabilidad en Aerocivil sube automáticamente si Aerocivil también evalúa Constitución. Sin duplicar esfuerzo, sin copiar nada, sin "transferir" nada. Es el mismo dominio, visto desde dos lentes.

Este es el mayor diferencial posible frente a un banco de preguntas: **ExMero entiende que el que aprende es la persona, no la matrícula.**

---

## Modelo conceptual: las cinco entidades

```
                    CATÁLOGO (plataforma)
        ┌──────────────────┐   ┌──────────────────────┐
        │   COMPETENCIA     │◄──│    CONVOCATORIA      │
        │ (qué se aprende)  │   │ (qué se evalúa,      │
        │                   │   │  con qué peso,       │
        └────────┬──────────┘   │  en qué fechas)      │
                 │              └──────────┬───────────┘
                 │                         │
   ══════════════╪═════════════════════════╪══════════════
                 │      USUARIO            │
        ┌────────▼──────────┐   ┌──────────▼───────────┐
        │     DOMINIO       │   │    PREPARACIÓN       │
        │ (usuario ×        │──►│ (usuario ×           │
        │  competencia)     │   │  convocatoria)       │
        │ GLOBAL            │   │ ESPECÍFICA           │
        └───────────────────┘   └──────────┬───────────┘
                                           │
                                ┌──────────▼───────────┐
                                │  SESIÓN / MISIÓN /   │
                                │     SIMULACRO        │
                                │ (el trabajo diario)  │
                                └──────────────────────┘
```

### 1. Competencia (catálogo de plataforma)

La unidad de conocimiento evaluable. Ejemplos:

- Constitución Política
- Comprensión lectora
- Razonamiento cuantitativo
- Competencias comportamentales
- Gestión tributaria (funcional DIAN)
- Normatividad aeronáutica (funcional Aerocivil)

Las competencias son **de la plataforma**, no del usuario ni de la convocatoria. Forman un catálogo único y curado. Dos convocatorias que evalúan Constitución apuntan a la **misma** competencia del catálogo — esa es la condición que hace posible compartir el aprendizaje.

Regla de curación crítica: dos competencias se unifican **solo si evalúan genuinamente el mismo dominio de conocimiento**. "Razonamiento cuantitativo CNSC" y "Matemáticas docentes" pueden parecer iguales y no serlo. Cuando haya duda, se mantienen separadas. Un falso compartido (decirle al usuario que ya domina algo que el examen real evalúa distinto) destruye la confianza; un no-compartido solo cuesta algo de esfuerzo extra.

### 2. Convocatoria (catálogo, alimentado por el Radar)

El evento del mundo real: entidad, cronograma, etapas, cargos, y — lo esencial para el entrenamiento — **la matriz de evaluación**: qué competencias evalúa, con qué peso y a qué nivel de profundidad.

La convocatoria no contiene progreso de nadie. Es un hecho externo.

### 3. Dominio (usuario × competencia) — GLOBAL

El corazón del modelo. Para cada competencia que el usuario ha tocado, ExMero mantiene:

- **Nivel de dominio** (escala 0-100, presentada al usuario en bandas: Explorando → En desarrollo → Sólido → Dominado)
- **Frescura**: cuándo fue la última práctica (el conocimiento sin práctica se enfría; el plan lo tiene en cuenta)
- Historial de práctica (preguntas respondidas, aciertos, tendencia)

El dominio **pertenece al usuario y sobrevive a todo**: a cambios de convocatoria, a convocatorias cerradas, a pausas de meses. Es el activo que el usuario construye. Nunca se borra, nunca se reinicia.

### 4. Preparación (usuario × convocatoria) — ESPECÍFICA

Nace cuando el usuario decide entrenar para una convocatoria concreta. Contiene solo lo que tiene sentido únicamente en el contexto de ese objetivo:

- Fecha objetivo del examen y cuenta regresiva
- **Plan de entrenamiento** (qué competencias priorizar, en qué orden, a qué ritmo)
- **Probabilidad de aprobación** (calculada: dominios globales × matriz de evaluación de la convocatoria)
- Misiones generadas y su historial
- **Simulacros y sus resultados** (un simulacro replica UN examen específico — jamás es compartible)
- Estado del proceso (preparándose / examen presentado / esperando resultados)

Una preparación puede pausarse, reactivarse o archivarse. Archivarla **no toca los dominios** — solo cierra el objetivo.

### 5. Sesión / Misión / Simulacro (el trabajo diario)

Cada sesión pertenece a una preparación (fue generada por su plan), pero **entrena competencias** — y por tanto sus efectos se escriben en el dominio global.

Este doble registro es la clave de todo el modelo:

```
Sesión de práctica (generada por la preparación DIAN)
   │
   ├──► actualiza DOMINIO global de "Constitución"     ← beneficia a TODAS las preparaciones
   │
   └──► registra actividad en la PREPARACIÓN DIAN      ← historial, misión cumplida, mérito atribuido
```

---

## Qué es global y qué es específico

| Información | Ámbito | Razón |
|---|---|---|
| Identidad y perfil | Global | Es la persona |
| **Racha** | **Global** | Mide disciplina, no lealtad a una convocatoria. Estudiar para lo que sea mantiene la racha. Racha por convocatoria castigaría el cambio de foco — exactamente lo contrario de lo que queremos |
| **Puntos (Mérito)** | **Global** (con atribución por preparación) | Ver sección Mérito |
| Insignias | Global | Hitos de la persona ("Primera racha de 7 días", "Primer simulacro") |
| **Dominio por competencia** | **Global** | El principio rector del modelo |
| Frescura de cada competencia | Global | Acompaña al dominio |
| Convocatorias seguidas (Radar) | Global | Seguir es informarse, no comprometerse |
| Plan de entrenamiento | Por preparación | Depende de la matriz y fecha de ESA convocatoria |
| Probabilidad de aprobación | Por preparación | Es una proyección del dominio global sobre UNA matriz de evaluación |
| Misiones diarias | Por preparación | Las genera el plan |
| Simulacros y resultados | Por preparación | Simulan un examen específico |
| Cuenta regresiva | Por preparación | Fecha de ESE examen |
| Estado del proceso | Por preparación | Cada convocatoria va en su propia etapa |

---

## El foco (reemplaza "convocatoria activa")

Analicé si necesitamos el concepto de convocatoria activa. Conclusión: **como dueña de datos, no. Como lente de la interfaz, sí.**

El problema del término "convocatoria activa" es que sugiere que las demás están apagadas y que cambiar implica perder algo. Nada de eso es cierto en este modelo. Lo que sí necesitamos es responder una pregunta de UX: cuando el usuario abre ExMero, ¿qué misión le mostramos en el Home?

La respuesta es el **foco**: la preparación que ExMero usa como contexto por defecto.

**Qué cambia al cambiar el foco:**
- La misión del día que aparece en el Home
- La cuenta regresiva y la probabilidad mostradas por defecto
- El contexto de los mensajes de Mero

**Qué NO cambia jamás (garantía de integridad):**
- Ningún dominio de ninguna competencia
- Ninguna racha, ningún punto, ninguna insignia
- Ningún plan ni historial de las otras preparaciones — siguen exactamente donde quedaron
- Ningún simulacro registrado

Cambiar el foco es girar la cabeza, no mudarse de casa. Es instantáneo, reversible y sin costo. El usuario puede estudiar DIAN en la mañana y docentes en la tarde cambiando el foco dos veces — o incluso sin cambiarlo, entrando directamente a la otra preparación desde Mi Preparación.

**Regla congelable:** ninguna acción de navegación o cambio de foco puede destruir ni reiniciar progreso. Los datos solo se archivan explícitamente, nunca se pierden.

---

## Puntos: adiós XP, bienvenido Mérito

XP es lenguaje de videojuego y no dice nada del propósito de ExMero. La alternativa está en la propia marca — el mantra interno de ExMero es:

> *"El mérito no se declara — se entrena."*

Los puntos de ExMero se llaman **Mérito**. El usuario "gana mérito" con cada sesión, cada racha sostenida, cada simulacro completado. La palabra es exacta: los concursos públicos colombianos son literalmente **concursos de méritos**. El sistema de puntos y el sistema real que el usuario enfrenta hablan el mismo idioma. "Llevas 2.340 de mérito" tiene un peso que "2.340 XP" nunca tendrá.

**¿Global o por convocatoria? Combinación, con jerarquía clara:**

- **El Mérito es uno solo y es global.** Representa el esfuerzo total de la persona. Es el número que aparece junto a su nivel, el que activa insignias.
- **Cada preparación registra cuánto mérito se ganó entrenando para ella** (atribución). Sirve para mostrar "ganaste 340 de mérito preparando la DIAN este mes" en Mi Progreso — información, no moneda separada.

Rechazo el mérito independiente por convocatoria: fragmentaría la identidad del usuario, castigaría el cambio de objetivo y crearía la sensación de "empezar de cero" que queremos eliminar. Rechazo el mérito solo-global sin atribución: perderíamos la capacidad de narrar el esfuerzo por objetivo.

---

## Los cuatro niveles de progreso y cómo se relacionan

```
Progreso por MISIÓN          "Completaste 12 de 15 preguntas de hoy"
   │  (efímero — vive horas)
   ▼ alimenta
Progreso por COMPETENCIA     "Constitución: Sólido (72/100), practicada ayer"
   │  (durable — el activo real del usuario, GLOBAL)
   ▼ se proyecta sobre la matriz de cada convocatoria
Progreso por PREPARACIÓN     "DIAN: 68% de probabilidad, subiendo"
   │  (calculado — una lente por cada objetivo)
   ▼ se agrega junto a mérito, racha e insignias
Progreso del USUARIO         "Nivel 3 · 2.340 de mérito · racha de 7 días"
      (la identidad — GLOBAL)
```

- El **progreso por misión** existe para el ciclo diario: empezar, terminar, celebrar. Se consume y desaparece.
- El **progreso por competencia** es la capa que acumula. Es lo único que "aprende" de forma permanente.
- El **progreso por preparación** no almacena conocimiento propio: es una **función** — dominios globales evaluados contra la matriz de una convocatoria, más los resultados de sus simulacros. Por eso dos preparaciones pueden mostrar probabilidades distintas a partir del mismo conocimiento: matrices y profundidades distintas.
- El **progreso del usuario** es la suma visible de identidad: mérito, nivel, racha, insignias, y el mapa de dominios.

---

## Competencias compartidas: cómo funciona la reutilización (y sus límites honestos)

**Decisión: el conocimiento se comparte. Cada convocatoria NO empieza de cero.** El argumento es directo: el modelo alternativo (progreso encapsulado por convocatoria) obliga al usuario a demostrar dos veces lo que ya sabe. Eso es exactamente el tipo de fricción burocrática de la que ExMero promete rescatarlo.

El momento estrella del producto es este:

> Usuario agrega la preparación para Aerocivil.  
> Mero: *"Buenas noticias. Tu entrenamiento en Constitución y Comprensión lectora para la DIAN ya cuenta aquí. No empiezas de cero — empiezas con un 31% de probabilidad."*

Ningún competidor puede decir esa frase. Esa frase convierte a un usuario de una convocatoria en un usuario de por vida.

**Pero hay que ser honestos con los límites, o el modelo miente:**

1. **Profundidad distinta.** La misma competencia puede evaluarse a niveles diferentes (Constitución para un cargo asistencial vs. uno profesional). Solución: la matriz de cada convocatoria declara el **nivel requerido** por competencia. Un dominio de 70 puede ser "Sólido" para una y "En desarrollo" para otra. El dominio es uno; la lectura depende del listón.
2. **Frescura.** Dominio alto pero práctica de hace 3 meses ≠ dominio alto practicado ayer. El plan de una preparación nueva programa **sesiones de validación** cortas sobre las competencias heredadas: confirman (o ajustan) el dominio antes de darlo por bueno en la probabilidad. El usuario no repite el entrenamiento — solo lo revalida rápido. Mero lo narra así: *"Ya dominas esto. Hagamos un repaso corto para confirmar que sigue fresco."*
3. **Competencias funcionales no se comparten.** Gestión tributaria (DIAN) no aporta nada a normatividad aeronáutica (Aerocivil). El catálogo las mantiene separadas y el plan de cada preparación las entrena desde donde estén.

---

## Radar: seguir no es prepararse

El Radar es **global** y opera para todas las convocatorias que interesen al usuario. Su modelo es un embudo de compromiso creciente:

```
DESCUBRIR          →   SEGUIR                →   PREPARARSE
(el Radar muestra      (el usuario activa        (el usuario crea una
 todo lo relevante)     seguimiento: recibe       Preparación: plan,
                        novedades de ESA          misiones, simulacros)
                        convocatoria)
```

- **Seguir** es gratis en esfuerzo: solo significa "infórmame". El feed de actividad prioriza las convocatorias seguidas y las que tienen preparación, pero muestra también novedades generales relevantes.
- **Prepararse** es el compromiso real. Desde la ficha de una convocatoria seguida, un solo paso: "Prepararme para esta convocatoria" → nace la Preparación.
- El Radar nunca filtra por el foco. El usuario con foco en DIAN sigue viendo que "mañana cierran inscripciones de la territorial que sigues".

---

## Mi Preparación: una experiencia, varias preparaciones

Evalué tres modelos:

1. **Mostrar solo el foco** — esconde las demás preparaciones; el usuario siente que ExMero se olvidó de sus otros objetivos. Rechazado.
2. **Todas en paralelo con igual peso** — dashboard sobrecargado, sin jerarquía; nadie sabe qué hacer hoy. Rechazado.
3. **Foco prominente + acceso inmediato al resto.** Elegido.

El diseño funcional (no visual todavía):

- **Arriba:** la preparación en foco, expandida — plan, próxima misión, probabilidad, cuenta regresiva. Es "tu entrenamiento de hoy".
- **Debajo:** las demás preparaciones como tarjetas compactas (nombre, probabilidad, próximo hito del cronograma). Un toque las abre; desde dentro se puede entrenar directamente **sin cambiar el foco global**, o promoverla a foco.
- El Home siempre refleja el foco. Mi Preparación es donde se ve el panorama completo.

**El modelo de datos soporta N preparaciones activas por usuario sin restricción técnica.** El límite real no es arquitectónico — es comercial. La cantidad de preparaciones activas simultáneas es una regla configurable por plan de suscripción:

- **Plan estándar (MVP):** 2 preparaciones activas simultáneas.
- **Plan Premium:** límite superior configurable por el equipo de producto (sin valor fijo aquí).

Cuando el usuario intenta superar el límite de su plan, Mero lo comunica como entrenador — no como un muro técnico: *"Ya tienes dos frentes abiertos. Para agregar una tercera preparación puedes archivar una o pasarte a Premium."* El tono es honesto, no agresivo.

**El Radar permanece ilimitado para todos los planes.** Seguir una convocatoria no genera un plan de entrenamiento personalizado — solo activa notificaciones y visibilidad en el feed. El seguimiento es una funcionalidad de información, no de servicio computacional activo, y no debe ser una barrera de acceso.

---

## Respuestas directas a las siete preguntas

1. **¿Modelo conceptual definitivo?** El usuario entrena competencias (dominio global); las convocatorias definen matrices de evaluación; una Preparación es el compromiso usuario×convocatoria que genera plan, misiones y simulacros; la probabilidad es la proyección del dominio sobre la matriz.
2. **¿Cómo se relacionan Usuario, Convocatorias, Competencias y Entrenamiento?** Usuario ─posee→ Dominios ─sobre→ Competencias ←evalúa─ Convocatoria; Usuario ─crea→ Preparación ─hacia→ Convocatoria; Preparación ─genera→ Sesiones ─actualizan→ Dominios (globales).
3. **¿Qué es global?** Identidad, mérito, racha, insignias, dominios por competencia, frescura, convocatorias seguidas.
4. **¿Qué es específico?** Plan, misiones, probabilidad, simulacros, cuenta regresiva, estado del proceso, atribución de mérito.
5. **¿Cómo funciona el cambio entre convocatorias?** Cambio de foco: instantáneo, reversible, solo cambia la lente por defecto de la interfaz. Cero pérdida de datos por diseño (los datos específicos viven en cada preparación; los compartidos viven en el usuario).
6. **¿Cómo evitamos la sensación de empezar de cero?** Dominio global + matriz por convocatoria: al crear una preparación nueva, la probabilidad inicial ya refleja lo aprendido, Mero lo comunica explícitamente, y las sesiones de validación revalidan sin re-entrenar.
7. **¿Qué decisiones se congelan?** Las diez de la sección siguiente.

---

## Decisiones que quedan congeladas

1. **Principio rector:** el usuario entrena competencias; las convocatorias consumen ese entrenamiento. El dominio es global y del usuario.
2. **Se abandona "convocatoria principal/activa"** como concepto de datos. Existe solo el **foco**: lente de interfaz, instantáneo y reversible.
3. **Integridad absoluta:** ningún cambio de foco, pausa o archivado destruye ni reinicia progreso. Nada se borra; se archiva.
4. **Los puntos se llaman Mérito.** Globales, con atribución informativa por preparación. El término XP desaparece del producto.
5. **Racha e insignias: globales.** Miden disciplina de la persona, no lealtad a una convocatoria.
6. **El conocimiento se comparte entre convocatorias** vía competencias comunes del catálogo, con tres salvaguardas: niveles requeridos por matriz, sesiones de validación por frescura, y competencias funcionales nunca unificadas.
7. **El catálogo de competencias es curado por la plataforma.** Ante la duda, dos competencias se mantienen separadas.
8. **Simulacros pertenecen a una preparación.** Jamás se comparten (simulan un examen concreto).
9. **Radar global con embudo descubrir → seguir → prepararse.** Seguir es informarse; prepararse es comprometerse. El Radar nunca se limita al foco.
10. **El límite de preparaciones activas es comercial, no técnico.** El modelo soporta N. La cantidad de preparaciones activas simultáneas se configura por plan de suscripción (ejemplo: 2 en estándar, más en Premium). El Radar —seguir convocatorias— es ilimitado para todos los planes.

---

## Impacto sobre decisiones anteriores

- `EXMERO_MVP_VISION.md`, decisión congelada #7 ("una convocatoria activa por usuario en MVP") **queda reemplazada** por este modelo: múltiples preparaciones simultáneas con límite configurable por plan de suscripción, dominio global, foco como lente de interfaz.
- El lenguaje del producto suma un término nuevo oficial: **Mérito** (reemplaza XP en toda la interfaz, el mock data y la documentación).
- El resto de la visión (pilares, navegación, gamificación permitida/prohibida, V2) permanece intacta y este modelo la refuerza: el Radar gana su papel de embudo, y Mi Preparación absorbe el multi-objetivo sin nuevas tabs.

## Consecuencias para V2 (no evaluar ahora)

- Decaimiento gradual del dominio por falta de práctica (modelo de olvido / repetición espaciada).
- Sugerencias proactivas: "Esta convocatoria nueva comparte 3 competencias contigo — ya tendrías 40% de probabilidad."
- Ampliar el límite de preparaciones activas en planes superiores.
- Comparativas de dominio con otros aspirantes al mismo cargo.
