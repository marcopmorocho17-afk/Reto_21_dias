import type { PropsWithChildren } from "react";
import { View, type ViewProps } from "react-native";
import { useHabits } from "../contexts/AppContext";

export function ThemedView({ children, style, ...props }: PropsWithChildren<ViewProps>) {
  const { isDark } = useHabits();
  return <View {...props} style={[{ backgroundColor: isDark ? "#111827" : "#F8FAFC" }, style]}>{children}</View>;
}
