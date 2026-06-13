import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 16,
      padding: 28,
      minHeight: 260,
      backgroundColor: c.strategyBg,
    },
    label: {
      color: c.strategyLabel,
      fontSize: 11,
      fontWeight: "700",
      letterSpacing: 1,
      marginBottom: 18,
      backgroundColor: "rgba(37,99,235,0.3)",
      alignSelf: "flex-start",
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: 6,
      overflow: "hidden",
    },
    title: {
      color: c.strategyText,
      fontSize: 28,
      fontWeight: "700",
      lineHeight: 38,
      marginBottom: 16,
    },
    description: {
      color: c.strategyDesc,
      fontSize: 15,
      lineHeight: 24,
      marginBottom: 28,
    },
    buttonContainer: { flexDirection: "row", gap: 12 },
    primaryButton: {
      backgroundColor: c.strategyBtnBg,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 10,
    },
    primaryText: { color: c.strategyBtnText, fontWeight: "700", fontSize: 14 },
    secondaryButton: {
      backgroundColor: c.strategySecBg,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.2)",
    },
    secondaryText: {
      color: c.strategySecText,
      fontWeight: "600",
      fontSize: 14,
    },
  });
