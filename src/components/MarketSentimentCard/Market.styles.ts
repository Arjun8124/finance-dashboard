import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  sectionLabel: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },
  overall: {
    color: "#10B981",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 4,
    textAlign: "center",
  },
  score: {
    color: "#64748B",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1E293B",
  },
  label: {
    color: "#94A3B8",
    fontSize: 13,
  },
  value: {
    fontSize: 13,
    fontWeight: "600",
  },
});
