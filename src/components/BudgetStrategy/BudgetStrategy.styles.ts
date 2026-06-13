import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { backgroundColor: c.primary, borderRadius: 24, padding: 28 },
    label: { color: "#DBEAFE", fontSize: 13, fontWeight: "600", letterSpacing: 2, marginBottom: 24 },
    title: { color: "#FFFFFF", fontSize: 38, fontWeight: "700", lineHeight: 48 },
    highlight: { color: "#FFFFFF", fontSize: 42, fontWeight: "700", backgroundColor: "rgba(255,255,255,0.2)", alignSelf: "flex-start", paddingHorizontal: 8, borderRadius: 8 },
    description: { color: "#DBEAFE", fontSize: 15, lineHeight: 24, marginTop: 24, marginBottom: 28 },
    button: { backgroundColor: "#FFFFFF", paddingVertical: 16, borderRadius: 12, alignItems: "center" },
    buttonText: { color: c.primary, fontSize: 16, fontWeight: "700" },
  });
