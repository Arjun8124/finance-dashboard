import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: {
      width: isMobile ? "100%" : 320,
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
      marginBottom: 20,
    },
    title: { color: c.text, fontSize: 16, fontWeight: "700" },
    icon: { color: c.textSecondary, fontSize: 16 },
    scoreContainer: { alignItems: "center", marginBottom: 24 },
    score: { color: c.text, fontSize: 48, fontWeight: "700" },
    label: { color: "#10B981", fontSize: 14, fontWeight: "600", marginTop: 4 },
    barContainer: {
      height: 8,
      backgroundColor: c.progressTrack,
      borderRadius: 4,
      flexDirection: "row",
      overflow: "hidden",
      marginBottom: 16,
    },
    barBear: { flex: 20, backgroundColor: "#EF4444" },
    barNeutral: { flex: 15, backgroundColor: "#F59E0B" },
    barBull: { flex: 65, backgroundColor: "#10B981" },
    legend: { flexDirection: "row", justifyContent: "space-between" },
    legendItem: { flexDirection: "row", alignItems: "center", gap: 6 },
    legendDot: { width: 8, height: 8, borderRadius: 4 },
    legendText: { color: c.textSecondary, fontSize: 12 },
  });
