import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  sectionLabel: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  dotLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  label: {
    color: "#CBD5E1",
    fontSize: 13,
  },
  value: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
});
