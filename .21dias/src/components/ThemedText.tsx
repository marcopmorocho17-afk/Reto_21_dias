import { Text, type TextProps, type TextStyle } from "react-native";
import { useHabits } from "../contexts/AppContext";

interface ThemedTextProps extends TextProps {
  type?: "title" | "subtitle" | "body" | "muted";
  style?: TextStyle;
}

export function ThemedText({ type = "body", style, ...props }: ThemedTextProps) {
  const { isDark } = useHabits();
  const colors = {
    title: isDark ? "#F8FAFC" : "#0F172A",
    subtitle: isDark ? "#E2E8F0" : "#334155",
    body: isDark ? "#CBD5E1" : "#475569",
    muted: isDark ? "#94A3B8" : "#64748B",
  };
  const sizes = { title: 28, subtitle: 18, body: 16, muted: 14 };
  return <Text {...props} style={[{ color: colors[type], fontSize: sizes[type], fontWeight: type === "title" ? "800" : type === "subtitle" ? "700" : "500" }, style]} />;
}
