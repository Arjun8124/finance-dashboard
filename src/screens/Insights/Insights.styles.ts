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

  header: {
    color: "#60A5FA",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "700",
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: 15,
    lineHeight: 24,
    maxWidth: 700,
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    gap: 20,
    alignItems: "stretch",
  },

  smallCardsRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 24,
  },

  alertsContainer: {
    gap: 16,
    marginTop: 8,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
});
