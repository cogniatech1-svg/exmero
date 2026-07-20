# Sistema de Misiones — Especificación de Producto

> **Estado:** Congelado · Aprobado como referencia oficial del sistema de entrenamiento  
> **Fecha:** 2026-07-19  
> **Criterio de aprobación:** ¿Cómo consigue ExMero que una persona quiera volver mañana a entrenar sin sentir obligación ni culpa?  
> **Depende de:** `MODELO_FUNCIONAL.md`, `EXMERO_MVP_VISION.md`, `HOME_FUNCIONAL.md`  
> **Base para:** diseño e implementación de la experiencia de Sesión de preparación

---

## Principio que gobierna este documento

El sistema de misiones no existe para medir al usuario.  
Existe para eliminar la decisión de qué hacer hoy.

Un aspirante a concurso público tiene dos enemigos reales: la dispersión (no saber por dónde empezar) y el agotamiento (sentir que nunca es suficiente). El sistema de misiones ataca los dos directamente. Propone una acción concreta. Dosifica el esfuerzo. Y hace que completarla se sienta como progreso real, no como cumplir una tarea.

---

## Las cuatro métricas del entrenamiento

ExMero mide el progreso del usuario a través de cuatro métricas distintas. Cada una responde una pregunta diferente.

| Métrica | Pregunta que responde |
|---|---|
| **Mérito** | ¿Cuánto ha entrenado este usuario? |
| **Constancia** | ¿Con qué continuidad entrena? |
| **Dominio** | ¿Cuánto sabe en cada competencia? |
| **Probabilidad de aprobación** | ¿Qué tan preparado está para su convocatoria? |

Estas métricas son independientes por diseño. Un usuario puede tener alta Constancia y bajo Dominio (entrena todos los días pero no progresa — señal de que el sistema debe ajustar las misiones). Puede tener alto Dominio y baja Constancia (conoce el contenido pero no mantiene el ritmo). La separación explícita evita que una métrica contamine la lectura de otra.

**La Probabilidad de aprobación es una estimación, nunca una promesa.** Se calcula proyectando el Dominio actual del usuario sobre la matriz de evaluación de su convocatoria. El sistema nunca garantiza que aprobar el examen esté dentro de su alcance — solo refleja el estado del entrenamiento.

---

## 1. ¿Qué es una misión?

Una misión es **la unidad mínima de entrenamiento que tiene sentido por sí sola**.

No es una sesión completa de estudio. No es un simulacro. No es un repaso libre.

Es una propuesta específica del sistema: *"Hoy practica estos 12 ejercicios de Comprensión lectora, con dificultad media, porque llevas 8 días sin tocar esa competencia y el examen tiene un 25 % de peso en esa área."*

### La diferencia con sesión, simulacro y repaso

| Concepto | Definición |
|---|---|
| **Misión** | Propuesta del sistema: qué practicar hoy, en qué área, a qué profundidad. Tiene objetivo explícito y propósito visible. Puede completarse en 15-25 minutos. |
| **Sesión** | La ejecución de una misión. La misión es el plan; la sesión es el trabajo. Cuando el usuario inicia una misión, comienza una sesión. |
| **Simulacro** | Modalidad especial: condiciones de examen real, sin ayuda de Mero, con tiempo. No es una misión diaria — es un evento de evaluación. |
| **Repaso** | Actividad libre, sin objetivo fijo. El usuario entra a Mi Preparación y practica lo que quiere. No genera una misión activa. |

La distinción es importante: **Mero propone misiones**. El usuario ejecuta sesiones. Los simulacros los decide el usuario o Mero los sugiere como evento, no como misión cotidiana.

### Toda misión tiene un propósito visible

El usuario siempre debe entender por qué recibió la misión de hoy. No quiero únicamente una lista de actividades.

Cada misión comunica su intención de forma sencilla, antes de que el usuario la inicie:

- reforzar una competencia crítica con alto peso en el examen
- consolidar un tema ya trabajado para fijar el conocimiento
- preparar el siguiente simulacro
- recuperar una competencia con dominio frío
- practicar bajo condiciones de dificultad real

