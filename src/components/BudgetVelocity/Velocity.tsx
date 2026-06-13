import { View, Text } from "react-native";
import { createStyles } from "./Velocity.styles";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

export default function BudgetVelocity() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>TOTAL BUDGET VELOCITY</Text>
      <View style={styles.amountRow}>
        <Text style={styles.current}>$12,450</Text>
        <Text style={styles.target}>/ $15,000</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={styles.progressFill} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.leftText}>83% of monthly limit reached</Text>
        <Text style={styles.rightText}>12 days remaining</Text>
      </View>
    </View>
  );
}
