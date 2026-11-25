import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useHabitos } from "../../frontend/contexts/AppContext";
import { coloresTema, paleta, opcionesNavegacion } from "../../frontend/styles/tema";

export default function DrawerLayout() {
  const { modoOscuro } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return (
    <Drawer screenOptions={{
      headerShown: true,
      headerTintColor: modoOscuro ? colores.blanco : paleta.indigoOscuro,
      headerStyle: { backgroundColor: colores.fondo },
      drawerStyle: { backgroundColor: colores.fondo, width: opcionesNavegacion.anchoDrawer },
      drawerActiveTintColor: opcionesNavegacion.violetaActiva,
      drawerInactiveTintColor: colores.textoSecundario,
    }}>
      <Drawer.Screen name="(tabs)" options={{ title: "Inicio", drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={typeof color === "string" ? color : opcionesNavegacion.violetaActiva} /> }} />
      <Drawer.Screen name="profile" options={{ title: "Perfil y ajustes", drawerIcon: ({ color, size }) => <Ionicons name="person" size={size} color={typeof color === "string" ? color : opcionesNavegacion.violetaActiva} /> }} />
    </Drawer>
  );
}
