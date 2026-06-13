import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  sectionLabel: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 12,
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
  },
  change: {
    color: "#10B981",
    fontSize: 14,
    fontWeight: "600",
  },
  periodRow: {
    flexDirection: "row",
    gap: 4,
  },
  periodBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#1E293B",
  },
  periodBtnActive: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#2563EB",
  },
  periodText: {
    color: "#94A3B8",
    fontSize: 11,
    fontWeight: "600",
  },
  periodTextActive: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },
});
