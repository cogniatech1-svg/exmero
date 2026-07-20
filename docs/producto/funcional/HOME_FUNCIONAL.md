# Home — Especificación Funcional

> **Estado:** Propuesta para aprobación · Sin implementar  
> **Pantalla:** `/` · Tab: Inicio  
> **Depende de:** `MODELO_FUNCIONAL.md`, `EXMERO_MVP_VISION.md`, `MERO_USAGE_GUIDE.md`

---

## 1. Objetivo de la pantalla

### El problema que resuelve

El mayor enemigo de la preparación no es la falta de contenido — es la parálisis. El aspirante abre la app y enfrenta una pregunta que nadie le responde bien: **¿qué hago hoy, exactamente?**

Un banco de preguntas no responde esa pregunta. Un curso tampoco. Una app con un dashboard de estadísticas mucho menos.

El Home de ExMero existe para responder esa pregunta en menos de tres segundos.

### Por qué existe

Un entrenador deportivo de élite no te da acceso a una sala llena de máquinas y te desea suerte. Te dice: "Hoy hacemos esto. Empieza aquí." El Home hace exactamente eso.

Su función no es mostrar información — es **eliminar la fricción entre abrir la app y comenzar a entrenar**.

### Pregunta rectora

> **¿Qué necesita hacer hoy este usuario para acercarse a aprobar su convocatoria?**

Todo elemento del Home debe justificar su presencia respondiendo esa pregunta. Lo que no la responde, sale.

---

## 2. Historia de usuario

### Quién llega aquí

El Home recibe a cualquier usuario autenticado en cualquier momento del día. Pero hay tres momentos de apertura dominantes que el diseño debe servir primero:

**Apertura matutina (el caso más frecuente)**  
Son las 6:45 am. Valentina tiene 25 minutos antes de salir al trabajo. Abre ExMero con la intención clara de entrenar. No quiere leer. No quiere navegar. Quiere saber qué hacer, hacerlo, y sentir que avanzó.

**Apertura nocturna (el caso más crítico para la racha)**  
Son las 10:30 pm. El usuario está cansado. No tiene energía para una sesión larga. Pero no quiere romper su racha de 9 días. Necesita una misión corta y alcanzable que le permita cerrar el día con la sensación de haber avanzado aunque sea un poco.

**Retorno tras ausencia (el caso más delicado)**  
El usuario no ha abierto la app en 4 días. Tiene culpa. Tiene miedo de ver que perdió todo su progreso. Abre con inseguridad. Si el Home lo recibe con una pantalla de estadísticas negativas o con mensajes de reprimenda, se va. Si lo recibe con un tono de entrenador que dice "sigamos", se queda.

### Qué espera encontrar

- Claridad inmediata: qué hacer hoy
- Confirmación de que su preparación va bien (o qué corregir si no)
- La presencia de Mero como compañía, no como decoración
- Un solo botón claro que lo lleve a la acción

### Qué no espera encontrar

- Estadísticas que necesitan interpretación
- Múltiples llamadas a la acción compitiendo
- Información sobre otras pantallas de la app
- Notificaciones que interrumpan el flujo

### Cómo debe sentirse al salir del Home (hacia la sesión)

> *"Sé exactamente qué voy a hacer. Mero ya sabe dónde estoy. Esto vale la pena."*

---

## 3. Información que debe mostrar

### Imprescindible

**A. La misión del día**  
El elemento más importante de la pantalla. Debe ocupar el espacio y la jerarquía visual dominantes. Contiene: nombre de la competencia que se trabaja hoy, tipo de sesión (práctica / repaso / simulacro corto), duración estimada, y mérito a ganar. Sin esto, el Home no cumple su función.

Justificación: es la respuesta directa a la pregunta rectora. Si falta, el usuario no sabe qué hacer.

**B. El mensaje contextual de Mero**  
No un mensaje genérico — uno generado a partir del estado real del usuario: su racha, su progreso reciente, la competencia de hoy, los días al examen. Acompaña la misión y la contextualiza emocionalmente.

Justificación: la diferencia entre un banco de preguntas y un entrenador inteligente está aquí. Sin esto, ExMero es una app cualquiera.

**C. La racha**  
Chip visual compacto. Número de días consecutivos de entrenamiento. Es el indicador de disciplina más poderoso del sistema.

