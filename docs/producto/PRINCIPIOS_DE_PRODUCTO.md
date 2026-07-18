# ExMero — Principios de producto

> Este documento define los principios inmutables del producto.
> Son la brújula para tomar decisiones de diseño, desarrollo y priorización.
> Cuando exista duda sobre qué construir o cómo construirlo, estos principios tienen la última palabra.

---

## 1. ExMero es un entrenador, no un curso

ExMero no entrega contenido pasivo. Entrena activamente al usuario para aprobar su concurso.

La diferencia es fundamental:
- Un curso informa. ExMero prepara.
- Un curso tiene módulos. ExMero tiene una ruta adaptativa.
- Un curso termina cuando el usuario termina el contenido. ExMero termina cuando el usuario aprueba.

**Implicación de diseño:** cada pantalla debe orientar hacia la siguiente acción de práctica, no hacia el siguiente bloque de lectura.

---

## 2. La Ruta es el eje del aprendizaje

La Ruta de aprendizaje es la estructura central del producto. Todo gira alrededor de ella:
- El diagnóstico inicial define la Ruta.
- El progreso diario avanza la Ruta.
- Los simulacros miden dónde está el usuario en la Ruta.
- La IA reordena y ajusta la Ruta en tiempo real.

**Implicación de diseño:** la sección Ruta en la navegación no es secundaria. Es el núcleo. El Home es el punto de entrada diario; la Ruta es el mapa completo.

---

## 3. Mero acompaña al usuario

Mero no es un logo ni un elemento decorativo. Es el entrenador personal del usuario.

Mero:
- Saluda por nombre.
- Explica los errores sin culpar.
- Adapta el tono según el momento (celebración, aliento, corrección).
- Nunca dice "estás mal" — señala el concepto y ofrece repaso.
- Habla en segunda persona, frases cortas, orientado a la siguiente acción.

**Implicación de desarrollo:** los mensajes de Mero son contenido dinámico generado por IA, no textos estáticos. El tono es de coach, nunca de sistema.

---

## 4. La IA explica y adapta

La inteligencia del producto no es un chatbot. Es el motor que:
- Adapta la dificultad a medida que el usuario practica.
- Genera explicaciones ajustadas al nivel detectado.
- Reordena la Ruta cuando detecta brechas nuevas.
- Sugiere simulacros en el momento correcto, no por calendario.
- Interviene proactivamente solo cuando hay evidencia de un patrón de error.

**Implicación de desarrollo:** la IA debe poder actuar sobre la Ruta sin intervención manual del usuario. La adaptación es silenciosa y continua.

---

## 5. Siempre existe una siguiente acción clara

Ninguna pantalla puede dejar al usuario sin saber qué hacer a continuación.

Reglas:
- Máximo un CTA primario por pantalla.
- El Home siempre tiene una sesión recomendada lista.
- Al terminar una sesión, el sistema sugiere qué sigue.
- Los estados vacíos tienen siempre un CTA concreto (no solo un mensaje).
- El error nunca es un callejón sin salida.

**Implicación de diseño:** si una pantalla no puede responder "¿qué hago ahora?" en menos de 3 segundos, necesita rediseño.

---

## 6. El progreso importa más que las estadísticas

ExMero mide lo que importa: la preparación real para aprobar el concurso.

Lo que mostramos:
- Probabilidad de aprobación (actualizada dinámicamente).
- Racha de disciplina (días de estudio real, no de apertura de app).
- Dominio por materia (bajo/medio/alto, no porcentajes de preguntas respondidas).
- Avance en la Ruta (% completado del plan personalizado).

Lo que NO mostramos como métrica principal:
- Número de preguntas respondidas (volumen ≠ preparación).
- Rankings contra otros usuarios (la competencia es contra el propio nivel).
- Tiempo en la app (engagement ≠ aprendizaje).

**Implicación de diseño:** los números grandes y visibles son la probabilidad de aprobación y la racha. Todo lo demás es detalle en segundo plano.

---

## 7. Cada pantalla debe ayudar al usuario a aprobar

Este es el filtro definitivo para cualquier decisión de producto.

Antes de agregar cualquier elemento, funcionalidad o pantalla, la pregunta es:
> ¿Esto ayuda al usuario a aprobar su concurso?

Si la respuesta no es un "sí" claro, no va en el MVP.

**Implicación de priorización:** el Premium, los features sociales, las estadísticas avanzadas y la gamificación profunda son secundarios. El ciclo diagnóstico → estudio → simulacro → mejora es primario.

---

## Principios de UX que se derivan de los anteriores

- **Fricción mínima en el flujo principal.** El camino hacia la práctica no puede tener más de 2 taps desde el Home.
- **Sin bifurcaciones innecesarias.** El usuario no elige entre rutas de aprendizaje: la IA ya eligió la mejor.
- **Modo silencio en simulacros.** Mero no interrumpe durante un simulacro. Concentración total.
- **Premium acelera, no rescata.** El plan gratuito debe ser genuinamente útil.
- **Sin urgencia falsa.** Nunca "oferta por tiempo limitado" si no es real.

---

*Última revisión: 2026-07-18*
*Próxima revisión: cuando se complete el ciclo MVP completo (diagnóstico → simulacro).*