Esta comunicación no es un texto largo. Es una frase concreta que acompaña la misión en el Home y en Mi Preparación. El usuario sabe en dos segundos qué va a hacer y por qué tiene sentido hacerlo hoy.

---

## 2. Ciclo de vida de una misión

### Nacimiento

Una misión nace cuando el sistema la genera. Las misiones no se generan por lote — se generan cuando la anterior termina o cuando el usuario abre la app y no hay ninguna activa.

El sistema nunca presenta más de una misión por preparación a la vez. Esa es la regla central de este sistema.

La generación considera:
- Competencias con dominio más bajo según la matriz de la convocatoria bajo foco
- Competencias con "dominio frío" (no practicadas en un número de días relevante para la fase actual)
- Peso de cada competencia en la convocatoria bajo foco
- Tiempo restante hasta el examen
- Fase actual de la preparación
- Historial reciente (no repetir la misma área dos días seguidos sin razón)
- Duración estimada disponible (configurable por el usuario en Perfil)

### Aparición

Una misión aparece en dos lugares:
1. **Home:** como la acción principal del día. Es lo primero que el usuario ve.
2. **Mi Preparación:** en la vista del plan, como el paso inmediato disponible.

La misión no aparece como notificación push en MVP. El usuario la descubre al abrir la app.

### Duración y relevancia de una misión

Una misión permanece activa mientras siga siendo la mejor siguiente acción para el usuario.

No existe una expiración fija basada en tiempo. En su lugar, el sistema evalúa continuamente si la misión actual sigue siendo la recomendación correcta. Una misión deja de ser la recomendación principal cuando el contexto del usuario cambia de forma que la hace menos útil que una alternativa. Algunos eventos que pueden provocar este cambio:

- cambió la prioridad de competencias (otra área se volvió más urgente)
- cambió la fecha del examen
- el usuario avanzó en otra preparación y eso afecta las prioridades
- el estado de la preparación cambió de fase
- existe una misión más útil dado lo que ocurrió recientemente

Si la misión sigue siendo válida cuando el usuario regresa, permanece. Si el sistema determina que ya no representa la mejor siguiente acción, genera una nueva. No hay contador de misiones abandonadas ni registro visible de lo que no se completó.

### Cierre

Una misión cierra cuando:
- El usuario completa todos los ejercicios propuestos.
- El usuario alcanza el mínimo de entrenamiento genuino establecido para ese tipo de misión y decide terminar.

No cierra si el usuario sale a mitad: la misión guarda el progreso y puede retomarse mientras siga siendo la recomendación válida.

### Reemplazo

Inmediatamente después de cerrar una misión (por compleción o por pérdida de relevancia), el sistema genera la siguiente. El Home nunca queda sin una acción principal disponible.

---

## 3. Fases de la preparación

Una preparación no termina cuando el usuario completa el plan inicial. Cambia de fase.

Este principio protege dos cosas: la motivación (siempre hay algo que hacer) y la honestidad (nadie está "listo" para un concurso hasta el día del examen).

### Las cuatro fases

---

### Fase 1 — Aprendizaje

**Cuándo ocurre:** desde la calibración inicial hasta que el usuario alcanza un dominio base (≥50 %) en todas las competencias evaluadas por su convocatoria bajo foco.

**Qué caracteriza las misiones:**
- Ejercicios de introducción a cada competencia
- Volumen moderado, dificultad baja-media
- Mero explica, acompaña, contextualiza
- Énfasis en completar el plan completo, no en la perfección
- El propósito visible de cada misión suele ser: "conocer esta competencia por primera vez" o "establecer una base en esta área"

**Frecuencia:** una misión por día. Sin presión de velocidad.

**Dificultad:** progresiva. Empieza en el nivel diagnosticado en la calibración.

**Comportamiento de Mero:** didáctico y cercano. Explica el "por qué" de cada área. Celebra la primera vez en cada competencia.

**Métricas relevantes en esta fase:**
- Cobertura del plan (porcentaje de competencias tocadas al menos una vez)
- Dominio inicial por área
- Constancia de días activos

---

### Fase 2 — Consolidación

