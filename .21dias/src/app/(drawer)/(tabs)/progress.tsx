import { ScrollView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "../../../frontend/components/ThemedView";
import { ThemedText } from "../../../frontend/components/ThemedText";
import { ProgressCard } from "../../../frontend/components/ProgressCard";
import { useHabitos } from "../../../frontend/contexts/AppContext";
import { coloresTema, estilosPantallas, paleta } from "../../../frontend/styles/tema";

export default function ProgressScreen() {
  const { diaActual, modoOscuro, porcentajeCompletado } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return (
    <ThemedView style={estilosPantallas.raiz}>
      <ScrollView contentContainerStyle={estilosPantallas.scroll}>
        <ThemedText type="muted">Tu evolución</ThemedText>
        <ThemedText type="title" style={estilosPantallas.tituloEspaciado}>Progreso</ThemedText>
        <ProgressCard />
        <View style={estilosPantallas.calendario}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <View key={item} style={[estilosPantallas.diaCalendario,
              { backgroundColor: item <= diaActual && item <= 7 ? paleta.violeta : modoOscuro ? colores.borde : paleta.bordeClaro }] }>
              {item <= diaActual ? <Ionicons name="checkmark" size={18} color={paleta.blanco} /> : <ThemedText type="muted">{item}</ThemedText>}
            </View>
          ))}
        </View>
        <View style={[estilosPantallas.resumen, { backgroundColor: colores.superficie, borderColor: colores.borde }]}>
          <ThemedText type="subtitle">Resumen actual</ThemedText>
          <ThemedText type="body" style={estilosPantallas.textoResumen}>Día {diaActual} de 21 · {porcentajeCompletado}% completado hoy</ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
