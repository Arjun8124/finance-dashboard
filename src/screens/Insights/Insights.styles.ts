import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0B1220",
  },
  content: {
    padding: 28,
    paddingBottom: 0,
    gap: 20,
  },
  header: {
    color: "#60A5FA",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "700",
    marginTop: 4,
  },
  subtitle: {
    color: "#94A3B8",
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 600,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    gap: 20,
    alignItems: "stretch",
  },
  middleRow: {
    flexDirection: "row",
    gap: 20,
  },
  cashFlowSection: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  cashFlowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  cashFlowLabel: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  cashFlowSubtitle: {
    color: "#64748B",
    fontSize: 13,
  },
  cashFlowLink: {
    color: "#60A5FA",
    fontSize: 13,
    fontWeight: "600",
  },
  cashFlowCards: {
    flexDirection: "row",
    gap: 16,
  },
  insightCard: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  insightIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
  },
  insightIcon: {
    fontSize: 16,
  },
  insightTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },
  insightDesc: {
    color: "#94A3B8",
    fontSize: 12,
    lineHeight: 18,
  },
  insightDivider: {
    width: 1,
    backgroundColor: "#1E293B",
    alignSelf: "stretch",
    marginHorizontal: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 28,
    borderTopWidth: 1,
    borderTopColor: "#1E293B",
  },
  footerText: {
    color: "#64748B",
    fontSize: 12,
  },
  footerLinks: {
    flexDirection: "row",
    gap: 24,
  },
  footerLink: {
    color: "#64748B",
    fontSize: 12,
  },
});
