import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: { flex: 1, flexDirection: "row", backgroundColor: c.background },
    main: { flex: 1, minWidth: 0 },
    mainContent: { padding: isMobile ? 16 : 28, paddingBottom: 0 },
    metrics: { flexDirection: isMobile ? "column" : "row", gap: 20, marginTop: 20 },
    strategy: { flexDirection: isMobile ? "column" : "row", gap: 20, marginTop: 24 },
    alertsWrapper: { width: isMobile ? "100%" : 340, gap: 14 },
    alertsTitle: { color: c.text, fontSize: 20, fontWeight: "700", marginBottom: 2 },
    bottomSection: { flexDirection: isMobile ? "column" : "row", gap: 20, marginTop: 24 },
    spendingWrapper: { flex: 1 },
    tableWrapper: { flex: isMobile ? 1 : 1.4 },
    footer: {
      flexDirection: isMobile ? "column" : "row",
      justifyContent: isMobile ? "center" : "space-between",
      alignItems: "center",
      paddingVertical: 20,
      marginTop: 32,
      borderTopWidth: 1,
      borderTopColor: c.divider,
      gap: isMobile ? 16 : 0,
    },
    footerText: { color: c.textMuted, fontSize: 12, textAlign: "center" },
    footerLinks: { flexDirection: "row", gap: 24 },
    footerLink: { color: c.textMuted, fontSize: 12 },
  });
