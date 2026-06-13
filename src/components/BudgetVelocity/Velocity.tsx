import { View, Text } from "react-native";
import { createStyles } from "./Velocity.styles";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import { useMemo } from "react";

export default function BudgetVelocity() {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velocity & Burn Rate</Text>
      <View style={styles.amountRow}>
        <Text style={styles.amount}>$4,280</Text>
        <Text style={styles.limit}>/ $6,500</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressFill} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.status}>Optimal Burn Rate</Text>
        <Text style={styles.daysLeft}>14 days remaining</Text>
      </View>
    </View>
  );
}
