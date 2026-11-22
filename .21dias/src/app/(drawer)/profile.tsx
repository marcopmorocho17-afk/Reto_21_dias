import { ScrollView, View, Switch, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import { MenuItem } from "../../components/MenuItem";
import { useHabits } from "../../contexts/AppContext";

export default function ProfileScreen() {
  const { isDark, toggleTheme, resetProgress, day } = useHabits();
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={{ alignItems: "center", marginVertical: 18 }}>
          <View style={{ width: 88, height: 88, borderRadius: 44, alignItems: "center", justifyContent: "center", backgroundColor: "#7C3AED" }}>
            <Ionicons name="person" size={44} color="#FFFFFF" />
          </View>
          <ThemedText type="title" style={{ marginTop: 10 }}>Mi perfil</ThemedText>
          <ThemedText type="muted">Día {day} del reto</ThemedText>
        </View>
        <View style={{ borderRadius: 18, paddingHorizontal: 16, backgroundColor: isDark ? "#1F2937" : "#FFFFFF" }}>
          <MenuItem icon="moon" label="Modo oscuro" rightLabel={isDark ? "Activo" : "Inactivo"} onPress={toggleTheme} />
          <View style={{ position: "absolute", right: 44, top: 17 }}><Switch value={isDark} onValueChange={toggleTheme} trackColor={{ false: "#CBD5E1", true: "#A78BFA" }} /></View>
          <MenuItem icon="refresh" label="Reiniciar hábitos" onPress={resetProgress} />
          <MenuItem icon="information-circle" label="Acerca del reto" onPress={() => {}} />
        </View>
        <Pressable onPress={toggleTheme} style={{ marginTop: 20, alignItems: "center", borderRadius: 16, paddingVertical: 14, backgroundColor: "#7C3AED" }}>
          <ThemedText type="subtitle" style={{ color: "#FFFFFF" }}>Cambiar tema</ThemedText>
        </Pressable>
      </ScrollView>
    </ThemedView>
  );
}
