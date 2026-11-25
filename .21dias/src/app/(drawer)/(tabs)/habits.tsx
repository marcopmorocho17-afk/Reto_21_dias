import { ScrollView, View } from "react-native";
import { ThemedView } from "../../../frontend/components/ThemedView";
import { ThemedText } from "../../../frontend/components/ThemedText";
import { HabitCard } from "../../../frontend/components/HabitCard";
import { listaHabitos } from "../../../backend/habitos";
import { useHabitos } from "../../../frontend/contexts/AppContext";
import { estilosPantallas } from "../../../frontend/styles/tema";

export default function HabitsScreen() {
  const { progresoDiario, alternarHabito } = useHabitos();
  return (
    <ThemedView style={estilosPantallas.raiz} className="flex-1">
      <ScrollView contentContainerStyle={estilosPantallas.scroll}>
        <ThemedText type="muted">Administra tu rutina</ThemedText>
        <ThemedText type="title" style={estilosPantallas.tituloEspaciado}>Hábitos</ThemedText>
        {listaHabitos.map((habit) => (
          <HabitCard key={habit.id} habit={habit} completed={progresoDiario[habit.id]} onToggle={() => alternarHabito(habit.id)} />
        ))}
        <View style={estilosPantallas.consejo}>
          <ThemedText type="subtitle" style={estilosPantallas.tituloConsejo}>Consejo</ThemedText>
          <ThemedText type="body" style={estilosPantallas.textoConsejo}>La constancia importa más que la perfección. Marca cada logro pequeño.</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
