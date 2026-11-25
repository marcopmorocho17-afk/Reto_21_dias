import { ScrollView, View, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "../../frontend/components/ThemedView";
import { ThemedText } from "../../frontend/components/ThemedText";
import { MenuItem } from "../../frontend/components/MenuItem";
import { useHabitos } from "../../frontend/contexts/AppContext";
import { coloresTema, estilosPantallas, paleta } from "../../frontend/styles/tema";

export default function ProfileScreen() {
  const { modoOscuro, alternarTema, reiniciarProgreso, diaActual } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return (
    <ThemedView style={estilosPantallas.raiz}>
      <ScrollView contentContainerStyle={estilosPantallas.scroll}>
        <View style={estilosPantallas.perfilCentro}>
          <View style={[estilosPantallas.avatar, { backgroundColor: paleta.violeta }]}>
            <Ionicons name="person" size={44} color={paleta.blanco} />
          </View>
          <ThemedText type="title" style={estilosPantallas.nombrePerfil}>Mi perfil</ThemedText>
          <ThemedText type="muted">Día {diaActual} del reto</ThemedText>
        </View>
        <View style={[estilosPantallas.panelPerfil, { backgroundColor: colores.superficie }]}>
          <MenuItem icon="moon" label="Modo oscuro" rightLabel={modoOscuro ? "Activo" : "Inactivo"} onPress={alternarTema} />
          <View style={estilosPantallas.interruptor}><Switch value={modoOscuro} onValueChange={alternarTema} trackColor={{ false: paleta.textoTenue, true: paleta.violetaClaro }} /></View>
          <MenuItem icon="refresh" label="Reiniciar hábitos" onPress={reiniciarProgreso} />
          <MenuItem icon="information-circle" label="Acerca del reto" onPress={() => {}} />
        </View>
      </ScrollView>
    </ThemedView>
  );
}