**Cuándo ocurre:** cuando el usuario supera el dominio base en todas las competencias y aún le quedan más de 30 días para el examen.

**Qué caracteriza las misiones:**
- Ejercicios de práctica intensiva en las áreas con mayor peso en la convocatoria
- Introducción de ejercicios de dificultad media-alta
- Repasos periódicos de competencias ya aprendidas para evitar olvido
- Primeros simulacros parciales sugeridos (por sección, no examen completo)
- El propósito visible varía: "consolidar lo aprendido", "subir la precisión en esta área crítica", "preparar el primer simulacro parcial"

**Frecuencia:** una misión por día. Puede incluir una segunda misión opcional de repaso corto (10 minutos) si el usuario tiene tiempo disponible declarado.

**Dificultad:** media-alta. El sistema comienza a introducir preguntas del nivel real del examen.

**Comportamiento de Mero:** más exigente, más estratégico. Señala brechas. Celebra mejoras sostenidas, no solo actos individuales.

**Métricas relevantes en esta fase:**
- Evolución del Dominio por competencia
- Tendencia de la Probabilidad de aprobación
- Precisión en las áreas de mayor peso

---

### Fase 3 — Perfeccionamiento

**Cuándo ocurre:** cuando el usuario tiene dominio ≥70 % en todas las competencias y aún le quedan más de 14 días para el examen.

**Qué caracteriza las misiones:**
- Trabajo intensivo sobre las brechas residuales
- Simulacros completos con análisis de resultado
- Ejercicios de alta dificultad en áreas críticas
- Sesiones cortas de repaso en áreas ya dominadas para mantener frescura
- El propósito visible es siempre específico: "cerrar la brecha en esta área", "practicar bajo condiciones de examen real", "mantener fresco lo que ya dominas"

**Frecuencia:** una misión diaria, con simulacros sugeridos 1-2 veces por semana.

**Dificultad:** alta. El usuario ya no necesita explicaciones básicas — necesita precisión bajo presión.

**Comportamiento de Mero:** estratégico y concreto. No motiva en abstracto — señala exactamente qué mejorar y cuánto importa. Celebra los avances de precisión, no solo de cobertura.

**Métricas relevantes en esta fase:**
- Probabilidad de aprobación y su tendencia semanal
- Precisión en condiciones de simulacro
- Desempeño en las áreas de mayor peso de la convocatoria

---

### Fase 4 — Afinamiento preexamen

**Cuándo ocurre:** los últimos 14 días antes del examen.

**Qué caracteriza las misiones:**
- Sin nuevos contenidos. Solo repaso y consolidación.
- Sesiones más cortas que en las fases anteriores (10-15 minutos)
- Simulacros completos en condiciones reales
- Foco en confianza, no en aprender nada nuevo
- El propósito visible cambia de tono: "recordar lo que ya sabes", "practicar en condiciones reales", "confirmar tu nivel antes del examen"

**Frecuencia:** una misión diaria, más corta que en fases anteriores. La presión disminuye en volumen para aumentar en calidad.

**Dificultad:** varía. Mezcla ejercicios de nivel real con repasos rápidos de lo ya dominado para generar confianza.

**Comportamiento de Mero:** calmante y concreto. Refuerza lo que el usuario sabe. Nunca destaca brechas en esta fase — eso genera ansiedad sin posibilidad real de corrección. Mero acompaña, no presiona.

**Métricas relevantes en esta fase:**
- Constancia de días activos
- Resultado en simulacros completos
- Estado anímico (indirectamente, a través del comportamiento en la app)

---

## 4. ¿Puede acabarse una preparación?

**Respuesta:** No en el sentido de que "ya no hay nada que hacer". Sí en el sentido de que la convocatoria tiene fecha de examen.

### Tres eventos que modifican la preparación, sin terminarla

**Evento 1: El usuario completa el plan inicial**  
El sistema cambia de fase (de Aprendizaje a Consolidación, por ejemplo). Las misiones cambian de tipo. Mero celebra el hito. La preparación continúa.

