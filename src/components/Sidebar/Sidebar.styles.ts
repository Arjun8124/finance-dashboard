import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 240,
    backgroundColor: "#0F172A",
    padding: 20,
    paddingTop: 24,
    justifyContent: "space-between",
    borderRightWidth: 1,
    borderRightColor: "#1E293B",
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 36,
  },
  brandIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },
  brandIconText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  tagline: {
    color: "#64748B",
    fontSize: 9,
    letterSpacing: 1.5,
    fontWeight: "600",
  },
  menu: {
    gap: 4,
  },
  activeItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1E293B",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
  },
  activeIcon: {
    fontSize: 16,
  },
  active: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
  },
  menuIcon: {
    fontSize: 16,
  },
  item: {
    color: "#94A3B8",
    fontSize: 14,
  },
  proCard: {
    backgroundColor: "#1E293B",
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#334155",
  },
  proLabel: {
    color: "#60A5FA",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
  },
  proTitle: {
    color: "#E2E8F0",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    marginBottom: 14,
  },
  proButton: {
    backgroundColor: "#10B981",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  proButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  bottomLinks: {
    gap: 16,
  },
  bottomLink: {
    color: "#94A3B8",
    fontSize: 14,
  },
});
