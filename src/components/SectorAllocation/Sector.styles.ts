import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 24,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 24,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  label: {
    color: "#94A3B8",
    fontSize: 14,
  },

  value: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