**Evento 2: El usuario llega al día del examen**  
El Home cambia de modo: ya no hay misiones. Mero envía un mensaje único de acompañamiento. La pantalla muestra que hoy es el día.

**Evento 3: El usuario marca el examen como realizado**  
La preparación entra en estado "Examen realizado". El Home cambia a modo espera. Las misiones dejan de generarse para esa preparación. Si el usuario tiene otra preparación activa, el foco cambia automáticamente a ella.

### Lo que nunca ocurre

El sistema nunca le dice al usuario que terminó ni que está listo. Esas son afirmaciones que ningún sistema puede hacer con honestidad antes de un concurso real.

### Cómo evitamos la sensación de "ya terminé"

La pregunta que el Home siempre responde es: ¿Cuánto más cerca estás de aprobar que la semana pasada?

Si la Probabilidad sigue subiendo, el usuario siente progreso. Si está estable, el sistema introduce retos de precisión. Siempre hay margen para mejorar.

---

## 5. Misión del día: nunca puede estar ausente

**Decisión:** El Home siempre tiene una misión disponible. El caso de "no hay misión" no existe.

### Por qué

Si el Home puede quedar vacío de misión, el usuario llega a la app y no sabe qué hacer. En ese momento, abandona. No porque no quiera estudiar — sino porque la fricción de decidir qué hacer es demasiada.

### Cómo se garantiza

El sistema genera automáticamente una misión basada en la siguiente jerarquía de prioridades:

1. **Competencia más débil según la matriz de la convocatoria bajo foco**  
   La que tiene mayor brecha entre el Dominio actual y el peso que tiene en el examen.

2. **Dominio frío**  
   Competencias que el usuario no ha practicado en un número de días relevante para la fase actual y que tienen al menos un 10 % de peso en la convocatoria.

3. **Tiempo restante hasta el examen**  
   Si quedan menos de 30 días: priorizan simulacros. Si quedan más de 60 días: priorizan aprendizaje y consolidación.

4. **Equilibrio del entrenamiento**  
   No todas las misiones deben enfocarse en las debilidades. El sistema equilibra estratégicamente misiones de refuerzo, misiones de consolidación y misiones de confianza. El usuario debe sentir progreso, no castigo permanente. Ver sección 6.

5. **Evitar repetición de experiencia**  
   El sistema no repite el mismo tipo de actividad dos días seguidos sobre la misma competencia. Ver sección 7.

6. **Fallback absoluto**  
   Si el sistema no tiene información suficiente o si todas las competencias tienen dominio alto y no hay examen próximo: genera una sesión de repaso en la competencia con mayor peso en la convocatoria. Esta es la misión mínima. Siempre es válida.

### El fallback no es un error

Una misión de repaso generada por fallback es tan válida como cualquier otra. Mero no la presenta como "lo mejor que tengo" — la presenta como lo que tiene sentido hoy.

---

## 6. Equilibrio del entrenamiento

El sistema no puede optimizar solo para las debilidades del usuario. Un entrenamiento que permanentemente subraya lo que falta genera agotamiento y sensación de estancamiento, incluso cuando hay progreso real.

### Los cuatro tipos de misión

| Tipo | Cuándo aparece | Efecto esperado |
|---|---|---|
| **Misión de refuerzo** | Cuando una competencia tiene brecha crítica respecto a la media de la convocatoria | El usuario ataca directamente lo que más impacta su probabilidad |
| **Misión de consolidación** | Cuando el usuario avanzó recientemente en una competencia | Fija el conocimiento nuevo antes de pasar al siguiente reto |
| **Misión de confianza** | Cuando el usuario lleva varios días de esfuerzo intenso o cuando el examen está próximo | El usuario practica en áreas donde ya es fuerte. Recuerda lo que sabe. Recupera energía. |
| **Misión de preparación para examen** | Cuando el simulacro es la siguiente acción más útil según el plan | El usuario entrena en condiciones reales antes de una evaluación de referencia |

El sistema alterna entre estos tipos según el momento de la preparación y el estado emocional implícito en el comportamiento del usuario. El usuario no elige el tipo — lo recibe como una propuesta con propósito visible.

---

## 7. Variación de las misiones

