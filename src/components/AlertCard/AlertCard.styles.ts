import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },

  indicator: {
    width: 4,
    borderRadius: 2,
    backgroundColor: "#F59E0B",
  },

  content: {
    flex: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },

  description: {
    color: "#94A3B8",
    fontSize: 12,
    lineHeight: 18,
  },
});
