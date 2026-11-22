import { ScrollView, View } from "react-native";
import { ThemedView } from "../../../components/ThemedView";
import { ThemedText } from "../../../components/ThemedText";
import { HabitCard } from "../../../components/HabitCard";
import { habits } from "../../../data/habits";
import { useHabits } from "../../../contexts/AppContext";

export default function HabitsScreen() {
  const { progress, toggleHabit } = useHabits();
  return (
    <ThemedView style={{ flex: 1 }} className="flex-1">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <ThemedText type="muted">Administra tu rutina</ThemedText>
        <ThemedText type="title" style={{ marginBottom: 20 }}>Hábitos</ThemedText>
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} completed={progress[habit.id]} onToggle={() => toggleHabit(habit.id)} />
        ))}
        <View style={{ marginTop: 8, padding: 16, borderRadius: 16, backgroundColor: "#ECFDF5" }}>
          <ThemedText type="subtitle" style={{ color: "#166534" }}>Consejo</ThemedText>
          <ThemedText type="body" style={{ color: "#15803D" }}>La constancia importa más que la perfección. Marca cada logro pequeño.</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
