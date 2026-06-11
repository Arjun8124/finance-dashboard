import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 16,
    marginBottom: 24,
  },

  searchInput: {
    width: 320,
    backgroundColor: "#111827",
    color: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },

  navContainer: {
    flexDirection: "row",
    gap: 24,
  },

  activeNav: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    cursor : 'pointer'
  },

  navItem: {
    color: "#94A3B8",
    fontSize: 14,
    cursor : "pointer"
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  profileCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    cursor : "pointer"
  },
});