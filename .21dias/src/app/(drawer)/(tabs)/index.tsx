import { ScrollView, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "../../../components/ThemedView";
import { ThemedText } from "../../../components/ThemedText";
import { ProgressCard } from "../../../components/ProgressCard";
import { HabitCard } from "../../../components/HabitCard";
import { habits } from "../../../data/habits";
import { useHabits } from "../../../contexts/AppContext";

export default function TodayScreen() {
  const { day, setDay, progress, toggleHabit, isDark } = useHabits();
  return (
    <ThemedView style={{ flex: 1 }} className="flex-1">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 36 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <View>
            <ThemedText type="muted">Reto de 21 días</ThemedText>
            <ThemedText type="title">¡Buenos días!</ThemedText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: isDark ? "#1F2937" : "#FFFFFF", borderRadius: 14, padding: 6 }}>
            <Pressable hitSlop={8} onPress={() => setDay(Math.max(1, day - 1))}><Ionicons name="chevron-back" size={20} color="#7C3AED" /></Pressable>
            <ThemedText type="subtitle" style={{ marginHorizontal: 8 }}>Día {day}</ThemedText>
            <Pressable hitSlop={8} onPress={() => setDay(Math.min(21, day + 1))}><Ionicons name="chevron-forward" size={20} color="#7C3AED" /></Pressable>
          </View>
        </View>
        <ProgressCard />
        <ThemedText type="subtitle" style={{ marginTop: 24, marginBottom: 12 }}>Mis hábitos de hoy</ThemedText>
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} completed={progress[habit.id]} onToggle={() => toggleHabit(habit.id)} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}
