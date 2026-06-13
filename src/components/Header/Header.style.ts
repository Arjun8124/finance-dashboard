import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#1E293B",
  },

  searchInput: {
    width: 300,
    backgroundColor: "#111827",
    color: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1E293B",
    fontSize: 13,
  },

  navContainer: {
    flexDirection: "row",
    gap: 28,
  },

  activeNav: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    cursor: "pointer",
    borderBottomWidth: 2,
    borderBottomColor: "#FFFFFF",
    paddingBottom: 4,
  },

  navItem: {
    color: "#94A3B8",
    fontSize: 14,
    cursor: "pointer",
    paddingBottom: 4,
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  profileCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#2563EB",
    cursor: "pointer",
  },
});