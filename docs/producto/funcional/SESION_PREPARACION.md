# Sesión de Preparación — Especificación Funcional

> **Estado:** Propuesta para aprobación · Sin implementar  
> **Experiencia:** el corazón de ExMero  
> **Depende de (congelados):** `EXMERO_MVP_VISION.md`, `MODELO_FUNCIONAL.md`, `HOME_FUNCIONAL.md`, `SISTEMA_MISIONES.md`  
> **Criterio de aprobación:** ¿Por qué un usuario querría volver mañana a hacer otra sesión?

---

## Por qué este documento importa más que cualquier otro

Todo ExMero existe para llevar al usuario hasta este momento. El Home elimina la fricción de decidir. El Radar sostiene el interés fuera del estudio. Mi Progreso da sentido al esfuerzo acumulado. Pero nada de eso significa nada si la sesión —el momento en que el usuario efectivamente entrena— no se siente como avance real.

La sesión es donde ExMero deja de ser una promesa y se vuelve un entrenador. Si aquí fallamos, el resto es decoración.

### La pregunta que gobierna todo el documento

> **¿Cómo conseguimos que una persona termine una sesión sintiendo que avanzó realmente en su preparación y quiera regresar mañana?**

La respuesta corta, que el resto del documento desarrolla: porque la sesión le muestra que hoy sabe algo que ayer no sabía, sin humillarlo por lo que aún no sabe, y lo deja en un punto donde regresar mañana es la continuación natural de algo que ya está funcionando.

---

## Anatomía de la sesión: los cinco actos

Toda sesión, sin importar el tipo de misión, atraviesa cinco actos. El diseño respeta este arco siempre.

```
   HOME                                                        HOME
    │                                                            ▲
    ▼                                                            │
 ┌──────┐   ┌───────────┐   ┌─────────────┐   ┌────────┐   ┌────────┐
 │ 1.   │──►│ 2.        │──►│ 3.          │──►│ 4.     │──►│ 5.     │
 │Inicio│   │Desarrollo │   │Explicación  │   │Cierre  │   │Retorno │
 │      │   │(ciclo)    │◄──│(dentro del  │   │        │   │        │
 └──────┘   └───────────┘   │ ciclo)      │   └────────┘   └────────┘
              ▲    │        └─────────────┘
              └────┘
           ciclo por pregunta
```

El acto 2 y el acto 3 se entrelazan: cada pregunta puede o no desencadenar una explicación. Los actos 1, 4 y 5 ocurren una sola vez por sesión.

---

## 1. Inicio — el umbral

El usuario pulsa **"Comenzar misión"** en el Home. Lo que ocurre en los siguientes tres segundos define si entra en estado de entrenamiento o si entra con dudas.

### Qué recibe el usuario antes de comenzar

Una pantalla de umbral breve —no un formulario, no una configuración— que confirma en qué se está metiendo. Contiene, en orden de jerarquía:

1. **El propósito de la misión** (regla congelada del Sistema de Misiones: toda misión explica su propósito). Una frase: *"Vamos a reforzar Comprensión lectora, tu área con más peso en el examen."* El usuario entiende en dos segundos por qué esta misión y por qué hoy.
2. **El alcance concreto:** cuántos ejercicios, duración estimada, tipo de actividad (preguntas rápidas, casos, revisión de errores…). Expectativa clara = menos abandono.
3. **La presencia de Mero** dando la entrada.

### Qué le explica Mero

Mero contextualiza, no instruye. Una sola frase que conecta esta sesión con el objetivo real del usuario. No explica cómo funciona la app —eso ya lo sabe—. Conecta el esfuerzo de hoy con el examen que quiere aprobar.

En fase de Aprendizaje, si es la primera vez en una competencia, Mero añade una línea de qué es esa competencia y por qué importa. En fases avanzadas, Mero es más escueto: el usuario ya no necesita que le expliquen el terreno.

### Qué NO debemos mostrar todavía

