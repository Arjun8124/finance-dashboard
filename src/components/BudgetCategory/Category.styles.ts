import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "48%",

    backgroundColor: "#111827",

    borderRadius: 20,

    padding: 24,
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 28,
  },

  title: {
    color: "#FFFFFF",

    fontSize: 24,

    fontWeight: "600",
  },

  badge: {
    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 999,
  },

  badgeText: {
    fontSize: 12,

    fontWeight: "600",
  },

  amount: {
    color: "#FFFFFF",

    fontSize: 28,

    fontWeight: "700",

    marginBottom: 8,
  },

  limit: {
    color: "#94A3B8",

    fontSize: 18,

    fontWeight: "400",
  },

  percentage: {
    color: "#FFFFFF",

    fontSize: 18,

    fontWeight: "600",

    marginBottom: 20,
  },

  progressTrack: {
    height: 8,

    backgroundColor: "#374151",

    borderRadius: 999,

    overflow: "hidden",
  },

  progressFill: {
    height: "100%",

    borderRadius: 999,
  },
});
