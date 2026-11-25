import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Habito as Habit } from "../../backend/habitos";
import { useHabitos } from "../contexts/AppContext";
import { ThemedText } from "./ThemedText";
import { coloresTema, paleta } from "../styles/tema";
import { estilosTarjetaHabito } from "../styles/tema";

interface HabitCardProps {
  habit: Habit;
  completed: boolean;
  onToggle: () => void;
}

export function HabitCard({ habit, completed, onToggle }: HabitCardProps) {
  const { modoOscuro } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return (
    <Pressable onPress={onToggle} accessibilityRole="checkbox" accessibilityState={{ checked: completed }}
      style={[estilosTarjetaHabito.tarjeta, {
        backgroundColor: colores.superficie,
        borderWidth: 1,
        borderColor: completed ? habit.color : colores.borde,
      }]}>
      <View style={[estilosTarjetaHabito.iconoContenedor, { backgroundColor: `${habit.color}20` }]}>
        <Ionicons name={habit.icon} size={24} color={habit.color} />
      </View>
      <View style={estilosTarjetaHabito.contenido}>
        <ThemedText type="subtitle">{habit.title}</ThemedText>
        <ThemedText type="muted">{habit.description}</ThemedText>
      </View>
      <View style={[estilosTarjetaHabito.indicador, {
        borderColor: completed ? habit.color : colores.textoTenue,
        backgroundColor: completed ? habit.color : "transparent",
      }]}>
        {completed && <Ionicons name="checkmark" size={18} color={paleta.blanco} />}
      </View>
    </Pressable>
  );
}
