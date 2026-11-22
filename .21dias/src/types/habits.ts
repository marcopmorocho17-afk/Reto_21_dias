export type HabitId = "study" | "read" | "exercise" | "water";

export interface Habit {
  id: HabitId;
  title: string;
  description: string;
  icon: "book" | "water" | "barbell" | "school";
  color: string;
}

export type DailyProgress = Record<HabitId, boolean>;
