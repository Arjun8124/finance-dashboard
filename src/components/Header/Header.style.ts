import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors, isMobile: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 14,
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: c.divider,
      gap: 12,
    },
    hamburgerMenu: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: c.surfaceHover,
    },
    hamburgerText: {
      fontSize: 20,
      color: c.text,
    },
    searchContainer: {
      flex: 1,
      minWidth: 0,
      maxWidth: isMobile ? undefined : 300,
    },
    searchInput: {
      width: "100%",
      minWidth: 0,
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
      gap: 12,
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