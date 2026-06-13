import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 14,
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: c.divider,
    },
    searchInput: {
      width: 300,
      backgroundColor: c.inputBg,
      color: c.text,
      paddingHorizontal: 16,
      paddingVertical: 11,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: c.inputBorder,
      fontSize: 13,
    },
    navContainer: {
      flexDirection: "row",
      gap: 28,
    },
    activeNav: {
      color: c.text,
      fontSize: 14,
      fontWeight: "600",
      cursor: "pointer",
      borderBottomWidth: 2,
      borderBottomColor: c.text,
      paddingBottom: 4,
    },
    navItem: {
      color: c.textSecondary,
      fontSize: 14,
      cursor: "pointer",
      paddingBottom: 4,
    },
    rightContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    themeToggle: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: c.surfaceHover,
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      borderWidth: 1,
      borderColor: c.cardBorder,
    },
    themeToggleText: {
      fontSize: 16,
    },
    profileCircle: {
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: c.primary,
      cursor: "pointer",
    },
  });