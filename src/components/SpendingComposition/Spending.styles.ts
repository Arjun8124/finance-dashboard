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
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
    },
    title: { color: c.text, fontSize: isMobile ? 20 : 24, fontWeight: "700" },
    viewAll: { color: c.primaryLight, fontSize: 14 },
    itemContainer: { marginBottom: 24 },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    category: { color: c.text },
    percentage: { color: c.text, fontWeight: "600" },
    progressTrack: {
      height: 10,
      backgroundColor: c.progressTrack,
      borderRadius: 999,
    },
    progressFill: { height: "100%", borderRadius: 999 },
    noteCard: {
      marginTop: 16,
      padding: 16,
      backgroundColor: c.surfaceHover,
      borderRadius: 12,
    },
    noteLabel: { color: c.textMuted, fontSize: 12, marginBottom: 8 },
    noteText: { color: c.text, lineHeight: 22 },
  });
