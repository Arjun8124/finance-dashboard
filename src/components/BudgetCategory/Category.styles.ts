import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { width: "48%", backgroundColor: c.card, borderRadius: 20, padding: 24, borderWidth: 1, borderColor: c.cardBorder },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 28 },
    title: { color: c.text, fontSize: 24, fontWeight: "600" },
    badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
    badgeText: { fontSize: 12, fontWeight: "600" },
    amount: { color: c.text, fontSize: 28, fontWeight: "700", marginBottom: 8 },
    limit: { color: c.textSecondary, fontSize: 18, fontWeight: "400" },
    percentage: { color: c.text, fontSize: 18, fontWeight: "600", marginBottom: 20 },
    progressTrack: { height: 8, backgroundColor: c.progressTrack, borderRadius: 999, overflow: "hidden" },
    progressFill: { height: "100%", borderRadius: 999 },
  });
