import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useHabits } from "../contexts/AppContext";
import { ThemedText } from "./ThemedText";

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  rightLabel?: string;
}

export function MenuItem({ icon, label, onPress, rightLabel }: MenuItemProps) {
  const { isDark } = useHabits();
  return (
    <Pressable onPress={onPress} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: isDark ? "#374151" : "#E2E8F0" }}>
      <View style={{ width: 38, height: 38, borderRadius: 12, alignItems: "center", justifyContent: "center", backgroundColor: isDark ? "#374151" : "#EEF2FF" }}>
        <Ionicons name={icon} size={20} color={isDark ? "#C4B5FD" : "#6366F1"} />
      </View>
      <ThemedText type="subtitle" style={{ flex: 1, marginHorizontal: 12 }}>{label}</ThemedText>
      {rightLabel && <ThemedText type="muted" style={{ marginRight: 8 }}>{rightLabel}</ThemedText>}
      <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
    </Pressable>
  );
}
