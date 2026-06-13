import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 2,

    backgroundColor: "#111827",

    borderRadius: 16,

    padding: 24,
  },

  label: {
    color: "#60A5FA",

    fontSize: 12,

    fontWeight: "600",

    marginBottom: 16,
  },

  signal: {
    color: "#FFFFFF",

    fontSize: 28,

    fontWeight: "700",

    marginBottom: 16,
  },

  description: {
    color: "#E5E7EB",

    fontSize: 16,

    lineHeight: 24,

    marginBottom: 12,
  },

  subtext: {
    color: "#94A3B8",

    fontSize: 14,

    lineHeight: 22,

    marginBottom: 24,
  },

  buttonContainer: {
    flexDirection: "row",

    gap: 12,
  },

  primaryButton: {
    backgroundColor: "#2563EB",

    paddingHorizontal: 18,

    paddingVertical: 12,

    borderRadius: 10,
  },

  primaryText: {
    color: "#FFFFFF",

    fontWeight: "600",
  },

  secondaryButton: {
    backgroundColor: "#1F2937",

    paddingHorizontal: 18,

    paddingVertical: 12,

    borderRadius: 10,
  },

  secondaryText: {
    color: "#FFFFFF",

    fontWeight: "600",
  },
});
