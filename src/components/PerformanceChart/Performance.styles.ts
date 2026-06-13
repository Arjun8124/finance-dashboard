import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      minWidth: 0,
      backgroundColor: c.card,
      borderRadius: 16,
      padding: isMobile ? 16 : 24,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    header: {
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "flex-end",
      marginBottom: 24,
      gap: isMobile ? 12 : 0,
    },
    title: { color: c.textSecondary, fontSize: 13, fontWeight: "600", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 },
    amountRow: { flexDirection: "row", alignItems: "baseline", gap: 12 },
    amount: { color: c.text, fontSize: isMobile ? 28 : 34, fontWeight: "700" },
    change: { color: "#10B981", fontSize: 16, fontWeight: "600" },
    periodRow: { flexDirection: "row", gap: 4 },
    periodBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
    periodBtnActive: { backgroundColor: c.surfaceHover },
    periodText: { color: c.textSecondary, fontSize: 13, fontWeight: "600" },
    periodTextActive: { color: c.text },
    chartContainer: { height: isMobile ? 200 : 260, marginTop: 10 },
  });
