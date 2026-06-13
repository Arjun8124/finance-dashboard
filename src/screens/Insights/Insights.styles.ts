import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: { flex: 1, flexDirection: "row", backgroundColor: c.background },
    content: { padding: isMobile ? 16 : 28, paddingBottom: 0, gap: 20 },
    header: { color: c.primaryLight, fontSize: 11, fontWeight: "700", letterSpacing: 2, textTransform: "uppercase" },
    title: { color: c.text, fontSize: isMobile ? 28 : 36, fontWeight: "700", marginTop: 4 },
    subtitle: { color: c.textSecondary, fontSize: 14, lineHeight: 22, maxWidth: 600, marginBottom: 8 },
    row: { flexDirection: isMobile ? "column" : "row", gap: 20, alignItems: "stretch" },
    middleRow: { flexDirection: isMobile ? "column" : "row", gap: 20 },
    middleLeft: { flex: isMobile ? undefined : 1 },
    middleRight: { width: isMobile ? "100%" : 280, gap: 16 },
    middleRightNested: { flexDirection: isMobile ? "column" : "row", gap: 12 },
    cashFlowSection: { backgroundColor: c.card, borderRadius: 16, padding: 24, borderWidth: 1, borderColor: c.cardBorder },
    cashFlowHeader: { flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-start", marginBottom: 20, gap: isMobile ? 12 : 0 },
    cashFlowLabel: { color: c.textSecondary, fontSize: 10, fontWeight: "700", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 },
    cashFlowSubtitle: { color: c.textMuted, fontSize: 13 },
    cashFlowLink: { color: c.primaryLight, fontSize: 13, fontWeight: "600" },
    cashFlowCards: { flexDirection: isMobile ? "column" : "row", gap: 16 },
    insightItem: { flex: 1, flexDirection: isMobile ? "column" : "row" },
    insightCard: { flex: 1, flexDirection: "row", gap: 12, alignItems: "flex-start" },
    insightIconCircle: { width: 38, height: 38, borderRadius: 19, backgroundColor: c.surfaceHover, justifyContent: "center", alignItems: "center" },
    insightIcon: { fontSize: 16 },
    insightTitle: { color: c.text, fontSize: 14, fontWeight: "700", marginBottom: 4 },
    insightDesc: { color: c.textSecondary, fontSize: 12, lineHeight: 18 },
    insightDivider: { width: isMobile ? "100%" : 1, height: isMobile ? 1 : "auto", backgroundColor: c.divider, marginVertical: isMobile ? 16 : 0, marginHorizontal: isMobile ? 0 : 4 },
    footer: { flexDirection: isMobile ? "column" : "row", justifyContent: isMobile ? "center" : "space-between", alignItems: "center", paddingVertical: 20, marginTop: 28, borderTopWidth: 1, borderTopColor: c.divider, gap: isMobile ? 16 : 0 },
    footerText: { color: c.textMuted, fontSize: 12, textAlign: "center" },
    footerLinks: { flexDirection: "row", gap: 24 },
    footerLink: { color: c.textMuted, fontSize: 12 },
  });