Justificación: la racha es el motor de retención diaria. Su visibilidad en el Home es lo que hace que el usuario recuerde abrirla también mañana.

**D. Probabilidad de aprobación + tendencia**  
Número central de su preparación en foco, con indicador de tendencia (↑ subiendo / → estable / ↓ bajando). Días restantes al examen.

Justificación: es el norte del producto. Sin él, el usuario no sabe si lo que hace está funcionando. La tendencia transforma un número estático en una historia de progreso.

### Puede esperar (no en el Home)

- Desglose por competencia → Mi Progreso
- Historial de sesiones → Mi Progreso
- Detalle del plan completo → Mi Preparación
- Noticias de convocatorias → Radar
- Logros e insignias detallados → Mi Progreso
- Configuración → Perfil

### Debatible: mérito y nivel

El mérito (puntos totales) y el nivel del usuario aportan contexto de identidad, pero no responden la pregunta rectora. Decisión: **no en el Home principal**. Aparecen en Mi Progreso. El Home muestra solo racha y probabilidad como indicadores de estado.

Si la racha es 0 y la probabilidad no ha cambiado en días, esos números hablan solos — no se necesita el mérito para motivar la acción.

---

## 4. Acciones disponibles

### CTA principal (único e inequívoco)

**"Comenzar sesión"** — lleva a la sesión de entrenamiento activa correspondiente a la misión del día de la preparación en foco.

Regla de diseño: debe ser visualmente imposible de ignorar. No compite con ningún otro elemento de la pantalla.

### Acciones secundarias

| Acción | Destino | Cuándo está disponible |
|---|---|---|
| Tap en el área de progreso | Mi Progreso | Siempre |
| Tap en el chip de racha | Mi Progreso | Siempre |
| Tap en "Ver todas mis preparaciones" | Mi Preparación | Cuando hay más de una preparación activa |
| Tap en notificación de Radar | Radar | Cuando hay actividad relevante en las convocatorias seguidas |
| Tap en la misión (área informativa) | Mi Preparación — detalle de la misión | Siempre |

### Acción que no existirá en el Home

El Home no tiene un menú de configuración, acceso al perfil desde el contenido (solo desde el tab), ni botón para "cambiar preparación" — ese cambio se hace desde Mi Preparación.

### Qué queremos incentivar

El CTA "Comenzar sesión" debe ser la respuesta natural a la pantalla entera. Todo lo demás en el Home debe generar contexto y motivación para ese momento.

---

## 5. Papel de Mero

### Principio de aparición

Mero aparece en el Home **una sola vez por pantalla**, en una zona fija. No flota. No interrumpe. Es parte del layout, como un compañero que ya está ahí cuando llegas.

Mero **permanece en silencio** (sin bloque de mensaje visible) solo cuando el Home está en estado de carga. En todos los demás estados, tiene presencia y mensaje.

### Mapa de estados de Mero en el Home

---

#### Estado 1: Primera vez (recién completó el onboarding)

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.welcome` |
| **Ilustración** | `bienvenido` |
| **Emoción** | Joy — apertura total, bienvenida genuina |
| **Mensaje** | *"Bienvenido al entrenamiento, [nombre]. Tu punto de partida ya está listo. Esto es lo primero que vamos a trabajar juntos."* |
| **Intención** | Crear pertenencia y reducir la ansiedad del inicio. El usuario acaba de comprometerse. Mero valida esa decisión. |

---

#### Estado 2: Usuario con entrenamiento activo — racha 1-6 días

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.studying` |
| **Ilustración** | `estudiando-en-escritorio` |
| **Emoción** | Focus — concentración lista para el trabajo |
| **Mensaje** | *"Día [N] de racha, [nombre]. Hoy toca [competencia]. [1 frase específica sobre por qué esa competencia importa hoy en su plan]."* |
| **Intención** | Normalizar el entrenamiento diario. No celebrar en exceso — esto es el ritmo normal de un aspirante que va bien. Mero es el entrenador que ya esperaba que vinieras. |

Ejemplo real: *"Día 4, Valentina. Hoy toca Razonamiento Cuantitativo — el área con mayor impacto en tu puntaje ahora mismo."*

---