Aunque una competencia aparezca en misiones sucesivas, la experiencia no debe sentirse repetitiva.

La competencia puede repetirse. La experiencia no.

### Formas de entrenar una competencia

- preguntas rápidas de selección múltiple
- casos prácticos o situacionales
- ejercicios aplicados a contextos reales
- simulaciones bajo tiempo
- revisión de errores anteriores con explicación de Mero
- repasos inteligentes con énfasis en los temas donde el usuario falló la última vez

El sistema debe variar la forma de entrenar cada competencia para que el usuario sienta que avanza de formas distintas, no que repite la misma actividad con preguntas diferentes.

---

## 8. Relación con el Mérito

### Principio oficial

El Mérito recompensa el entrenamiento genuino. No recompensa simplemente abrir una sesión.

### ¿Qué es entrenamiento genuino?

El entrenamiento genuino ocurre cuando el usuario interactúa con el contenido de la sesión de forma activa y sostenida, en cantidad suficiente para que el sistema pueda actualizar su modelo de conocimiento.

El sistema determina si el entrenamiento fue genuino sin importar cuántas respuestas fueron correctas. Lo que cuenta es la interacción real con el contenido, no el resultado.

**No genera Mérito:**
- abrir una sesión y salir antes de comenzar
- abandonar antes de alcanzar el mínimo de interacción definido para ese tipo de misión
- completar ejercicios de forma mecánica sin pausa suficiente (señal de respuestas aleatorias)
- cerrar la app en los primeros segundos de una sesión

La definición de "mínimo de interacción" es una decisión de implementación técnica que no se congela aquí. Lo que sí queda congelado es el principio: el Mérito refleja trabajo real, no presencia.

### Qué genera Mérito

| Actividad | Genera Mérito |
|---|---|
| Completar una misión con entrenamiento genuino | Sí — el Mérito central del sistema |
| Alcanzar el mínimo de una sesión y decidir terminar | Sí — menor que la misión completa |
| Completar un simulacro | Sí — cantidad variable según alcance |
| Hacer repaso libre con entrenamiento genuino | Sí — menor que una misión estructurada |
| Abrir la app sin interactuar | No |
| Abandonar antes del mínimo | No |

### Por qué el Mérito no depende de la precisión

Si el Mérito dependiera de cuántas respuestas correctas da el usuario, el sistema incentivaría evitar las competencias donde falla. Un usuario racional evitaría lo difícil para proteger su Mérito. Eso destruye la preparación.

El Mérito premia el acto de entrenar. El resultado puntual se refleja en el Dominio y en la Probabilidad de aprobación — esas son las métricas que miden el avance real.

### Calibración del Mérito por fase

Las misiones de fases avanzadas (Perfeccionamiento, Afinamiento) generan más Mérito que las de Aprendizaje. No mucho más — lo suficiente para que el usuario sienta que el esfuerzo mayor tiene reconocimiento.

---

## 9. Relación con la Constancia

### Definición oficial

La Constancia mide la continuidad con la que el usuario entrena.

La Constancia nunca mide aprendizaje. Nunca mide rendimiento. Nunca mide conocimiento.

Mide únicamente una cosa: ¿sigue apareciendo?

Un usuario con alta Constancia y bajo Dominio no está bien preparado — está entrenando sin progresar lo suficiente. El sistema detecta esa situación y ajusta las misiones. Pero la Constancia en sí misma no juzga la calidad del entrenamiento.

### Qué activa la Constancia

Completar al menos una misión con entrenamiento genuino en el día. La hora no importa.

Una sesión de repaso libre también cuenta si supera el mínimo de entrenamiento genuino. La Constancia no requiere misión formal — requiere entrenamiento real.

### Qué no rompe la Constancia

Un día sin actividad la interrumpe. Pero la interrupción no genera mensaje de culpa. Mero nunca menciona cuántos días estuvo interrumpida. El conteo simplemente comienza de nuevo desde 1.

El usuario solo ve el conteo actual. El sistema guarda el récord histórico para las insignias, pero no lo muestra en el Home — ese número ya no motiva, solo recuerda lo que se perdió.

### Hitos de Constancia

