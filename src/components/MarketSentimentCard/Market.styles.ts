import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: c.card,
      borderRadius: 16,
      padding: 24,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    sectionLabel: {
      color: c.textSecondary,
      fontSize: 10,
      fontWeight: "700",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 16,
    },
    title: { color: c.text, fontSize: 22, fontWeight: "700", marginBottom: 4 },
    overall: {
      color: c.success,
      fontSize: 28,
      fontWeight: "800",
      marginBottom: 4,
      textAlign: "center",
    },
    score: {
      color: c.textMuted,
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: c.divider,
    },
    label: { color: c.textSecondary, fontSize: 13 },
    value: { fontSize: 13, fontWeight: "600" },
  });
