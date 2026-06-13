import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { flexDirection: "row", backgroundColor: c.card, borderRadius: 12, padding: 16, gap: 14, alignItems: "flex-start", borderWidth: 1, borderColor: c.cardBorder },
    iconCircle: { width: 36, height: 36, borderRadius: 18, justifyContent: "center", alignItems: "center" },
    iconDot: { width: 14, height: 14, borderRadius: 7 },
    content: { flex: 1 },
    title: { color: c.text, fontSize: 14, fontWeight: "600", marginBottom: 4 },
    description: { color: c.textSecondary, fontSize: 12, lineHeight: 18 },
  });
