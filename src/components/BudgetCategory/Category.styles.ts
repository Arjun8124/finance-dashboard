import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: {
      width: isMobile ? "100%" : "48%", // 100% width on mobile, 48% on desktop for grid layout
      backgroundColor: c.card,
      borderRadius: 16,
      padding: isMobile ? 16 : 24,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 28,
    },
    title: { color: c.text, fontSize: 16, fontWeight: "600" },
    iconWrapper: {
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: c.surfaceHover,
      justifyContent: "center",
      alignItems: "center",
    },
    icon: { color: c.text, fontSize: 14 },
    amounts: { marginBottom: 12 },
    spent: { color: c.text, fontSize: 24, fontWeight: "700" },
    limit: { color: c.textSecondary, fontSize: 13, marginTop: 4 },
    progressContainer: {
      height: 6,
      backgroundColor: c.progressTrack,
      borderRadius: 3,
      marginBottom: 16,
    },
    progressFill: { height: "100%", borderRadius: 3 },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 16,
      borderTopWidth: 1,
      borderTopColor: c.divider,
    },
    status: { fontSize: 12, fontWeight: "700", letterSpacing: 1 },
    percentage: { color: c.textSecondary, fontSize: 13, fontWeight: "600" },
  });
