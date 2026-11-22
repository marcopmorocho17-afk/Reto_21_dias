import { ScrollView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "../../../components/ThemedView";
import { ThemedText } from "../../../components/ThemedText";
import { ProgressCard } from "../../../components/ProgressCard";
import { useHabits } from "../../../contexts/AppContext";

export default function ProgressScreen() {
  const { day, isDark, percentage } = useHabits();
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <ThemedText type="muted">Tu evolución</ThemedText>
        <ThemedText type="title" style={{ marginBottom: 20 }}>Progreso</ThemedText>
        <ProgressCard />
        <View style={{ marginTop: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <View key={item} style={{ width: "13%", aspectRatio: 1, borderRadius: 12, marginBottom: 10, alignItems: "center", justifyContent: "center",
              backgroundColor: item <= day && item <= 7 ? "#7C3AED" : isDark ? "#374151" : "#E2E8F0" }}>
              {item <= day ? <Ionicons name="checkmark" size={18} color="#FFFFFF" /> : <ThemedText type="muted">{item}</ThemedText>}
            </View>
          ))}
        </View>
        <View style={{ marginTop: 12, borderRadius: 18, padding: 18, backgroundColor: isDark ? "#1F2937" : "#FFFFFF", borderWidth: 1, borderColor: isDark ? "#374151" : "#E2E8F0" }}>
          <ThemedText type="subtitle">Resumen actual</ThemedText>
          <ThemedText type="body" style={{ marginTop: 6 }}>Día {day} de 21 · {percentage}% completado hoy</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