#### Estado 3: Hito de racha (7, 14, 30, 60 días)

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.streak` |
| **Ilustración** | `racha` |
| **Emoción** | Celebration — euforia genuina pero breve |
| **Mensaje** | *"¡[N] días seguidos! Eso no es suerte — es disciplina. Celebremos rápido y sigamos."* |
| **Intención** | Reconocer el hito sin detener el momentum. La celebración existe pero Mero no deja que se convierta en un motivo para no hacer la sesión de hoy. |

---

#### Estado 4: Retorno tras ausencia (3+ días sin sesión)

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.dontGiveUp` |
| **Ilustración** | `no-te-rindas` |
| **Emoción** | Resilience — determinación sin culpa |
| **Mensaje** | *"El mérito no desaparece. Llevas [X días] de trabajo acumulado — eso no cambia. ¿Seguimos?"* |
| **Intención** | Eliminar la culpa. El peor momento para un usuario es cuando regresa sintiéndose mal — eso lo hace más probable que se vaya de nuevo. Mero no menciona la ausencia directamente. Menciona lo que queda: el progreso real. |

La racha se reinicia automáticamente (comportamiento ya definido). Mero no lo señala, no lo lamenta. El CTA de la misión se ajusta a una sesión más corta que la habitual — "volver a entrar" es más fácil que "ponerse al día".

---

#### Estado 5: Misión del día ya completada

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.success` |
| **Ilustración** | `muy-bien` |
| **Emoción** | Encouragement — aprobación genuina |
| **Mensaje** | *"Misión cumplida. Puedes volver mañana o ir un poco más lejos hoy — tú decides."* |
| **Intención** | Cerrar el loop diario con satisfacción. Si el usuario quiere más, le da opciones sin presionarlo. Si no, le da permiso de cerrar. |

El CTA cambia: de "Comenzar sesión" a "Sesión adicional" (secundario) y "Ver mi progreso" (primario o igual jerarquía).

---

#### Estado 6: Sin preparación activa (onboarding incompleto o preparación archivada)

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.greeting` |
| **Ilustración** | `saludando` |
| **Emoción** | Joy — invitación cálida |
| **Mensaje** | *"Hola, [nombre]. Cuando quieras empezar a prepararte, dime para qué convocatoria y construimos tu plan."* |
| **Intención** | Invitar sin presionar. El Home vacío no puede sentirse como un error — es un punto de partida. |

El CTA principal cambia: "Crear mi preparación" → va a Mi Preparación → flujo de nueva preparación.

---

#### Estado 7: Sin conexión

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.noConnection` |
| **Ilustración** | `sin-conexion` |
| **Emoción** | Concern — tranquilo, no alarmado |
| **Mensaje** | *"No hay conexión. Cuando vuelva la señal, retomamos donde lo dejamos."* |
| **Intención** | Normalizar la situación sin alarmar. El progreso no está perdido. |

La pantalla muestra la última misión cacheada si existe (con indicador de que es offline), o un estado reducido sin datos en tiempo real.

---

#### Estado 8: Error del servidor

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.tryAgain` |
| **Ilustración** | `intentalo-otra-vez` |
| **Emoción** | Resilience — ligero, no dramático |
| **Mensaje** | *"Algo salió mal de nuestro lado. No es contigo — ya lo estamos revisando. Intenta de nuevo en un momento."* |
| **Intención** | Asumir la responsabilidad del error sin dramatizar. El usuario no debe sentir que perdió datos ni que hizo algo mal. |

Botón: "Reintentar". No hay más acciones disponibles en este estado.

---

#### Estado 9: Carga inicial

Mero no aparece. La pantalla muestra un skeleton loader de los elementos principales. Sin mensaje, sin ilustración.

Justificación: Mero con ilustración requiere contexto (¿qué estado es este usuario?). Mostrarlo antes de tener esa información produce un mensaje genérico — lo opuesto a lo que queremos. Mejor silencio breve que ruido.

---

#### Estado 10: Usuario con múltiples preparaciones (varias activas)

| Campo | Valor |
|---|---|
| **Escena** | `MERO_SCENES.studying` |
| **Ilustración** | `estudiando-en-escritorio` |
| **Emoción** | Focus |
| **Mensaje** | El mensaje se refiere a la preparación **en foco**, como en el estado normal. Mero no menciona las otras preparaciones en el Home. |
| **Elemento adicional** | Debajo de la misión, una línea compacta: "También tienes preparación activa para [Otra convocatoria]" → link a Mi Preparación. |
| **Intención** | No fragmentar el foco del Home. El usuario vino a saber qué hacer hoy. La respuesta es una sola misión, la de su preparación en foco. Si quiere cambiar de foco o ver las demás, Mi Preparación es el lugar. |

