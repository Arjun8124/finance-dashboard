import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: {
      flex: isMobile ? 0 : 2,
      backgroundColor: c.card,
      borderRadius: 16,
      padding: isMobile ? 16 : 28,
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    title: { color: c.textSecondary, fontSize: 13, fontWeight: "600", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 },
    amountRow: { flexDirection: "row", alignItems: "flex-end", marginBottom: isMobile ? 24 : 32 },
    amount: { color: c.text, fontSize: isMobile ? 32 : 48, fontWeight: "700", lineHeight: isMobile ? 36 : 50 },
    limit: { color: c.textSecondary, fontSize: isMobile ? 14 : 18, marginLeft: 8, marginBottom: 4 },
    progressContainer: { height: 12, backgroundColor: c.progressTrack, borderRadius: 6, overflow: "hidden", marginBottom: 16 },
    progressFill: { width: "65%", height: "100%", backgroundColor: c.primary, borderRadius: 6 },
    footer: { flexDirection: "row", justifyContent: "space-between" },
    status: { color: "#10B981", fontSize: 13, fontWeight: "600" },
    daysLeft: { color: c.textSecondary, fontSize: 13 },
  });
