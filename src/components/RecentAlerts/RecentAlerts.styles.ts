import { StyleSheet } from "react-native";
import type { ThemeColors } from "../../constants/theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
    container: { backgroundColor: c.card, borderRadius: 20, padding: 24, gap: 18, borderWidth: 1, borderColor: c.cardBorder },
    title: { color: c.text, fontSize: 18, fontWeight: "700", letterSpacing: 1 },
  });