- **Nada de resultados ni progreso.** El progreso se gana en la sesión, no se anticipa.
- **Ningún número de Mérito prometido.** No compramos la atención con recompensas anticipadas. El Mérito se revela al final, como consecuencia del trabajo, no como cebo. (Esto contradice deliberadamente el "mérito a ganar" que el Home funcional menciona en la tarjeta de misión: en el umbral de la sesión el foco es el propósito, no el premio.)
- **Ninguna barra de dificultad ni advertencia de "esto es difícil".** Anticipar la dificultad genera ansiedad antes de empezar.
- **La probabilidad de aprobación.** Es una métrica de Home y de Mi Progreso. Dentro de la sesión distrae.

### La transición al desarrollo

El umbral no tiene botón "siguiente" que se sienta como un paso burocrático. Tiene un único gesto de entrada —"Empecemos"— que lleva directamente a la primera pregunta. Sin pantallas intermedias. El usuario debe sentir que cruzó una puerta, no que llenó un trámite.

---

## 2. Desarrollo — el núcleo

Aquí el usuario pasa la mayor parte del tiempo. El desarrollo es un ciclo que se repite pregunta a pregunta. La calidad de este ciclo es la calidad del producto.

### Cómo se siente responder

Cada pregunta ocupa la pantalla sin competencia visual. Una pregunta, sus opciones, y espacio para pensar. Nada de barras parpadeantes, cronómetros agresivos ni contadores que presionen. El estado por defecto de la sesión es **concentración serena**, no urgencia.

El usuario lee, piensa, responde. Al responder, recibe retroalimentación inmediata sobre si acertó o no —pero el peso emocional de esa retroalimentación está cuidadosamente calibrado (ver sección 4 y sección 6).

### Cómo cambia el ritmo

El ritmo no es uniforme y esa es una decisión de diseño:

- **Preguntas rápidas** fluyen una tras otra con transiciones ágiles. El usuario entra en un estado de flujo.
- **Casos y ejercicios aplicados** tienen más aire. La transición es más pausada porque el pensamiento requerido es mayor.
- Tras una **respuesta incorrecta que desencadena explicación**, el ritmo baja deliberadamente. Es un momento de aprendizaje, no de velocidad.

La variación de ritmo evita el efecto "cuestionario mecánico" y mantiene el sistema nervioso del usuario despierto sin agotarlo.

### Cuándo interviene Mero y cuándo guarda silencio

Este es el punto más delicado del desarrollo. **El silencio de Mero es tan importante como su voz.**

**Mero guarda silencio cuando:**
- El usuario responde correctamente en racha. Interrumpir el flujo con un "¡bien!" en cada acierto convierte el elogio en ruido y lo devalúa. En una secuencia de aciertos, Mero se limita a una señal visual mínima (ver sección 6) y deja fluir.
- El usuario está leyendo un caso largo o pensando. Mero no distrae mientras el usuario trabaja.

**Mero interviene cuando:**
- Aporta información que el usuario no tiene y necesita (una explicación tras un error, sección 3).
- Ocurre un cambio de estado emocional que merece acompañamiento (una recuperación tras varios errores, un tramo especialmente difícil superado).
- Se cierra un bloque de la sesión (no cada pregunta: un bloque).

La regla congelada del rol de Mero se aplica sin excepción: **Mero nunca aparece por decoración. Cada intervención justifica su existencia.**

### Qué ocurre si el usuario duda

Si el usuario tarda notablemente en una pregunta (señal de duda, no de distracción), el sistema no lo presiona. No aparece un cronómetro. Opcionalmente, tras una espera larga, se habilita de forma discreta una **pista contextual** —no la respuesta, sino una reorientación—: *"Piensa en qué establece el artículo sobre este punto."* La pista es una ayuda de entrenador, no un rescate. Usarla no penaliza el Mérito (el Mérito premia entrenamiento genuino, y pensar con ayuda sigue siendo entrenar).

### Qué ocurre si responde muy rápido

