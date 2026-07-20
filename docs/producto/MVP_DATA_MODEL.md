# ExMero — Modelo de datos canónico del MVP

> Este documento define el **usuario canónico** utilizado durante todo el desarrollo inicial del MVP.
> Todas las pantallas consumen estos mismos datos.
> Ninguna pantalla puede inventar información que no esté definida aquí.
>
> Cuando el backend real esté listo, este documento sirve como contrato de la forma exacta
> que deben devolver los endpoints.

---

## Usuario canónico

### Identidad

| Campo | Valor |
|---|---|
| Nombre completo | Valentina Ríos Herrera |
| Nombre corto | Valentina |
| Email | valentina.rios@ejemplo.co |
| Avatar | `null` (usa inicial "V" como fallback) |
| Ciudad | Bogotá, Colombia |

---

### Convocatoria activa

| Campo | Valor |
|---|---|
| Entidad | DIAN — Dirección de Impuestos y Aduanas Nacionales |
| Cargo | Profesional Universitario Grado 11 — Área Tributaria |
| Código convocatoria | CNSC-2025-DIAN-047 |
| Fecha estimada del examen | 2026-09-20 |
| Días restantes | *(calculado dinámicamente desde la fecha actual)* |
| Modalidad | Presencial |
| Ciudad del examen | Bogotá |

---

### Disponibilidad de estudio

| Campo | Valor |
|---|---|
| Tiempo disponible por día | 90 minutos |
| Días de estudio por semana | 5 días (lunes a viernes) |
| Horario preferido | Noche (8pm–10pm) |

---

### Gamificación

| Campo | Valor |
|---|---|
| Nivel | 3 |
| XP actual | 2 340 |
| XP para siguiente nivel | 3 000 |
| Racha actual | 7 días |
| Racha máxima histórica | 12 días |

---

### Progreso general

| Campo | Valor |
|---|---|
| Probabilidad de aprobación | 68 % |
| Tendencia | `subiendo` |
| Preguntas practicadas hoy | 12 |
| Preguntas practicadas esta semana | 47 |
| Tiempo de estudio hoy | 34 min |
| Historial semanal (preguntas/día) | `[8, 12, 6, 15, 12, 0, 0]` (lun–dom) |

---

### Módulos de estudio

| Módulo | Peso en prueba | Progreso | Nivel de dominio |
|---|---|---|---|
| Competencias Básicas | 30 % | 71 % | `alto` |
| Comportamentales | 25 % | 48 % | `medio` |
| Razonamiento Cuantitativo | 25 % | 33 % | `bajo` |
| Aptitud Verbal | 20 % | 55 % | `medio` |

---

### Fortalezas y debilidades

**Fortalezas (módulos con dominio `alto`):**
- Competencias Básicas: consistencia alta en comprensión de normas y procedimientos administrativos.

**Debilidades (módulos con dominio `bajo` o progreso < 40 %):**
- Razonamiento Cuantitativo: errores recurrentes en proporciones y series numéricas.
- Comportamentales: baja consistencia en preguntas de ética y toma de decisiones bajo presión.

---

### Misión de hoy (próxima misión recomendada)

| Campo | Valor |
|---|---|
| ID | `mision-001` |
| Título | Razonamiento numérico básico |
| Descripción | Practica series numéricas y proporciones — el área con mayor impacto en tu puntaje ahora mismo. |
| Tipo | `practica` |
| Módulo | Razonamiento Cuantitativo |
| Duración estimada | 20 min |
| XP recompensa | 150 |
| Completada hoy | `false` |

---

### Mensaje contextual de Mero

El mensaje de Mero es dinámico según el estado del usuario. Para el MVP, se usa una de estas variantes según condición:

| Condición | Mensaje |
|---|---|
| Racha activa (≥ 3 días) | *"¡7 días seguidos, Valentina! Razonamiento Cuantitativo te está esperando — ahí está tu próximo salto."* |
| Primer acceso del día | *"Buenos días, Valentina. Hoy toca reforzar lo que más pesa en tu puntaje."* |
| Racha en riesgo (sin sesión hoy, hora > 20h) | *"Valentina, hoy aún no has estudiado. Son solo 20 minutos — tu racha de 7 días vale la pena defenderla."* |
| Default (fallback) | *"Valentina, tienes 68 % de probabilidad de aprobar. Cada sesión la mueve hacia arriba."* |

**Para el MVP usa siempre el mensaje de racha activa**, ya que la racha actual es 7 días.

---

### Logros

| Logro | Estado | Fecha |
|---|---|---|
| Primera sesión | Desbloqueado | 2026-06-15 |
| Racha de 3 días | Desbloqueado | 2026-06-20 |
| 100 preguntas practicadas | Desbloqueado | 2026-07-01 |
| Racha de 7 días | Desbloqueado | 2026-07-18 |
| Racha de 14 días | Bloqueado | — |

---

### Metas semanales

| Meta | Objetivo | Estado actual | Completada |
|---|---|---|---|
| Preguntas de práctica | 60 preguntas | 47 preguntas | `false` |
| Días de estudio | 5 días | 4 días | `false` |
| Tiempo total de estudio | 7.5 horas (450 min) | 3.2 horas (192 min) | `false` |
| Simulacro semanal | 1 simulacro | 0 simulacros | `false` |

---

## Contrato con los datos mock

El archivo `frontend/lib/mock/data.ts` debe reflejar exactamente los valores de este documento.
Si hay discrepancia entre este documento y el archivo de datos, **este documento prevalece**.

Cualquier pantalla nueva del MVP que necesite datos no cubiertos aquí debe primero
agregar el campo a este documento antes de implementarlo.

---

## Extensiones futuras (fuera del MVP)

Los siguientes campos no están definidos en el MVP pero están anticipados:

- `historialSimulacros[]` — resultados de simulacros anteriores
- `rankingConvocatoria` — posición relativa entre participantes (si aplica)
- `notasPersonales[]` — apuntes del usuario por módulo
- `calendarioEstudio` — plan semana a semana generado por IA
- `ajustesIA` — configuración de adaptabilidad del motor

---

*Última revisión: 2026-07-18*
*Responsable: CognIA Tech*
