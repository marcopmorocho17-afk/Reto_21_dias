export type IdHabito = "study" | "read" | "exercise" | "meditate" | "sleep" | "walk";

export interface Habito {
  id: IdHabito;
  title: string;
  description: string;
  icon: "book" | "barbell" | "school" | "leaf" | "moon" | "walk";
  color: string;
}

export type ProgresoDiario = Record<IdHabito, boolean>;

export const listaHabitos: Habito[] = [
  { id: "study", title: "Ver el código", description: "30 minutos de práctica", icon: "school", color: "#7C3AED" },
  { id: "read", title: "Leer un libro", description: "Avanza en tu lectura", icon: "book", color: "#2563EB" },
  { id: "exercise", title: "Ejercicio físico", description: "Muévete al menos 20 minutos", icon: "barbell", color: "#F97316" },
  { id: "meditate", title: "Meditar", description: "10 minutos de calma", icon: "leaf", color: "#16A34A" },
  { id: "sleep", title: "Dormir bien", description: "Descansa al menos 8 horas", icon: "moon", color: "#6366F1" },
  { id: "walk", title: "Caminar", description: "Camina al menos 20 minutos", icon: "walk", color: "#EA580C" },
];

export function crearProgresoInicial(): ProgresoDiario {
  return Object.fromEntries(listaHabitos.map((habito) => [habito.id, false])) as ProgresoDiario;
}

export function alternarHabito(progreso: ProgresoDiario, id: IdHabito): ProgresoDiario {
  return { ...progreso, [id]: !progreso[id] };
}

export function calcularProgreso(progreso: ProgresoDiario) {
  const completados = Object.values(progreso).filter(Boolean).length;
  return {
    completados,
    porcentaje: Math.round((completados / listaHabitos.length) * 100),
  };
}