Responder por debajo de un umbral de tiempo plausible de forma repetida es la señal de alarma más importante del desarrollo: indica respuestas aleatorias, no entrenamiento. El sistema:

- No acusa al usuario ni lo bloquea.
- No cuenta esa interacción como entrenamiento genuino para efectos de Mérito y Constancia (regla congelada del Sistema de Misiones).
- Si el patrón persiste, Mero interviene **una sola vez** (regla congelada de intervención única): pregunta, sin reprender, si prefiere una sesión más corta o cambiar de tipo de actividad. No vuelve a mencionarlo.

### Qué ocurre si abandona

El abandono a mitad de sesión no es un fracaso a los ojos del sistema. Es un estado guardado.

- El progreso de la sesión se conserva. Si respondió 6 de 12, esos 6 están guardados.
- Al volver, el usuario decide: continuar donde quedó o empezar limpio. El sistema nunca lo obliga a repetir lo que ya hizo.
- Si alcanzó el mínimo de entrenamiento genuino antes de abandonar, la sesión cuenta para la Constancia del día y otorga el Mérito proporcional. Salir no borra lo trabajado.
- Mero no dice nada sobre el abandono cuando el usuario regresa. Lo recibe con lo que sigue, no con lo que dejó.

---

## 3. Explicaciones — ayuda, no clases

> "No quiero clases. Quiero ayuda útil."

### Cuándo aparecen

- **Siempre tras una respuesta incorrecta**, en fases de Aprendizaje y Consolidación. Aquí el error es la principal oportunidad de aprender y la explicación es obligatoria.
- **Tras un acierto, solo si el usuario lo pide.** Un acierto no necesita explicación por defecto, pero el usuario curioso puede tocar "¿por qué?" para ver el razonamiento. Ofrecer sin imponer.
- **Bajo demanda mediante la microayuda contextual `[?]`** cuando aparece un término burocrático de la CNSC (capacidad transversal "Entiende tu convocatoria" del MVP).

### Cuándo NO aparecen

- **En modo simulacro.** El simulacro reproduce condiciones de examen: sin ayuda de Mero, sin explicaciones durante la prueba. Las explicaciones se agrupan al final, en la revisión.
- **En fase de Afinamiento preexamen**, las explicaciones se vuelven mínimas. A pocos días del examen, el usuario no necesita aprender conceptos nuevos —necesita confianza—. Las explicaciones se reducen a recordatorios breves.
- **Cuando el usuario acierta y no pregunta.** No explicamos lo que el usuario ya demostró saber.

### Cómo deben sentirse

- **Breves.** Una explicación no es una lección de 3 minutos. Es el "por qué" esencial, en el tono de Mero, de 2 a 5 frases. Si el concepto requiere más, se ofrece un enlace a la microayuda ampliada, pero la explicación en línea es corta.
- **Concretas.** Explican por qué la respuesta correcta es correcta y, cuando ayuda, por qué la que eligió el usuario era tentadora pero incorrecta. Nombrar el error común desactiva su repetición.
- **Sin condescendencia.** Mero no dice "es muy fácil". Nunca minimiza el error del usuario. Explica y sigue.
- **Aplicadas al examen.** Cuando es posible, la explicación conecta con cómo se evalúa esto en el concurso real. El usuario no aprende teoría abstracta; aprende para aprobar.

### La regla de oro de las explicaciones

Una explicación existe para que el usuario **no vuelva a fallar la misma cosa**, no para demostrar cuánto sabe el sistema. Si una explicación no reduce la probabilidad del próximo error, sobra.

---

## 4. Motivación durante la sesión — mecanismos reales

> "No quiero gamificación artificial. No quiero frases vacías. Quiero mecanismos reales."

La motivación dentro de la sesión no viene de puntos que suben ni de confeti. Viene de tres mecanismos verdaderos:

### Mecanismo 1: percepción de avance dentro de la sesión

El usuario debe sentir que la sesión tiene un principio, un medio y un final que se acercan. Un indicador de progreso sobrio —cuántas preguntas faltan— convierte la sesión en un trayecto con meta visible. No es gamificación: es orientación. Saber que faltan 3 de 12 es lo que permite hacer el último esfuerzo.

