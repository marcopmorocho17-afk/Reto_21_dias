import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useHabitos } from "../../../frontend/contexts/AppContext";
import { coloresTema, opcionesNavegacion } from "../../../frontend/styles/tema";

export default function TabsLayout() {
  const { modoOscuro } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: opcionesNavegacion.violetaActiva,
      tabBarInactiveTintColor: colores.textoTenue,
      tabBarStyle: { backgroundColor: colores.fondo, borderTopColor: colores.borde, height: opcionesNavegacion.alturaTabs, paddingBottom: 8, paddingTop: 6 },
    }}>
      <Tabs.Screen name="index" options={{ title: "Hoy", tabBarIcon: ({ color, size }) => <Ionicons name="today" size={size} color={typeof color === "string" ? color : opcionesNavegacion.violetaActiva} /> }} />
      <Tabs.Screen name="habits" options={{ title: "Hábitos", tabBarIcon: ({ color, size }) => <Ionicons name="checkbox" size={size} color={typeof color === "string" ? color : opcionesNavegacion.violetaActiva} /> }} />
      <Tabs.Screen name="progress" options={{ title: "Progreso", tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={typeof color === "string" ? color : opcionesNavegacion.violetaActiva} /> }} />
    </Tabs>
  );
}
