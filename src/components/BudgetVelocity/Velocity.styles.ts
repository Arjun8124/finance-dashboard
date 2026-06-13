import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { flex: 2, backgroundColor: c.card, borderRadius: 20, padding: 28, borderWidth: 1, borderColor: c.cardBorder },
    label: { color: c.primary, fontSize: 13, letterSpacing: 2, marginBottom: 24 },
    amountRow: { flexDirection: "row", alignItems: "flex-end", marginBottom: 32 },
    current: { color: c.text, fontSize: 52, fontWeight: "700" },
    target: { color: c.textSecondary, fontSize: 24, marginLeft: 12, marginBottom: 8 },
    progressTrack: { height: 10, borderRadius: 999, backgroundColor: c.progressTrack, overflow: "hidden", marginBottom: 20 },
    progressFill: { width: "83%", height: "100%", backgroundColor: c.primary, borderRadius: 999 },
    footer: { flexDirection: "row", justifyContent: "space-between" },
    leftText: { color: c.textSecondary, fontSize: 14 },
    rightText: { color: c.primary, fontSize: 14, fontWeight: "600" },
  });