### Mecanismo 2: dificultad calibrada (el estado de flujo)

La motivación más poderosa es la sensación de estar exactamente en el límite de lo que uno puede hacer. Preguntas demasiado fáciles aburren; demasiado difíciles frustran. El sistema ajusta la dificultad para mantener al usuario en la zona donde acierta lo suficiente para sentirse capaz y falla lo suficiente para sentir que aprende. Esta es la palanca de motivación real más importante y es invisible: el usuario no la ve, la siente.

### Mecanismo 3: evidencia de aprendizaje, no de desempeño

El usuario se motiva cuando ve que **entiende algo que antes no entendía**, no cuando ve un número. Por eso, cuando el usuario falla una pregunta, recibe la explicación, y más adelante en la misma sesión acierta una pregunta relacionada, el sistema lo hace notar: *"Esto es lo que acabas de aprender."* Ese momento —fallar, entender, acertar— es la experiencia más motivadora que ExMero puede ofrecer, y ocurre dentro de una sola sesión.

### Lo que NO usamos como motivación

- Contadores de Mérito subiendo en tiempo real durante la sesión.
- Celebraciones por cada acierto individual.
- Comparaciones con otros usuarios.
- Presión de tiempo artificial en sesiones que no son simulacro.
- Amenazas sobre la Constancia ("¡no pierdas tu racha!").

---

## 5. Cierre — la resolución

El cierre es donde el usuario decide, sin saberlo, si vuelve mañana. Es el momento más importante del documento después del desarrollo.

### Qué ocurre inmediatamente después de terminar

Una pantalla de cierre —no un salto abrupto al Home— que da resolución al esfuerzo. Mero aparece aquí con presencia plena (ver sección 6). El cierre tiene un orden emocional deliberado:

1. **Reconocimiento primero.** Antes de cualquier número, Mero reconoce el trabajo con algo concreto de esta sesión. No genérico: *"Terminaste. Y lo importante: las dos de Constitución que fallabas la semana pasada, hoy las tienes."*
2. **La evidencia de avance.** El dato que responde "¿avancé?": cómo cambió el Dominio de la competencia trabajada. Este es el número que importa, expresado como progreso, no como calificación.
3. **El Mérito ganado.** Ahora sí, revelado como consecuencia del trabajo real. Y, si aplica, el avance de Constancia.
4. **El puente al mañana.** Una línea sobre qué sigue —no una nueva misión que empuje a seguir ahora, sino la certeza de que hay un camino: *"Mañana consolidamos esto."*

### Qué información mostramos

- Reconocimiento específico de Mero.
- Cambio en el Dominio de la(s) competencia(s) trabajada(s), como evolución.
- Mérito ganado en la sesión.
- Avance de Constancia e hito, si se alcanzó uno (celebrado aquí, al terminar, nunca antes de empezar —regla congelada).
- Resumen sobrio de la sesión: cuántas preguntas, cuántos aciertos —presentado sin dramatismo, como información, no como veredicto.

### Qué NO mostramos

- **La probabilidad de aprobación como porcentaje en el cierre.** El cambio numérico de una sola sesión es pequeño; mostrarlo con fanfarria genera expectativas falsas o decepción. La probabilidad vive en el Home y en Mi Progreso, donde el usuario la lee con la cadencia correcta. **Excepción:** cuando la sesión produce un avance realmente significativo en una competencia crítica, el cierre puede comunicarlo de forma cualitativa: *"Fortaleciste una de tus competencias más importantes."* El porcentaje actualizado lo encontrará en el Home, no aquí.
- **Comparaciones con sesiones anteriores que puedan leerse como retroceso.** Si hoy le fue peor que ayer, el cierre no lo subraya. Reconoce el esfuerzo y señala el camino (regla congelada del rol de Mero).
- **Rankings, percentiles, comparación con otros usuarios.** Fuera del MVP y contra la filosofía del producto.
- **Un veredicto de "aprobado/reprobado" de la sesión.** Una sesión no se aprueba ni se reprueba. Se entrena.

