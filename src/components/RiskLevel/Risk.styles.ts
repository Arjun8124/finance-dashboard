import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: c.surfaceHover, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: c.cardBorder },
    title: { color: c.textSecondary, fontSize: 9, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 },
    level: { color: c.text, fontSize: 22, fontWeight: "800", marginBottom: 2 },
    subtitle: { color: c.textMuted, fontSize: 13 },
  });
