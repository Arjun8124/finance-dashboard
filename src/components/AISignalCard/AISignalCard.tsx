import { View, Text, Pressable } from "react-native";
import { createStyles } from "./AISignalCard.styles";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

export default function AISignalCard() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={styles.badgeRow}>
        <View style={styles.badgeDot} />
        <Text style={styles.label}>Active Signal: Rebalance Priority</Text>
      </View>
      <Text style={styles.signal}>
        Your technology exposure has increased by 14.2% since last quarter.
      </Text>
      <Text style={styles.description}>
        Our algorithms suggest shifting 4% of gains into emerging market debt
        and high-yield real estate to maintain your risk-adjusted profile.
      </Text>
      <View style={styles.confidenceRow}>
        <Text style={styles.confidenceLabel}>Signal Confidence</Text>
        <View style={styles.confidenceBar}>
          <View style={[styles.confidenceFill, { width: "92%" }]} />
        </View>
        <Text style={styles.confidenceValue}>92%</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryText}>Review Strategy</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Dismiss</Text>
        </Pressable>
      </View>
    </View>
  );
}