Los hitos (3, 7, 14, 30 días) tienen dos efectos:
1. Mero los celebra al completar la misión del día en que se alcanza el hito.
2. Desbloquean una insignia.

Los hitos no interrumpen el flujo con una pantalla especial — se integran al cierre de sesión. El usuario termina su misión y entonces Mero celebra. Primero el trabajo. Luego el reconocimiento.

### Protección de la motivación

Si el usuario lleva 3 o más días sin actividad, el sistema no destaca el número de días sin entrenar. Lo que muestra es el conteo actual de Constancia (0 o lo que tenga). Mero no menciona la ausencia.

La Constancia es motivación positiva, no contador de culpa.

---

## 10. Relación con Mero

### Regla general

Mero solo habla cuando tiene algo específico que decir. Nunca repite el mismo mensaje dos días seguidos.

### Cuándo aparece y qué función cumple

| Momento | Función de Mero |
|---|---|
| Aparece una nueva misión | Contextualiza la misión: por qué esta competencia, por qué hoy. Una frase, no un párrafo. |
| El usuario completa una misión | Reconoce el logro con algo concreto del resultado. No es genérico — es específico al desempeño de esa sesión. |
| Una misión cambia porque el contexto cambió | No lo menciona. Presenta la nueva misión como si siempre hubiera sido la propuesta del día. |
| El usuario regresa tras varios días | No menciona la ausencia. Menciona lo que permanece: el Dominio, el plan, lo que está por venir. |
| El usuario completa el plan inicial (fin de Fase 1) | Celebra el hito explícitamente. Es una de las pocas veces donde Mero puede interrumpir el flujo normal para marcar que algo importante ocurrió. |
| El usuario entra en Afinamiento (últimos 14 días) | Cambia el tono: deja de hablar de lo que falta y comienza a hablar de lo que está listo. |

### Lo que Mero nunca hace

- Nunca menciona misiones anteriores sin completar.
- Nunca compara el desempeño de hoy con días anteriores para señalar decaimiento.
- Nunca usa la Constancia perdida para motivar.
- Nunca dice "te falta poco" a menos que sea literalmente verdad (últimos 14 días).
- Nunca dice "¡Excelente!" si el resultado fue mediocre. Cuando el resultado es bajo, Mero reconoce el esfuerzo y señala el camino, no el fracaso.
- Nunca destaca brechas durante el Afinamiento preexamen.

---

## 11. Casos especiales

### Usuario nuevo

No tiene misión generada hasta completar la calibración. Durante el onboarding, el sistema genera la primera misión en tiempo real basándose en los resultados del diagnóstico. El usuario sale del onboarding y el Home ya tiene su primera acción lista, con propósito visible.

El onboarding no termina con "Tu preparación está lista". Termina con "Esta es tu primera misión."

### Usuario muy avanzado

Si el Dominio global es alto y el examen está lejos, el sistema entra tempranamente en Perfeccionamiento. Las misiones se enfocan en precisión, no en cobertura. Los simulacros aparecen con más frecuencia.

El riesgo de este perfil: el usuario puede sentir que "ya sabe todo" y abandonar. El contramovimiento: el sistema muestra siempre la brecha entre el Dominio actual y el umbral de aprobación histórico de esa convocatoria. Siempre hay margen.

### Examen en tres días

La preparación entra en Afinamiento si no estaba ya en esa fase. Ningún contenido nuevo — solo repaso corto y simulacro si el usuario lo quiere. Mero cambia el tono completamente.

El Home muestra la cuenta regresiva de forma destacada. La misión del día es propuesta, no impuesta: Mero le da al usuario permiso explícito de descansar si lo necesita.

### Examen en seis meses

El sistema tiene tiempo. Las misiones equilibran más deliberadamente refuerzo, consolidación y confianza. Se permiten variaciones más amplias en el ritmo.

El riesgo: el usuario no siente urgencia y abandona. El contramovimiento: Mero ancla el progreso en la Probabilidad de aprobación, que sube visiblemente con Constancia incluso si el examen está lejos.

### Usuario sin tiempo

