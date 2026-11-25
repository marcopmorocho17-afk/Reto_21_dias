import { ScrollView, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "../../../frontend/components/ThemedView";
import { ThemedText } from "../../../frontend/components/ThemedText";
import { ProgressCard } from "../../../frontend/components/ProgressCard";
import { HabitCard } from "../../../frontend/components/HabitCard";
import { listaHabitos } from "../../../backend/habitos";
import { useHabitos } from "../../../frontend/contexts/AppContext";
import { coloresTema, estilosPantallas, opcionesNavegacion } from "../../../frontend/styles/tema";

export default function TodayScreen() {
  const { diaActual, cambiarDia, progresoDiario, alternarHabito, modoOscuro } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return (
    <ThemedView style={estilosPantallas.raiz} className="flex-1">
      <ScrollView contentContainerStyle={estilosPantallas.scrollConFondo}>
        <View style={estilosPantallas.encabezadoHoy}>
          <View>
            <ThemedText type="muted">Reto de 21 días</ThemedText>
            <ThemedText type="title">¡Buenos días!</ThemedText>
          </View>
          <View style={[estilosPantallas.selectorDia, { backgroundColor: colores.superficie }]}>
            <Pressable hitSlop={8} onPress={() => cambiarDia(Math.max(1, diaActual - 1))}><Ionicons name="chevron-back" size={20} color={opcionesNavegacion.violetaActiva} /></Pressable>
            <ThemedText type="subtitle" style={estilosPantallas.textoDia}>Día {diaActual}</ThemedText>
            <Pressable hitSlop={8} onPress={() => cambiarDia(Math.min(21, diaActual + 1))}><Ionicons name="chevron-forward" size={20} color={opcionesNavegacion.violetaActiva} /></Pressable>
          </View>
        </View>
        <ProgressCard />
        <ThemedText type="subtitle" style={estilosPantallas.tituloHabitos}>Mis hábitos de hoy</ThemedText>
        {listaHabitos.map((habit) => (
          <HabitCard key={habit.id} habit={habit} completed={progresoDiario[habit.id]} onToggle={() => alternarHabito(habit.id)} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}
