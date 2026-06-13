import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { flex: 1, flexDirection: "row", backgroundColor: c.background },
    content: { flex: 1, padding: 24, gap: 24 },
    heading: { color: c.text, fontSize: 42, fontWeight: "700" },
    period: { color: c.textSecondary, fontSize: 16 },
    overviewRow: { flexDirection: "row", gap: 20 },
    rightCards: { flex: 1, gap: 20 },
    mainRow: { flexDirection: "row", gap: 24 },
    leftSection: { flex: 2 },
    rightSection: { flex: 1, gap: 24 },
    sectionTitle: {
      color: c.text,
      fontSize: 28,
      fontWeight: "700",
      marginBottom: 24,
    },
    grid: { flexDirection: "row", flexWrap: "wrap", gap: 20 },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 20,
      marginTop: 28,
      borderTopWidth: 1,
      borderTopColor: c.divider,
    },
    footerText: { color: c.textMuted, fontSize: 12 },
    footerLinks: { flexDirection: "row", gap: 24 },
    footerLink: { color: c.textMuted, fontSize: 12 },
  });
