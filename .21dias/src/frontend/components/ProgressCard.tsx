import { View } from "react-native";
import { useHabitos } from "../contexts/AppContext";
import { listaHabitos } from "../../backend/habitos";
import { ThemedText } from "./ThemedText";
import { coloresTema, paleta } from "../styles/tema";
import { estilosTarjetaProgreso } from "../styles/tema";

export function ProgressCard() {
  const { porcentajeCompletado, habitosCompletados, modoOscuro } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return (
    <View style={[estilosTarjetaProgreso.contenedor, { backgroundColor: modoOscuro ? colores.superficie : "#EDE9FE" }]}>
      <View style={estilosTarjetaProgreso.encabezado}>
        <View><ThemedText type="subtitle">Progreso de hoy</ThemedText><ThemedText type="muted">{habitosCompletados} de {listaHabitos.length} hábitos completados</ThemedText></View>
        <ThemedText type="title">{porcentajeCompletado}%</ThemedText>
      </View>
      <View style={[estilosTarjetaProgreso.barra, { backgroundColor: modoOscuro ? colores.borde : "#DDD6FE" }]}>
        <View style={[estilosTarjetaProgreso.relleno, { width: `${porcentajeCompletado}%`, backgroundColor: paleta.violeta }]} />
      </View>
    </View>
  );
}