---

## 6. Estados completos de la pantalla

### Árbol de decisión para determinar el estado

```
¿Tiene sesión activa? (autenticado)
│
├── NO → Estado: Sin preparación activa
│
└── SÍ
    ├── ¿Hay conexión?
    │   └── NO → Estado: Sin conexión
    │
    ├── ¿Error del servidor?
    │   └── SÍ → Estado: Error
    │
    ├── ¿Datos cargando?
    │   └── SÍ → Estado: Carga
    │
    ├── ¿Primera vez (flag onboarding_completed === false)?
    │   └── SÍ → Estado: Primera vez
    │
    ├── ¿Días sin sesión >= 3?
    │   └── SÍ → Estado: Retorno tras ausencia
    │
    ├── ¿Misión de hoy ya completada?
    │   └── SÍ → Estado: Misión completada
    │
    ├── ¿Hoy es día de hito de racha? (7, 14, 30, 60...)
    │   └── SÍ → Estado: Hito de racha (se muestra una sola vez hasta que el usuario lo descarte)
    │
    └── → Estado: Entrenamiento activo (el estado por defecto y más frecuente)
```

### Tabla resumen de estados

| Estado | Mero scene | Ilustración | CTA principal | Prioridad |
|---|---|---|---|---|
| Carga | — (skeleton) | — | — | - |
| Primera vez | `welcome` | `bienvenido` | Comenzar sesión | Alta |
| Entrenamiento activo | `studying` | `estudiando-en-escritorio` | Comenzar sesión | **Máxima** |
| Hito de racha | `streak` | `racha` | Comenzar sesión | Alta |
| Retorno tras ausencia | `dontGiveUp` | `no-te-rindas` | Comenzar sesión (sesión corta) | Alta |
| Misión completada | `success` | `muy-bien` | Ver mi progreso / Sesión adicional | Media |
| Sin preparación activa | `greeting` | `saludando` | Crear mi preparación | Media |
| Sin conexión | `noConnection` | `sin-conexion` | Reintentar | Baja |
| Error | `tryAgain` | `intentalo-otra-vez` | Reintentar | Baja |
| Múltiples preparaciones | `studying` | `estudiando-en-escritorio` | Comenzar sesión (foco) | **Máxima** |

---

## 7. Componentes que nacen aquí

Estos componentes son identificados funcionalmente. No tienen diseño visual todavía.

### `<MisionCard />`
El componente más importante del Home. Muestra: nombre de la competencia, tipo de sesión, duración, mérito a ganar, y contiene el CTA principal. Debe comunicar claridad y acción. Nace en el Home pero es reutilizable en Mi Preparación (lista de misiones).

**Variantes:** activa (sin completar), completada (ya hecha hoy), bloqueada (requiere completar otra antes).

### `<MeroMessage />`
Zona de aparición de Mero: ilustración + mensaje contextual. El mensaje cambia por estado. La ilustración viene de `<MeroScene />` vía `MERO_SCENES`. El componente conoce el estado y selecciona automáticamente escena e ilustración — las pantallas no eligen la ilustración directamente.

### `<StreakChip />`
Indicador compacto de racha. Fuego + número de días. Variantes: racha activa, racha en riesgo (usuario abrió tarde en el día), racha en hito (visual diferente en el día del hito).

### `<ProgresoResumen />`
Bloque compacto: probabilidad + tendencia (↑↓→) + nombre de convocatoria en foco + días al examen. Tapeable → navega a Mi Progreso. No muestra desglose — solo la foto general.

### `<NotificacionRadar />`
Aparece condicionalmente cuando hay actividad relevante en convocatorias seguidas. Formato: banner compacto, descartable, no ocupa posición fija. Ejemplo: "Hoy cerró la convocatoria territorial que sigues." Tapeable → Radar.

---

## 8. Información requerida del backend

### Datos existentes en el modelo funcional actual

