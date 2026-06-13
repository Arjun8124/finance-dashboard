import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { flex: 1, flexDirection: "row", backgroundColor: c.background },
    content: { padding: 28, paddingBottom: 0, gap: 20 },
    header: { color: c.primaryLight, fontSize: 11, fontWeight: "700", letterSpacing: 2, textTransform: "uppercase" },
    title: { color: c.text, fontSize: 36, fontWeight: "700", marginTop: 4 },
    subtitle: { color: c.textSecondary, fontSize: 14, lineHeight: 22, maxWidth: 600, marginBottom: 8 },
    row: { flexDirection: "row", gap: 20, alignItems: "stretch" },
    middleRow: { flexDirection: "row", gap: 20 },
    cashFlowSection: { backgroundColor: c.card, borderRadius: 16, padding: 24, borderWidth: 1, borderColor: c.cardBorder },
    cashFlowHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 },
    cashFlowLabel: { color: c.textSecondary, fontSize: 10, fontWeight: "700", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 },
    cashFlowSubtitle: { color: c.textMuted, fontSize: 13 },
    cashFlowLink: { color: c.primaryLight, fontSize: 13, fontWeight: "600" },
    cashFlowCards: { flexDirection: "row", gap: 16 },
    insightCard: { flex: 1, flexDirection: "row", gap: 12, alignItems: "flex-start" },
    insightIconCircle: { width: 38, height: 38, borderRadius: 19, backgroundColor: c.surfaceHover, justifyContent: "center", alignItems: "center" },
    insightIcon: { fontSize: 16 },
    insightTitle: { color: c.text, fontSize: 14, fontWeight: "700", marginBottom: 4 },
    insightDesc: { color: c.textSecondary, fontSize: 12, lineHeight: 18 },
    insightDivider: { width: 1, backgroundColor: c.divider, alignSelf: "stretch", marginHorizontal: 4 },
    footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 20, marginTop: 28, borderTopWidth: 1, borderTopColor: c.divider },
    footerText: { color: c.textMuted, fontSize: 12 },
    footerLinks: { flexDirection: "row", gap: 24 },
    footerLink: { color: c.textMuted, fontSize: 12 },
  });
