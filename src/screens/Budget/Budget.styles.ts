import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#020617",
  },

  content: {
    flex: 1,
    padding: 24,
    gap: 24,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "700",
  },

  period: {
    color: "#94A3B8",
    fontSize: 16,
  },

  overviewRow: {
    flexDirection: "row",
    gap: 20,
  },

  rightCards: {
    flex: 1,
    gap: 20,
  },

  mainRow: {
    flexDirection: "row",
    gap: 24,
  },

  leftSection: {
    flex: 2,
  },

  rightSection: {
    flex: 1,
    gap: 24,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
});
