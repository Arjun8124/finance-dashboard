import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 240,
    backgroundColor: "#181C1C",
    padding: 24,
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 40,
  },
  menu: {
    gap: 20,
  },
  active: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    cursor: "pointer",
    backgroundColor: "#333436",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    width: 200,
  },
  item: {
    color: "#94a3b8",
    fontSize: 16,
    cursor: "pointer",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    width: 200,
  },
});
