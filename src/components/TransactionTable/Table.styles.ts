import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
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
      marginBottom: 24,
    },
    title: { color: c.text, fontSize: isMobile ? 20 : 22, fontWeight: "700" },
    actions: { flexDirection: "row", gap: 16 },
    actionText: { color: c.primaryLight, fontSize: 14 },
    scrollContainer: {
      width: "100%",
    },
    tableContent: {
      minWidth: 500, // Forces horizontal scroll on very small screens
    },
    tableHeader: {
      flexDirection: "row",
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: c.divider,
      marginBottom: 12,
    },
    headerText: { color: c.textSecondary, fontSize: 12, fontWeight: "600" },
    row: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: c.divider,
    },
    merchant: { color: c.text, fontSize: 14, fontWeight: "600" },
    date: { color: c.textSecondary, fontSize: 12, marginTop: 4 },
    cellText: { color: c.text, fontSize: 13 },
    amount: { fontSize: 14, fontWeight: "600" },
  });
