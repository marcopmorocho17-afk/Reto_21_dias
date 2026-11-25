import { Text, type TextProps, type TextStyle } from "react-native";
import { useHabitos } from "../contexts/AppContext";
import { coloresTema } from "../styles/tema";

interface ThemedTextProps extends TextProps {
  type?: "title" | "subtitle" | "body" | "muted";
  style?: TextStyle;
}

export function ThemedText({ type = "body", style, ...props }: ThemedTextProps) {
  const { modoOscuro } = useHabitos();
  const colores = coloresTema(modoOscuro);
  const colors = {
    title: colores.textoPrincipal,
    subtitle: colores.textoSecundario,
    body: colores.textoSecundario,
    muted: colores.textoTenue,
  };
  const sizes = { title: 28, subtitle: 18, body: 16, muted: 14 };
  return <Text {...props} style={[{ color: colors[type], fontSize: sizes[type], fontWeight: type === "title" ? "800" : type === "subtitle" ? "700" : "500" }, style]} />;
}
