import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Habit } from "../types/habits";
import { useHabits } from "../contexts/AppContext";
import { ThemedText } from "./ThemedText";

interface HabitCardProps {
  habit: Habit;
  completed: boolean;
  onToggle: () => void;
}

export function HabitCard({ habit, completed, onToggle }: HabitCardProps) {
  const { isDark } = useHabits();
  return (
    <Pressable onPress={onToggle} accessibilityRole="checkbox" accessibilityState={{ checked: completed }}
      style={{ flexDirection: "row", alignItems: "center", borderRadius: 18, padding: 16, marginBottom: 12,
        backgroundColor: isDark ? "#1F2937" : "#FFFFFF", borderWidth: 1, borderColor: completed ? habit.color : isDark ? "#374151" : "#E2E8F0" }}>
      <View style={{ width: 48, height: 48, borderRadius: 14, alignItems: "center", justifyContent: "center", backgroundColor: `${habit.color}20` }}>
        <Ionicons name={habit.icon} size={24} color={habit.color} />
      </View>
      <View style={{ flex: 1, marginHorizontal: 12 }}>
        <ThemedText type="subtitle">{habit.title}</ThemedText>
        <ThemedText type="muted">{habit.description}</ThemedText>
      </View>
      <View style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: completed ? habit.color : "#94A3B8",
        backgroundColor: completed ? habit.color : "transparent", alignItems: "center", justifyContent: "center" }}>
        {completed && <Ionicons name="checkmark" size={18} color="#FFFFFF" />}
      </View>
    </Pressable>
  );
}
