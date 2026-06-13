import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: c.card,
      borderRadius: 16,
      padding: isMobile ? 16 : 22,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    title: {
      color: c.textSecondary,
      fontSize: 11,
      fontWeight: "600",
      letterSpacing: 0.5,
      textTransform: "uppercase",
      marginBottom: 14,
    },
    value: {
      color: c.text,
      fontSize: isMobile ? 28 : 34,
      fontWeight: "700",
      marginBottom: 10,
    },
    change: { fontSize: 13, fontWeight: "500" },
  });
