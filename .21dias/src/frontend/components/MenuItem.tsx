import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useHabitos } from "../contexts/AppContext";
import { ThemedText } from "./ThemedText";
import { coloresTema } from "../styles/tema";
import { estilosElementoMenu } from "../styles/tema";
import { paleta } from "../styles/tema";

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  rightLabel?: string;
}

export function MenuItem({ icon, label, onPress, rightLabel }: MenuItemProps) {
  const { modoOscuro } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return (
    <Pressable onPress={onPress} style={[estilosElementoMenu.contenedor, { borderBottomColor: colores.borde }]}>
      <View style={[estilosElementoMenu.iconoContenedor, { backgroundColor: modoOscuro ? colores.borde : "#EEF2FF" }]}>
        <Ionicons name={icon} size={20} color={modoOscuro ? paleta.violetaTexto : paleta.indigo} />
      </View>
      <ThemedText type="subtitle" style={estilosElementoMenu.etiqueta}>{label}</ThemedText>
      {rightLabel && <ThemedText type="muted" style={estilosElementoMenu.etiquetaDerecha}>{rightLabel}</ThemedText>}
      <Ionicons name="chevron-forward" size={18} color={paleta.textoTenue} />
    </Pressable>
  );
}
