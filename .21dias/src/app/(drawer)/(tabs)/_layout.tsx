import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useHabits } from "../../../contexts/AppContext";

export default function TabsLayout() {
  const { isDark } = useHabits();
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#7C3AED",
      tabBarInactiveTintColor: isDark ? "#94A3B8" : "#64748B",
      tabBarStyle: { backgroundColor: isDark ? "#111827" : "#FFFFFF", borderTopColor: isDark ? "#374151" : "#E2E8F0", height: 68, paddingBottom: 8, paddingTop: 6 },
    }}>
      <Tabs.Screen name="index" options={{ title: "Hoy", tabBarIcon: ({ color, size }) => <Ionicons name="today" size={size} color={typeof color === "string" ? color : "#7C3AED"} /> }} />
      <Tabs.Screen name="habits" options={{ title: "Hábitos", tabBarIcon: ({ color, size }) => <Ionicons name="checkbox" size={size} color={typeof color === "string" ? color : "#7C3AED"} /> }} />
      <Tabs.Screen name="progress" options={{ title: "Progreso", tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={typeof color === "string" ? color : "#7C3AED"} /> }} />
    </Tabs>
  );
}
