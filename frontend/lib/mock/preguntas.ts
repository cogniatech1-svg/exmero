import type { Pregunta } from "@/types";

// Preguntas de Razonamiento Cuantitativo — nivel CNSC
// Competencia: mod_03 · Peso en examen DIAN: 25 %
export const preguntasRazonamientoMod03: Pregunta[] = [
  {
    id: "rq-001",
    competenciaId: "mod_03",
    enunciado:
      "En una secuencia numérica los primeros términos son 3, 6, 12, 24. ¿Cuál es el siguiente término?",
    opciones: [
      { id: "a", texto: "36" },
      { id: "b", texto: "48" },
      { id: "c", texto: "42" },
      { id: "d", texto: "54" },
    ],
    correctaId: "b",
    explicacion:
      "Es una progresión geométrica con razón 2: cada término es el doble del anterior. 3 → 6 → 12 → 24 → 48. Multiplicar por 2, no sumar un número fijo.",
    dificultad: "baja",
  },
  {
    id: "rq-002",
    competenciaId: "mod_03",
    enunciado:
      "Una entidad pública redujo su presupuesto en un 20 %. Si el presupuesto original era de $500 millones, ¿cuál es el nuevo presupuesto?",
    opciones: [
      { id: "a", texto: "$400 millones" },
      { id: "b", texto: "$480 millones" },
      { id: "c", texto: "$450 millones" },
      { id: "d", texto: "$420 millones" },
    ],
    correctaId: "a",
    explicacion:
      "Reducir en 20 % significa conservar el 80 % del valor original: $500M × 0,8 = $400M. El error frecuente es calcular el 20 % del resultado (80 %) en lugar del original.",
    dificultad: "baja",
  },
  {
    id: "rq-003",
    competenciaId: "mod_03",
    enunciado:
      "Si 5 funcionarios procesan 120 solicitudes en 3 días, ¿cuántas solicitudes procesarán 8 funcionarios en el mismo tiempo?",
    opciones: [
      { id: "a", texto: "192" },
      { id: "b", texto: "180" },
      { id: "c", texto: "210" },
      { id: "d", texto: "168" },
    ],
    correctaId: "a",
    explicacion:
      "120 ÷ 5 = 24 solicitudes por funcionario en 3 días. Con 8 funcionarios: 24 × 8 = 192. La producción es directamente proporcional al número de personas.",
    dificultad: "media",
  },
  {
    id: "rq-004",
    competenciaId: "mod_03",
    enunciado:
      "Un informe fue revisado por tres directivos. El primero tardó 4 horas, el segundo 6 horas y el tercero 3 horas. ¿Cuánto tardarían los tres trabajando juntos?",
    opciones: [
      { id: "a", texto: "1 hora y 20 minutos" },
      { id: "b", texto: "2 horas" },
      { id: "c", texto: "3 horas" },
      { id: "d", texto: "45 minutos" },
    ],
    correctaId: "a",
    explicacion:
      "Tasa combinada: 1/4 + 1/6 + 1/3 = 3/12 + 2/12 + 4/12 = 9/12 = 3/4 del trabajo por hora. Tiempo total = 4/3 horas = 1 hora 20 minutos. Suma las tasas individuales, no los tiempos.",
    dificultad: "alta",
  },
  {
    id: "rq-005",
    competenciaId: "mod_03",
    enunciado:
      "Un servidor público dedica 3/5 de su jornada de 8 horas a atención al ciudadano. ¿Cuántas horas dedica a otras tareas?",
    opciones: [
      { id: "a", texto: "4 horas y 48 minutos" },
      { id: "b", texto: "3 horas y 12 minutos" },
      { id: "c", texto: "4 horas" },
      { id: "d", texto: "2 horas y 24 minutos" },
    ],
    correctaId: "b",
    explicacion:
      "Si dedica 3/5 a atención, le queda 2/5 para otras tareas. 8 × 2/5 = 16/5 = 3,2 horas = 3 horas y 12 minutos.",
    dificultad: "media",
  },
  {
    id: "rq-006",
    competenciaId: "mod_03",
    enunciado:
      "La relación entre hombres y mujeres en una entidad pública es 3:5. Si hay 240 mujeres, ¿cuántos empleados hay en total?",
    opciones: [
      { id: "a", texto: "288" },
      { id: "b", texto: "384" },
      { id: "c", texto: "336" },
      { id: "d", texto: "192" },
    ],
    correctaId: "b",
    explicacion:
      "Las mujeres representan 5 partes de cada 8 (3+5). Si 5 partes = 240, entonces 1 parte = 48. Total: 48 × 8 = 384. También: 240 ÷ (5/8) = 240 × 8/5 = 384.",
    dificultad: "media",
  },
  {
    id: "rq-007",
    competenciaId: "mod_03",
    enunciado:
      "El número de solicitudes procesadas aumentó de 400 a 500 en un mes. ¿Cuál fue el porcentaje de aumento?",
    opciones: [
      { id: "a", texto: "20 %" },
      { id: "b", texto: "25 %" },
      { id: "c", texto: "30 %" },
      { id: "d", texto: "15 %" },
    ],
    correctaId: "b",
    explicacion:
      "Porcentaje de cambio = (nuevo − original) / original × 100 = (500 − 400) / 400 × 100 = 100/400 × 100 = 25 %. El error frecuente es dividir entre el nuevo valor en lugar del original.",
    dificultad: "baja",
  },
  {
    id: "rq-008",
    competenciaId: "mod_03",
    enunciado:
      "Un funcionario obtuvo 70, 80 y 90 en tres evaluaciones con pesos del 20 %, 30 % y 50 % respectivamente. ¿Cuál es su calificación ponderada?",
    opciones: [
      { id: "a", texto: "83" },
      { id: "b", texto: "81" },
      { id: "c", texto: "80" },
      { id: "d", texto: "82" },
    ],
    correctaId: "a",
    explicacion:
      "Calificación ponderada = 70×0,2 + 80×0,3 + 90×0,5 = 14 + 24 + 45 = 83. El promedio simple (80) no tiene en cuenta los pesos de cada evaluación.",
    dificultad: "media",
  },
];

export function getPreguntasMision(moduloId: string): Pregunta[] {
  if (moduloId === "mod_03") return preguntasRazonamientoMod03;
  // fallback: usar las mismas preguntas para el MVP
  return preguntasRazonamientoMod03;
}
