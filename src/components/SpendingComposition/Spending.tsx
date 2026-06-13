import { View, Text } from "react-native";
import { createStyles } from "./Spending.styles";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

const spendingData = [
  { category: "Housing & Utilities", percentage: 42, color: "#A5B4FC" },
  { category: "Dining & Leisure", percentage: 18, color: "#FDBA74" },
  { category: "Investments", percentage: 25, color: "#34D399" },
  { category: "Transportation", percentage: 15, color: "#94A3B8" },
];

export default function SpendingComposition() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Spending Composition</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      {spendingData.map((item) => (
        <View key={item.category} style={styles.itemContainer}>
          <View style={styles.row}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.percentage}>{item.percentage}%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View
              style={[styles.progressFill, { width: `${item.percentage}%`, backgroundColor: item.color }]}
            />
          </View>
        </View>
      ))}
      <View style={styles.noteCard}>
        <Text style={styles.noteLabel}>EDITOR'S NOTE</Text>
        <Text style={styles.noteText}>
          Your discretionary spending on Dining & Leisure is down 12% this month.
        </Text>
      </View>
    </View>
  );
}
