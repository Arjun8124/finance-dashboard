import { View, Text } from "react-native";
import { createStyles } from "./Sector.styles";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

const sectors = [
  { name: "Technology", value: "42%", color: "#3B82F6" },
  { name: "Financials", value: "18%", color: "#F59E0B" },
  { name: "Healthcare", value: "15%", color: "#111827" },
  { name: "Other", value: "25%", color: "#64748B" },
];

export default function SectorAllocation() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>Sector Allocation</Text>
      {sectors.map((sector) => (
        <View key={sector.name} style={styles.row}>
          <View style={styles.dotLabel}>
            <View style={[styles.dot, { backgroundColor: sector.color }]} />
            <Text style={styles.label}>{sector.name}</Text>
          </View>
          <Text style={styles.value}>{sector.value}</Text>
        </View>
      ))}
    </View>
  );
}