### Cómo explicamos el progreso

El progreso se explica como **movimiento**, no como estado. No "tu Dominio de Constitución es 62 %", sino "tu Dominio de Constitución subió". El usuario no necesita el número absoluto para sentir avance; necesita la dirección. El número absoluto vive en Mi Progreso para quien quiera profundizar.

### Cómo relacionamos la sesión con la preparación completa

El cierre siempre ancla la sesión individual en el arco mayor. Una línea que sitúa el trabajo de hoy dentro de la fase actual y del objetivo: *"Vas por buen camino en Consolidación. Cada sesión como esta acerca el examen a tu alcance."* Sin esto, la sesión se siente como un ejercicio aislado. Con esto, se siente como un paso de un plan que avanza.

### El entrenamiento no termina: siempre hay un paso siguiente

Toda sesión debe terminar dejando claro que el entrenamiento continúa y que ya existe una siguiente recomendación preparada. El cierre no es un punto final —es una pausa—. El usuario sale sabiendo dos cosas: lo que acaba de lograr y lo que le espera mañana. Esa certeza —que el camino ya tiene el siguiente tramo trazado— es lo que convierte el cierre en un puente, no en un muro.

Mero cierra siempre mirando hacia adelante, nunca hacia atrás y nunca hacia abajo. Su última intervención en la sesión apunta al siguiente paso, no resume lo que acaba de ocurrir. La sesión terminó; el entrenamiento no.

### La salida al Home

Desde el cierre, un solo gesto devuelve al usuario al Home —que ahora refleja el estado actualizado: nueva Constancia, misión de mañana ya preparada—. El usuario no queda en un limbo. Vuelve al lugar desde donde partió, transformado por lo que acaba de hacer.

---

## 6. Papel de Mero en la sesión

Mero recorre la sesión como un entrenador recorre un entrenamiento: presente en los momentos que importan, invisible cuando el usuario trabaja. Escenas referenciadas por su nombre en `MERO_SCENES` (nunca por ruta directa).

| Momento | Escena | Emoción | Intención | Aparece / Calla |
|---|---|---|---|---|
| **Umbral de inicio** | `encouragement` | Ánimo sereno | Conectar la sesión con el objetivo real | **Aparece.** Una frase de entrada. |
| **Primera pregunta en adelante (flujo normal)** | — | — | — | **Calla.** El usuario trabaja; Mero no interrumpe. |
| **Acierto individual en racha** | `correct` (señal mínima) | Aprobación discreta | Confirmar sin cortar el flujo | Señal visual breve, **sin frase.** |
| **Acierto que supera un tramo difícil** | `success` | Reconocimiento genuino | Marcar un logro real | **Aparece**, brevemente. |
| **Respuesta incorrecta** | `explaining` | Enseñanza sin juicio | Convertir el error en aprendizaje | **Aparece** con la explicación. |
| **Usuario duda / espera larga** | `thinking` | Compañía paciente | Ofrecer una pista sin rescatar | **Aparece** solo si la espera es larga. |
| **Recuperación tras varios errores** | `encouragement` / `dontGiveUp` | Resiliencia | Sostener la motivación en el punto de fricción | **Aparece.** Momento crítico. |
| **Patrón de respuestas aleatorias** | `thinking` | Cuidado, no reproche | Ofrecer ajustar la sesión | **Aparece una sola vez** (regla de intervención única). |
| **Cierre — reconocimiento** | `success` / `celebrating` | Orgullo del entrenador | Reconocer el trabajo antes que el número | **Aparece** con presencia plena. |
| **Cierre — hito de Constancia** | `streak` | Celebración | Celebrar la continuidad, no el conocimiento | **Aparece** solo si se alcanzó un hito. |
| **Cierre — fin de plan / cambio de fase** | `achievement` / `levelUp` | Hito mayor | Marcar que algo importante ocurrió | **Aparece** solo en transición de fase. |
| **Cierre — puente al siguiente paso** | `studying` / `encouragement` | Anticipación serena | Apuntar hacia lo que sigue; nunca hacia lo que ya pasó | **Aparece siempre.** Es la última intervención de Mero en la sesión. |
| **Pérdida de conexión** | `noConnection` | Calma, control | Tranquilizar: nada se perdió | **Aparece** con el estado de error. |

