import "react-native-gesture-handler";
import "../../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppProvider, useHabits } from "../contexts/AppContext";

function Navigation() {
  const { isDark } = useHabits();
  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default function RootLayout() {
  return <AppProvider><Navigation /></AppProvider>;
}
