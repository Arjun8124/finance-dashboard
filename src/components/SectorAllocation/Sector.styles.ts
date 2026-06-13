import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: c.card,
      borderRadius: 16,
      padding: 20,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    sectionLabel: {
      color: c.textSecondary,
      fontSize: 10,
      fontWeight: "700",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 18,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14,
    },
    dotLabel: { flexDirection: "row", alignItems: "center", gap: 10 },
    dot: { width: 8, height: 8, borderRadius: 4 },
    label: { color: c.text, fontSize: 13 },
    value: { color: c.text, fontSize: 13, fontWeight: "700" },
  });