### Los silencios de Mero (tan definidos como sus apariciones)

- Durante el flujo de aciertos: **silencio**.
- Mientras el usuario lee o piensa: **silencio**.
- En cada acierto de una secuencia: **silencio** (solo señal visual).
- Sobre el abandono, al regresar: **silencio**.
- Sobre la Constancia perdida: **silencio absoluto** (regla congelada).
- En simulacro, durante la prueba: **silencio total** hasta la revisión final.

---

## 7. Estados especiales

### Usuario nuevo (primera sesión)

Viene del onboarding; esta es su primera misión, generada en tiempo real tras la calibración. El umbral es más explicativo: Mero introduce brevemente qué es entrenar en ExMero. Las explicaciones tras error son más generosas. La dificultad parte del diagnóstico, deliberadamente alcanzable —la primera sesión debe terminar en éxito percibido—. El cierre enfatiza que esto apenas empieza y que ya dio el primer paso.

### Usuario avanzado

Umbral escueto —ya conoce el terreno—. Menos explicaciones no solicitadas. Dificultad alta desde el inicio. Mero interviene menos y de forma más estratégica. El cierre habla de precisión y de cerrar brechas finas, no de cobertura. El riesgo es el aburrimiento por subestimación: la dificultad calibrada (mecanismo 2) es la defensa.

### Respuestas excelentes (sesión de alto desempeño)

El sistema no infla el elogio. Un desempeño excelente se reconoce con sobriedad y se traduce en una señal real: la dificultad de la próxima sesión subirá, y Mero lo puede anticipar como un reto, no como amenaza: *"Vas muy bien. Mañana te propongo algo más exigente."* El elogio genuino es escaso para no devaluarse.

### Respuestas muy bajas (sesión difícil para el usuario)

El estado más delicado del cierre. Reglas:
- Mero **nunca** presenta la sesión como fracaso.
- El cierre reconoce el esfuerzo, no el resultado (regla congelada).
- Se destaca cualquier cosa aprendida, por pequeña que sea —una explicación que quedó clara vale como avance—.
- El Dominio puede no haber subido; el cierre no lo subraya como retroceso. Enmarca la sesión como parte del proceso: *"Hoy fue de las difíciles. Así se construye. Mañana seguimos."*
- La próxima misión ajustará la dificultad a la baja, sin anunciarlo como degradación.

### Abandono

Cubierto en la sección 2. Estado guardado, sin culpa, Mérito y Constancia proporcionales si se alcanzó el mínimo genuino, silencio de Mero al regresar.

### Pérdida de conexión

El caso técnico con mayor riesgo emocional: el usuario teme haber perdido su trabajo. Reglas:
- El progreso de la sesión se conserva localmente. Nada se pierde.
- Mero aparece con `noConnection`, tono de calma: comunica explícitamente que el avance está a salvo.
- Al recuperar conexión, la sesión continúa exactamente donde estaba.
- Si la sesión ya alcanzó el mínimo genuino antes de caer la conexión, cuenta para la Constancia del día aunque el usuario no pueda cerrarla en ese momento.

### Sesión pausada

El usuario sale a propósito (una llamada, una interrupción). Distinto del abandono: la intención es volver pronto. El estado se conserva idéntico. Al volver, retoma sin fricción y sin pantalla de re-inicio. Mero no comenta la pausa.

### Examen cercano (Afinamiento preexamen)