Si el usuario declaró menos de 30 minutos disponibles por día en Perfil, el sistema genera misiones cortas: 8-10 ejercicios en lugar de 12-15. El Dominio sube más lento — eso es honesto — pero nunca se le niega una misión.

Una misión de 10 minutos completada con entrenamiento genuino es siempre mejor que una de 25 minutos abandonada.

### Usuario que completa todas las misiones rápidamente

Si el usuario completa su misión en menos de 10 minutos de forma consistente, el sistema ajusta la dificultad. No ofrece misiones adicionales de inmediato.

La excepción: si el usuario toca activamente el botón "Quiero más" al terminar, el sistema genera una misión opcional de repaso corto. Es opcional. Mero la presenta como "extra", no como la continuación normal.

### Usuario que cambia constantemente de convocatoria

El sistema no penaliza el cambio de foco. Pero si detecta que el usuario ha cambiado de foco más de 3 veces en 7 días sin completar una sola misión, Mero hace una intervención única: pregunta si quiere ajustar el plan. No acusa — pregunta.

Esa intervención ocurre una vez. Si el usuario la ignora, el sistema no vuelve a mencionarlo.

---

## 12. Riesgos del sistema

### Riesgo 1: el usuario optimiza para la Constancia, no para aprender

Si la Constancia se vuelve el objetivo principal, el usuario buscará completar misiones lo más rápido posible para mantener el contador, no para realmente aprender.

**Contramovimiento:** el sistema define "entrenamiento genuino" como condición para que una sesión cuente. Y el Mérito no depende de velocidad — depende de interacción real. El sistema detecta patrones de velocidad inusual.

### Riesgo 2: las misiones se vuelven predecibles y aburridas

Si el usuario siente que las misiones son siempre iguales, las trata como una obligación.

**Contramovimiento:** la variación de tipo de actividad (sección 7) y la rotación de tipo de misión (sección 6) generan diversidad sin que el usuario tenga que pedirla.

### Riesgo 3: el usuario siente que nunca puede "descansar"

Si el sistema siempre tiene una misión esperando, el usuario puede sentir presión permanente.

**Contramovimiento:** la misión siempre está disponible, pero nunca es urgente. El sistema no envía recordatorios en MVP. La misión espera sin juzgar. Mero nunca pregunta por qué no se entrenó ayer.

### Riesgo 4: múltiples preparaciones generan culpa por negligencia

Si el usuario sabe que la segunda preparación tiene misiones "acumuladas", puede sentir que está descuidando una convocatoria.

**Contramovimiento:** el sistema no acumula misiones. Cada preparación siempre tiene exactamente una misión disponible, sin importar cuánto tiempo lleve inactiva. No hay deuda visible.

### Riesgo 5: el fallback de misión se siente como un parche

Si el usuario percibe que la misión de hoy es "lo que había" en lugar de "lo que necesita", la propuesta pierde credibilidad.

**Contramovimiento:** el fallback siempre tiene una justificación real que el sistema expresa como propósito visible. Mero no lo presenta como fallback — lo presenta como la decisión estratégica que es.

### Riesgo 6: las fases no se perciben

Si el usuario no nota que la naturaleza de sus misiones cambió al pasar de Aprendizaje a Consolidación, las fases son un constructo interno sin impacto real.

**Contramovimiento:** cada transición de fase tiene un momento explícito de comunicación. Mero señala el cambio. El cambio de propósito visible en las misiones refleja directamente el cambio de fase.

### Riesgo 7: el énfasis en debilidades agota al usuario

Si todas las misiones atacan lo que falta, el usuario puede sentir que nunca progresa aunque progrese.

**Contramovimiento:** el sistema de equilibrio (sección 6) garantiza que hay misiones de confianza y consolidación mezcladas con las de refuerzo. El usuario debe sentir que sabe cosas, no solo que le faltan cosas.

---

## Decisiones congeladas

Estas reglas son definitivas. No están sujetas a revisión sin justificación explícita de producto.

1. **El Mérito recompensa entrenamiento genuino, no respuestas correctas.** El Mérito refleja trabajo real. Abrir una sesión sin interactuar de forma genuina no genera Mérito.

