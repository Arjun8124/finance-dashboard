import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: { flex: 1, flexDirection: "row", backgroundColor: c.background },
    content: { flex: 1, padding: isMobile ? 16 : 24, gap: isMobile ? 16 : 24 },
    heading: { color: c.text, fontSize: isMobile ? 32 : 42, fontWeight: "700" },
    period: { color: c.textSecondary, fontSize: 16 },
    overviewRow: { flexDirection: isMobile ? "column" : "row", gap: 20 },
    rightCards: { flex: 1, gap: 20 },
    mainRow: { flexDirection: isMobile ? "column" : "row", gap: 24 },
    leftSection: { flex: isMobile ? 1 : 2 },
    rightSection: { flex: 1, gap: 24 },
    sectionTitle: {
      color: c.text,
      fontSize: 28,
      fontWeight: "700",
      marginBottom: 24,
    },
    grid: { flexDirection: isMobile ? "column" : "row", flexWrap: "wrap", gap: 20 },
    footer: {
      flexDirection: isMobile ? "column" : "row",
      justifyContent: isMobile ? "center" : "space-between",
      alignItems: "center",
      paddingVertical: 20,
      marginTop: 28,
      borderTopWidth: 1,
      borderTopColor: c.divider,
      gap: isMobile ? 16 : 0,
    },
    footerText: { color: c.textMuted, fontSize: 12, textAlign: "center" },
    footerLinks: { flexDirection: "row", gap: 24 },
    footerLink: { color: c.textMuted, fontSize: 12 },
  });
