import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: c.primaryDark, borderRadius: 14, padding: 16 },
    title: { color: "rgba(255,255,255,0.6)", fontSize: 9, fontWeight: "700", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 },
    stock: { color: "#FFFFFF", fontSize: 22, fontWeight: "800", marginBottom: 2 },
    growth: { color: "#93C5FD", fontSize: 13, fontWeight: "600" },
  });
