import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: c.card,
      borderRadius: 16,
      padding: 24,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    badgeRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
      gap: 8,
    },
    badgeDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#F97316",
    },
    label: {
      color: "#F97316",
      fontSize: 10,
      fontWeight: "800",
      letterSpacing: 1.5,
      textTransform: "uppercase",
    },
    signal: {
      color: c.text,
      fontSize: 40,
      fontWeight: "700",
      lineHeight: 50,
      marginBottom: 12,
    },
    description: {
      color: c.textSecondary,
      fontSize: 13,
      lineHeight: 20,
      marginBottom: 20,
    },
    confidenceRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginBottom: 20,
    },
    confidenceLabel: {
      color: c.textMuted,
      fontSize: 10,
      fontWeight: "600",
      letterSpacing: 0.5,
      textTransform: "uppercase",
    },
    confidenceBar: {
      flex: 1,
      height: 6,
      backgroundColor: c.progressTrack,
      borderRadius: 3,
      overflow: "hidden",
    },
    confidenceFill: {
      height: "100%",
      backgroundColor: c.primary,
      borderRadius: 3,
    },
    confidenceValue: { color: c.primaryLight, fontSize: 12, fontWeight: "700" },
    buttonContainer: { flexDirection: "row", gap: 12 },
    primaryButton: {
      backgroundColor: c.primary,
      paddingHorizontal: 18,
      paddingVertical: 10,
      borderRadius: 8,
    },
    primaryText: { color: "#FFFFFF", fontWeight: "600", fontSize: 13 },
    secondaryButton: {
      backgroundColor: "transparent",
      paddingHorizontal: 18,
      paddingVertical: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    secondaryText: { color: c.text, fontWeight: "600", fontSize: 13 },
  });
