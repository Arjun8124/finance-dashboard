import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#0A0E0E",

    borderRadius: 16,

    padding: 24,
  },

  header: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: 24,
  },

  title: {
    color: "#FFFFFF",

    fontSize: 22,

    fontWeight: "700",
  },

  actions: {
    flexDirection: "row",

    gap: 16,
  },

  actionText: {
    color: "#60A5FA",

    fontSize: 14,
  },

  tableHeader: {
    flexDirection: "row",

    paddingBottom: 12,

    borderBottomWidth: 1,

    borderBottomColor: "#374151",

    marginBottom: 12,
  },

  headerText: {
    color: "#94A3B8",

    fontSize: 12,

    fontWeight: "600",
  },

  row: {
    flexDirection: "row",

    alignItems: "center",

    paddingVertical: 16,

    borderBottomWidth: 1,

    borderBottomColor: "#1F2937",
  },

  merchant: {
    color: "#FFFFFF",

    fontSize: 14,

    fontWeight: "600",
  },

  date: {
    color: "#94A3B8",

    fontSize: 12,

    marginTop: 4,
  },

  cellText: {
    color: "#E5E7EB",

    fontSize: 13,
  },

  amount: {
    fontSize: 14,

    fontWeight: "600",
  },
});