| Dato | Entidad | Estado |
|---|---|---|
| `nombre` | Usuario | ✅ En mock data |
| `rachaActual` | Usuario | ✅ En mock data |
| `nivel` | Usuario | ✅ En mock data |
| `merito` (renombrar desde `xp`) | Usuario | ✅ En mock data — renombrar |
| `convocatoria.nombre` | Preparación en foco | ✅ En mock data |
| `convocatoria.entidad` | Preparación en foco | ✅ En mock data |
| `diasRestantes` | Preparación en foco | ✅ En mock data |
| `probabilidadAprobacion` | Preparación en foco | ✅ En mock data |
| `tendencia` | Estadísticas | ✅ En mock data |
| `misionHoy.titulo` | Misión | ✅ En mock data |
| `misionHoy.tipo` | Misión | ✅ En mock data |
| `misionHoy.duracionMin` | Misión | ✅ En mock data |
| `misionHoy.xpRecompensa` (renombrar a `meritRecompensa`) | Misión | ✅ En mock data — renombrar |

### Datos que no existen todavía

| Dato | Por qué se necesita | Prioridad MVP |
|---|---|---|
| `diasDesdeUltimaSesion` | Detectar estado "retorno tras ausencia" | Alta |
| `misionHoy.completada` | Detectar estado "misión completada hoy" | Alta |
| `hitoRachaHoy` (boolean) | Detectar si hoy es día de hito (7, 14, 30...) | Media |
| `onboardingCompletado` | Detectar primera vez | Alta |
| `mensajeMeroContextual` | Mensaje generado por IA o reglas según estado real | Media — puede ser reglas en MVP |
| `actividadRadarPendiente` | ¿Hay notificaciones del Radar sin leer? | Media |
| `preparacionesActivas[]` | Lista de preparaciones activas (para el estado multi-preparación) | Alta — modelo funcional lo requiere |

### Nota sobre `mensajeMeroContextual`

En MVP el mensaje de Mero puede generarse por reglas deterministas (si racha > 7 y competencia = X, mensaje Y). No requiere llamada a la API de Claude en cada carga. La IA entra en una iteración posterior cuando el dataset sea suficientemente rico para generar mensajes verdaderamente personalizados. El modelo de datos debe soportar ambas implementaciones sin cambios de interfaz.

---

## 9. Riesgos de UX

### Riesgo 1: La misión no está lista cuando el usuario abre el Home

**Escenario:** el plan aún no generó misión para hoy (falla del sistema, preparación recién creada, sin sesiones disponibles en esa competencia).

**Consecuencia:** el elemento más importante del Home está vacío. El usuario no sabe qué hacer.

**Mitigación:** definir un estado fallback explícito: "Mero aún está preparando tu sesión de hoy. Mientras tanto, puedes practicar libremente." CTA secundario: "Práctica libre" → Mi Preparación → modo de práctica sin misión estructurada.

**Decisión necesaria antes de implementar:** ¿puede existir un día sin misión generada, o el sistema siempre debe tener una disponible? Si la segunda, ¿cuál es el fallback de la misión cuando el plan está al día?

---

### Riesgo 2: El mensaje de Mero es genérico y el usuario lo ignora

**Escenario:** el mensaje de Mero dice algo que podría aplicar a cualquier usuario: "¡Sigue así!" o "Hoy puedes lograrlo." El usuario lo lee una vez y nunca más.

**Consecuencia:** Mero pierde credibilidad y el diferencial del producto desaparece.

**Mitigación:** regla de producto congelable — el mensaje de Mero en el Home debe referenciar al menos **un dato específico del usuario** (nombre, racha, competencia de hoy, días restantes, progreso reciente). Sin ese dato, el mensaje no se publica. El sistema tiene un mensaje de fallback mínimo aceptable que sigue siendo específico: *"[Nombre]. Día [N]. Manos a la obra."*

---

### Riesgo 3: La probabilidad de aprobación no se mueve durante semanas

**Escenario:** el usuario entrena todos los días pero la probabilidad se mueve lento (es un número compuesto que tarda en reflejar cambios en competencias profundas). El usuario ve 68% durante 10 días seguidos.

**Consecuencia:** el usuario siente que no está avanzando. Abandona.

**Mitigación en el Home:** mostrar la tendencia (↑ subiendo) como elemento principal — incluso cuando el número no ha cambiado, si la dirección es correcta eso es información valiosa. Complementar con un indicador de actividad reciente visible: "Llevas 3 días de sesiones de Razonamiento — el cambio en la probabilidad tardará algunos días más en reflejarse."

