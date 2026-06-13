import { View, Text } from "react-native";
import { createStyles } from "./Spending.styles";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import { useMemo } from "react";
import type { SpendingSlice } from "../../api/mockData";

type SpendingCompositionProps = {
  data: SpendingSlice[];
};

export default function SpendingComposition({ data }: SpendingCompositionProps) {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Spending Composition</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      {data.map((item) => (
        <View key={item.category} style={styles.itemContainer}>
          <View style={styles.row}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.percentage}>{item.percentage}%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${item.percentage}%`, backgroundColor: item.color },
              ]}
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
