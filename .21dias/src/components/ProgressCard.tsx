import { View } from "react-native";
import { useHabits } from "../contexts/AppContext";
import { ThemedText } from "./ThemedText";

export function ProgressCard() {
  const { percentage, completed, isDark } = useHabits();
  return (
    <View style={{ borderRadius: 22, padding: 20, backgroundColor: isDark ? "#312E81" : "#EDE9FE" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View><ThemedText type="subtitle">Progreso de hoy</ThemedText><ThemedText type="muted">{completed} de 4 hábitos completados</ThemedText></View>
        <ThemedText type="title">{percentage}%</ThemedText>
      </View>
      <View style={{ height: 10, borderRadius: 5, marginTop: 16, backgroundColor: isDark ? "#4C1D95" : "#DDD6FE", overflow: "hidden" }}>
        <View style={{ width: `${percentage}%`, height: "100%", borderRadius: 5, backgroundColor: "#7C3AED" }} />
      </View>
    </View>
  );
}