**Decisión necesaria:** ¿la tendencia se calcula sobre 7 días o 14? Debe estar definida antes de implementar.

---

### Riesgo 4: El usuario con múltiples preparaciones no sabe cuál es la misión activa

**Escenario:** el usuario tiene DIAN y Docentes activas. Abre el Home y ve una misión. ¿Es de DIAN? ¿De Docentes? No lo sabe sin leer la letra pequeña.

**Consecuencia:** el usuario desconfía del sistema o toma acciones equivocadas.

**Mitigación:** la misión siempre muestra el nombre de la convocatoria a la que pertenece, visible y claro. El diseño no puede ambiguarlo. El foco activo aparece identificado en algún elemento estable del Home (no solo en la misión).

---

### Riesgo 5: El Home se convierte en dashboard cuando se le agregan "mejoras"

**Escenario:** en iteraciones futuras alguien propone agregar más información: el historial semanal, el ranking de competencias, los logros recientes, el número de preguntas respondidas en total...

**Consecuencia:** el Home pierde su función de claridad y se convierte en un panel de información que el usuario hojea sin actuar.

**Mitigación:** regla de producto congelable — **el Home no puede tener más de cuatro bloques de contenido** (Mero + misión + racha/progreso + notificación condicional del Radar). Cualquier propuesta de agregar un quinto bloque requiere decisión explícita de producto y debe justificarse contra la pregunta rectora.

---

### Riesgo 6: El retorno tras ausencia genera culpa en lugar de motivación

**Escenario:** el usuario que regresa ve que su racha es 0, su progreso no avanzó, y Mero le dice algo sobre "no rendirse". El conjunto comunica fracaso.

**Consecuencia:** el usuario se siente juzgado. Abandona definitivamente.

**Mitigación:** el estado de retorno tras ausencia sigue el protocolo Mero de resiliencia — el mensaje **nunca menciona la ausencia**, **nunca menciona la racha perdida**, y **nunca usa las palabras "volver", "regresar" o "retomar"**. Menciona solo lo que permanece: el dominio acumulado, las competencias practicadas, el mérito ganado. El CTA ofrece una sesión más corta de lo normal — la barrera de reentrada debe ser mínima.

---

## Criterio de aprobación de este documento

Antes de diseñar la interfaz, estas preguntas deben tener respuesta afirmativa:

1. ✅/❌ ¿El diseño ayuda realmente al usuario a saber qué hacer hoy? (La misión es el elemento dominante)
2. ✅/❌ ¿Reduce la ansiedad del aspirante? (Mero con intención, no decorativo; tono de entrenador)
3. ✅/❌ ¿Hace que quiera volver mañana? (Racha visible, progreso motivador, Mero personalizado)
4. ✅/❌ ¿Cada elemento tiene una razón para existir? (Cinco elementos, justificados arriba)
5. ✅/❌ ¿Mero aporta valor en todas sus intervenciones? (Nueve estados mapeados, cada uno con intención)

---

## Decisiones que deben tomarse antes de implementar

Estas preguntas no tienen respuesta todavía. Bloquean la implementación si no se resuelven:

1. **¿Qué ocurre cuando no hay misión generada para hoy?** ¿El sistema siempre tiene una disponible (misión de práctica libre como fallback)? ¿O existe el estado "sin misión"?

2. **¿Cuándo exactamente se activa el estado "retorno tras ausencia"?** ¿A partir de 2 días? ¿3? ¿Solo si la racha se perdió? ¿O también si la racha sigue activa pero con una sesión de emergencia de última hora?

3. **¿La tendencia de probabilidad se calcula sobre 7 o 14 días?** Impacta directamente qué tan sensible es el indicador ↑↓ al cambio de comportamiento del usuario.

4. **¿El hito de racha se muestra solo al abrir la app ese día, o persiste hasta que el usuario lo descarte?** Si el usuario abre a las 6am y ve el hito, ¿lo ve de nuevo si vuelve a las 9pm?

5. **¿El mensaje de Mero lo genera el backend (reglas en V1, IA en V2) o el frontend a partir de datos?** Impacta la arquitectura de la llamada a datos.
