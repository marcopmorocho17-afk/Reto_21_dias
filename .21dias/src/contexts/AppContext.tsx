import React, { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import { habits } from "../data/habits";
import type { DailyProgress, HabitId } from "../types/habits";

type ThemeMode = "light" | "dark";
interface AppContextValue {
  isDark: boolean;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  progress: DailyProgress;
  toggleHabit: (id: HabitId) => void;
  resetProgress: () => void;
  completed: number;
  percentage: number;
  day: number;
  setDay: (day: number) => void;
}

const AppContext = createContext<AppContextValue | null>(null);
const emptyProgress = (): DailyProgress => ({ study: false, read: false, exercise: false, water: false });

export function AppProvider({ children }: PropsWithChildren) {
  const systemTheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const [progress, setProgress] = useState<DailyProgress>(emptyProgress);
  const [day, setDay] = useState(1);

  useEffect(() => {
    setThemeMode(systemTheme === "dark" ? "dark" : "light");
  }, [systemTheme]);

  const toggleHabit = (id: HabitId) => setProgress((current) => ({ ...current, [id]: !current[id] }));
  const resetProgress = () => setProgress(emptyProgress());
  const completed = Object.values(progress).filter(Boolean).length;
  const percentage = Math.round((completed / habits.length) * 100);

  const value = useMemo<AppContextValue>(() => ({
    isDark: themeMode === "dark",
    themeMode,
    toggleTheme: () => setThemeMode((current) => current === "dark" ? "light" : "dark"),
    progress,
    toggleHabit,
    resetProgress,
    completed,
    percentage,
    day,
    setDay,
  }), [themeMode, progress, completed, percentage, day]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useHabits(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error("useHabits debe usarse dentro de AppProvider");
  return context;
}
