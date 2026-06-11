import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2563EB",

    borderRadius: 16,

    padding: 24,

    flex: 1,

    minHeight: 240,
  },

  label: {
    color: "#BFDBFE",

    fontSize: 12,

    fontWeight: "600",

    marginBottom: 16,
  },

  title: {
    color: "#FFFFFF",

    fontSize: 30,

    fontWeight: "700",

    lineHeight: 38,

    marginBottom: 16,
  },

  description: {
    color: "#DBEAFE",

    fontSize: 15,

    lineHeight: 24,

    marginBottom: 24,
  },

  buttonContainer: {
    flexDirection: "row",

    gap: 12,
  },

  primaryButton: {
    backgroundColor: "#FFFFFF",

    paddingHorizontal: 18,

    paddingVertical: 12,

    borderRadius: 10,
  },

  primaryText: {
    color: "#2563EB",

    fontWeight: "600",
  },

  secondaryButton: {
    backgroundColor: "rgba(255,255,255,0.15)",

    paddingHorizontal: 18,

    paddingVertical: 12,

    borderRadius: 10,
  },

  secondaryText: {
    color: "#FFFFFF",

    fontWeight: "600",
  },
});