La sesión cambia de carácter (definido en el Sistema de Misiones): más corta, sin contenido nuevo, explicaciones mínimas, foco en confianza. El umbral no habla de brechas. El desarrollo mezcla repaso de lo dominado con práctica en condiciones reales. El cierre refuerza lo que el usuario **ya sabe** y nunca destaca lo que falta (regla congelada de la fase). Mero calma; no exige.

---

## 8. Backend — qué necesita y qué escribe esta experiencia

> Sin diseño técnico. Solo qué información consume y qué produce la experiencia.

### Qué necesita conocer al iniciar la sesión

- La misión activa de la preparación bajo foco: competencia(s), tipo de actividad, alcance, propósito visible, dificultad objetivo.
- El Dominio actual del usuario en la(s) competencia(s) que se van a trabajar (para calibrar dificultad y medir el cambio al final).
- La fase actual de la preparación (determina tono, explicaciones, ritmo).
- El conjunto de ejercicios que compone la misión, con sus respuestas correctas y sus explicaciones asociadas.
- Días restantes al examen (afecta el carácter de la sesión).
- Configuración del usuario relevante: tiempo disponible declarado, si es su primera sesión.

### Qué escribe sobre el Dominio

- Actualiza el Dominio del usuario en cada competencia trabajada, en función de la interacción genuina y el desempeño. El Dominio es la medida real del conocimiento (regla congelada) y evoluciona con precisión, sin saltos bruscos.
- Registra qué ejercicios/temas específicos falló o acertó, para alimentar futuras misiones (revisión de errores, dominio frío).

### Qué escribe sobre la preparación

- Registra la sesión en el historial de la preparación específica.
- Actualiza el progreso del plan (cobertura de competencias, avance de fase).
- Recalcula la Probabilidad de aprobación proyectando el nuevo Dominio sobre la matriz de la convocatoria —pero no la presenta con dramatismo en el cierre; la deja lista para el Home y Mi Progreso—.
- Evalúa si corresponde una transición de fase.

### Qué escribe sobre el Mérito

- Otorga Mérito solo si hubo entrenamiento genuino (regla congelada): interacción real y sostenida, no presencia ni respuestas aleatorias.
- La cantidad depende del alcance completado y de la fase (fases avanzadas otorgan algo más).
- El abandono con mínimo genuino alcanzado otorga Mérito proporcional.

### Qué escribe sobre la Constancia

- Marca el día como día con entrenamiento si la sesión alcanzó el mínimo de entrenamiento genuino.
- Incrementa el conteo de Constancia; evalúa si se alcanzó un hito (para celebrarlo en el cierre).
- No registra ni expone información sobre días sin entrenar en forma que genere culpa (regla congelada).

### Principio de escritura

La sesión escribe en cuatro lugares —Dominio, preparación, Mérito, Constancia— pero solo dos de ellos (Dominio y Mérito/Constancia) se muestran en el cierre. La Probabilidad se escribe silenciosamente y se revela en su contexto propio. **Escribir no es lo mismo que mostrar.**

---

## 9. Componentes reutilizables que nacen aquí

> Identificación, no diseño. Estos componentes nacen en la sesión y varios se reutilizan en Simulacro y en la revisión.

1. **UmbralDeMision** — pantalla de entrada con propósito, alcance y frase de Mero.
2. **PreguntaEjercicio** — presentación de una pregunta y sus opciones; base de todos los tipos de actividad.
3. **RetroalimentacionRespuesta** — la reacción inmediata (correcto/incorrecto) con su calibración emocional.
4. **ExplicacionMero** — bloque de explicación breve tras error o bajo demanda; reutiliza el patrón de microayuda `[?]`.
5. **PistaContextual** — ayuda de reorientación ante duda prolongada.
6. **ProgresoSesion** — indicador sobrio de avance dentro de la sesión (cuántas faltan).
7. **MeroIntervencion** — envoltorio que decide aparición/silencio de Mero según el momento (encapsula las reglas de la sección 6).
8. **CierreSesion** — pantalla de resolución con reconocimiento, evidencia de avance, Mérito y puente al mañana.
9. **EstadoConexion** — manejo visible de pérdida/recuperación de conexión, tranquilizador.
10. **IndicadorDominio** — representación del cambio de Dominio como movimiento (reutilizable en Mi Progreso).

