import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 0,

    backgroundColor: "#0A0E0E",

    borderRadius: 16,

    padding: 24,
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 24,
  },

  title: {
    color: "#FFFFFF",

    fontSize: 24,

    fontWeight: "700",
  },

  viewAll: {
    color: "#60A5FA",

    fontSize: 14,
  },

  itemContainer: {
    marginBottom: 24,
  },

  row: {
    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: 10,
  },

  category: {
    color: "#E5E7EB",
  },

  percentage: {
    color: "#FFFFFF",

    fontWeight: "600",
  },

  progressTrack: {
    height: 10,

    backgroundColor: "#374151",

    borderRadius: 999,
  },

  progressFill: {
    height: "100%",

    borderRadius: 999,
  },

  noteCard: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#181C1C",
    borderRadius: 12,
  },

  noteLabel: {
    color: "#9CA3AF",

    fontSize: 12,

    marginBottom: 8,
  },

  noteText: {
    color: "#E5E7EB",

    lineHeight: 22,
  },
});
