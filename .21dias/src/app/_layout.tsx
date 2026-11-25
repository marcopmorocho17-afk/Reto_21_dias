import "react-native-gesture-handler";
import "../../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppProvider, useHabitos } from "../frontend/contexts/AppContext";

function Navigation() {
  const { modoOscuro } = useHabitos();
  return (
    <>
      <StatusBar style={modoOscuro ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default function RootLayout() {
  return <AppProvider><Navigation /></AppProvider>;
}