---

## 10. Riesgos

### Qué podría hacer la sesión aburrida

- **Uniformidad.** Si todas las preguntas se sienten iguales, la sesión se vuelve un cuestionario. *Mitigación:* variación de tipo de actividad y de ritmo (secciones 2 y Sistema de Misiones §7).
- **Dificultad mal calibrada.** Demasiado fácil aburre; demasiado difícil frustra. *Mitigación:* el mecanismo de flujo (sección 4) es la defensa central.
- **Mero hablador.** Un elogio en cada acierto vuelve a Mero ruido de fondo. *Mitigación:* el silencio como regla por defecto (sección 6).
- **Sesiones demasiado largas.** *Mitigación:* alcance ajustado al tiempo declarado; misiones cortas para quien tiene poco tiempo.

### Qué podría romper la confianza

- **Un elogio inmerecido.** Si Mero celebra un mal desempeño, el usuario deja de creer en Mero. *Mitigación:* reconocer el esfuerzo, no fingir un resultado que no fue.
- **Perder el trabajo del usuario.** Un abandono o una caída de conexión que borre el avance es imperdonable. *Mitigación:* estado guardado siempre; comunicación explícita de que nada se perdió.
- **Prometer progreso que no se ve.** Anunciar "subirás mucho tu probabilidad" y mostrar un cambio mínimo destruye la credibilidad. *Mitigación:* no prometer Mérito ni probabilidad en el umbral; mostrar avance como dirección, no como cifra inflada.
- **Explicaciones que suenan a clase magistral o a condescendencia.** *Mitigación:* explicaciones breves, concretas, sin minimizar el error.

### Comportamientos que queremos evitar

- **Que el usuario optimice para la Constancia respondiendo al azar.** *Mitigación:* el filtro de entrenamiento genuino; intervención única de Mero ante el patrón.
- **Que el usuario evite las competencias difíciles para proteger su Mérito.** *Mitigación:* el Mérito no depende de la precisión (regla congelada); fallar y aprender es rentable en Mérito.
- **Que el usuario termine la sesión sintiéndose evaluado en lugar de entrenado.** *Mitigación:* ningún veredicto de sesión; lenguaje de proceso, no de calificación.
- **Que el usuario asocie ExMero con culpa.** *Mitigación:* silencio absoluto sobre ausencias y abandonos; el retorno siempre es como empezar un día normal.

---

## Verificación del criterio de aprobación

> **¿Por qué un usuario querría volver mañana a hacer otra sesión?**

Porque la sesión le entrega, cada vez, cuatro cosas que ningún banco de preguntas puede darle:

**Vio que aprendió algo.** El ciclo de fallar, entender y volver a acertar dentro de la misma sesión es evidencia directa de que hoy sabe algo que ayer no sabía. Eso no se olvida y hace querer repetirlo.

**Nunca se sintió humillado.** Falló sin ser juzgado. Recibió ayuda sin condescendencia. Un mal día se enmarcó como parte del proceso, no como fracaso. La sesión es un lugar seguro para equivocarse, y a los lugares seguros uno vuelve.

**El esfuerzo tuvo consecuencia real.** El Dominio subió, el Mérito llegó como resultado del trabajo genuino, la Constancia avanzó. No fueron puntos vacíos: fueron el reflejo de que se acercó al examen.

**Quedó en la mitad de un camino, no al final de una tarea.** El cierre no dijo "terminaste". Dijo "mañana consolidamos esto". La sesión de hoy dejó abierta la de mañana. Volver no es empezar de nuevo: es continuar algo que ya está funcionando.

Un usuario vuelve mañana porque hoy la sesión lo trató como un entrenador de élite trata a su atleta: con exigencia calibrada, con verdad sin crueldad, y con la certeza compartida de que cada día están un poco más cerca del objetivo.
