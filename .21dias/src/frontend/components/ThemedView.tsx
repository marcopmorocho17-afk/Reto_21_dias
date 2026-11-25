import type { PropsWithChildren } from "react";
import { View, type ViewProps } from "react-native";
import { useHabitos } from "../contexts/AppContext";
import { coloresTema } from "../styles/tema";

export function ThemedView({ children, style, ...props }: PropsWithChildren<ViewProps>) {
  const { modoOscuro } = useHabitos();
  const colores = coloresTema(modoOscuro);
  return <View {...props} style={[{ backgroundColor: colores.fondo }, style]}>{children}</View>;
}
