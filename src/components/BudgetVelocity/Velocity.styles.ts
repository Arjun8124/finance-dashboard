import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#111827",
    borderRadius: 20,
    padding: 28,
  },

  label: {
    color: "#2563EB",
    fontSize: 13,
    letterSpacing: 2,
    marginBottom: 24,
  },

  amountRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 32,
  },

  current: {
    color: "#FFFFFF",
    fontSize: 52,
    fontWeight: "700",
  },

  target: {
    color: "#94A3B8",
    fontSize: 24,
    marginLeft: 12,
    marginBottom: 8,
  },

  progressTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: "#374151",
    overflow: "hidden",
    marginBottom: 20,
  },

  progressFill: {
    width: "83%",
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 999,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftText: {
    color: "#94A3B8",
    fontSize: 14,
  },

  rightText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
  },
});
