import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    padding: 28,
    minHeight: 260,
    // Deep blue with a subtle teal-ish dark tint to feel like a gradient
    backgroundColor: "#1E3A5F",
  },

  label: {
    color: "#93C5FD",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 18,
    backgroundColor: "rgba(37, 99, 235, 0.3)",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    overflow: "hidden",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 38,
    marginBottom: 16,
  },

  description: {
    color: "#CBD5E1",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 28,
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },

  primaryButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },

  primaryText: {
    color: "#1E3A5F",
    fontWeight: "700",
    fontSize: 14,
  },

  secondaryButton: {
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  secondaryText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
