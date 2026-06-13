import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 16,
    gap: 14,
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#1E293B",
  },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  iconDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },

  content: {
    flex: 1,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },

  description: {
    color: "#94A3B8",
    fontSize: 12,
    lineHeight: 18,
  },
});
