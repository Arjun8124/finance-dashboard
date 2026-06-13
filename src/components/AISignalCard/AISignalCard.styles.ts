import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#F97316",
  },
  label: {
    color: "#F97316",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  signal: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    color: "#94A3B8",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 20,
  },
  subtext: {
    color: "#64748B",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 20,
  },
  confidenceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  confidenceLabel: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  confidenceBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#1E293B",
    borderRadius: 3,
    overflow: "hidden",
  },
  confidenceFill: {
    height: "100%",
    backgroundColor: "#2563EB",
    borderRadius: 3,
  },
  confidenceValue: {
    color: "#60A5FA",
    fontSize: 12,
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  primaryText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 13,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#334155",
  },
  secondaryText: {
    color: "#CBD5E1",
    fontWeight: "600",
    fontSize: 13,
  },
});
