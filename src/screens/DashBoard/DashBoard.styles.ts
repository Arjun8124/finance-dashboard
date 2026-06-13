import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { flex: 1, flexDirection: "row", backgroundColor: c.background },
    main: { flex: 1, minWidth: 0 },
    mainContent: { padding: 28, paddingBottom: 0 },
    metrics: { flexDirection: "row", gap: 20, marginTop: 20 },
    strategy: { flexDirection: "row", gap: 20, marginTop: 24 },
    bottomSection: { flexDirection: "row", gap: 20, marginTop: 24 },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 20,
      marginTop: 32,
      borderTopWidth: 1,
      borderTopColor: c.divider,
    },
    footerText: { color: c.textMuted, fontSize: 12 },
    footerLinks: { flexDirection: "row", gap: 24 },
    footerLink: { color: c.textMuted, fontSize: 12 },
  });
