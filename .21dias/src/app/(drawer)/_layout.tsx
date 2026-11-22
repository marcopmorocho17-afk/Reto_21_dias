import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useHabits } from "../../contexts/AppContext";

export default function DrawerLayout() {
  const { isDark } = useHabits();
  return (
    <Drawer screenOptions={{
      headerShown: true,
      headerTintColor: isDark ? "#F8FAFC" : "#312E81",
      headerStyle: { backgroundColor: isDark ? "#111827" : "#FFFFFF" },
      drawerStyle: { backgroundColor: isDark ? "#111827" : "#FFFFFF", width: 280 },
      drawerActiveTintColor: "#7C3AED",
      drawerInactiveTintColor: isDark ? "#CBD5E1" : "#64748B",
    }}>
      <Drawer.Screen name="(tabs)" options={{ title: "Inicio", drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={typeof color === "string" ? color : "#7C3AED"} /> }} />
      <Drawer.Screen name="profile" options={{ title: "Perfil y ajustes", drawerIcon: ({ color, size }) => <Ionicons name="person" size={size} color={typeof color === "string" ? color : "#7C3AED"} /> }} />
    </Drawer>
  );
}