2. **La Constancia mide continuidad, no aprendizaje.** Mide si el usuario sigue apareciendo, nada más. No juzga la calidad del entrenamiento. No mide rendimiento ni conocimiento.

3. **El Dominio es la medida real del conocimiento.** Es la métrica que refleja cuánto sabe el usuario en cada competencia. Evoluciona lentamente y con precisión, no con saltos bruscos.

4. **La Probabilidad de aprobación es una estimación, nunca una promesa.** El sistema calcula y muestra la probabilidad basándose en el Dominio real. Nunca garantiza resultados.

5. **Las misiones siempre explican su propósito.** El usuario siempre sabe por qué recibió la misión de hoy antes de iniciarla. Una misión sin propósito visible no debe salir al usuario.

6. **Completar el plan inicial nunca significa terminar la preparación.** Simplemente cambia la etapa del entrenamiento. Toda preparación evoluciona de forma continua hasta la fecha del examen.

7. **El Home siempre tiene una acción principal disponible.** El estado "sin misión" no existe. El sistema genera automáticamente la mejor siguiente acción si no hay ninguna activa.

8. **El sistema recomienda la mejor siguiente acción según el contexto, no según el tiempo.** Las misiones no expiran por tiempo fijo. Se reemplazan cuando dejan de ser la recomendación más útil para el usuario.

9. **El usuario nunca siente deuda por cambiar de preparación.** Una preparación sin foco no acumula misiones pendientes. Cuando el foco regresa, el sistema genera la misión más útil para ese momento, sin registro visible del tiempo transcurrido.

10. **Las misiones evolucionan para evitar repetición de experiencia.** La competencia puede repetirse. La forma de entrenarla no. El sistema varía el tipo de actividad para que el entrenamiento no se sienta mecánico.

11. **El entrenamiento equilibra refuerzo, consolidación y confianza.** No todas las misiones atacan debilidades. El sistema mezcla deliberadamente los cuatro tipos de misión para que el usuario sienta progreso, no castigo permanente.

12. **Una sola misión activa por preparación a la vez.** El sistema nunca propone dos misiones paralelas de la misma preparación.

13. **La Constancia interrumpida no genera culpa.** Mero nunca menciona cuántos días estuvo interrumpida. El conteo empieza de nuevo desde 1 en silencio.

14. **Mero nunca menciona misiones sin completar.** Lo que no se hizo ayer no existe en la interfaz de hoy.

15. **Los hitos de Constancia se celebran al terminar la sesión, no antes de empezarla.** Primero el trabajo. Luego el reconocimiento.

16. **La intervención de Mero ante patrones problemáticos ocurre una sola vez.** Si el sistema detecta un comportamiento que quiere señalar, lo menciona una vez y no vuelve a mencionarlo si el usuario no responde.

---

## Verificación del criterio de aprobación

> **¿Cómo consigue ExMero que una persona quiera volver mañana a entrenar sin sentir obligación ni culpa?**

Este sistema responde la pregunta a través de cinco mecanismos coordinados:

**Siempre hay algo concreto que hacer.** No hay que decidir qué estudiar. La misión ya está lista cuando el usuario abre la app, con un propósito visible que la hace entendible en dos segundos.

**El esfuerzo siempre vale.** Cada misión completa con entrenamiento genuino sube el Dominio, actualiza la Probabilidad y avanza la Constancia. El usuario ve que lo que hizo hoy tuvo efecto.

**No hay deuda acumulable.** Si el usuario no entrenó ayer, hoy simplemente tiene la misión más útil para este momento. Sin misiones pendientes visibles. Sin registro del tiempo transcurrido. El pasado no penaliza el presente.

**El retorno nunca duele.** Volver después de una ausencia es exactamente igual a empezar un día normal. Mero recibe al usuario con lo que lo espera hoy, no con un resumen de lo que no hizo.

**El sistema no castiga, equilibra.** Las misiones no son una lista de déficits a corregir. Son una propuesta estratégica que mezcla reto, consolidación y confianza. El usuario entrena lo que necesita mejorar y también lo que ya sabe hacer bien.
