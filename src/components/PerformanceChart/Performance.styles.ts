import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: c.card,
      borderRadius: 16,
      padding: 24,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 20,
    },
    sectionLabel: {
      color: c.textSecondary,
      fontSize: 10,
      fontWeight: "700",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      marginBottom: 8,
    },
    amountRow: { flexDirection: "row", alignItems: "baseline", gap: 12 },
    amount: { color: c.text, fontSize: 32, fontWeight: "700" },
    change: { color: c.success, fontSize: 14, fontWeight: "600" },
    periodRow: { flexDirection: "row", gap: 4 },
    periodBtn: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 6,
      backgroundColor: c.surfaceHover,
    },
    periodBtnActive: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 6,
      backgroundColor: c.primary,
    },
    periodText: { color: c.textSecondary, fontSize: 11, fontWeight: "600" },
    periodTextActive: { color: "#FFFFFF", fontSize: 11, fontWeight: "600" },
  });
