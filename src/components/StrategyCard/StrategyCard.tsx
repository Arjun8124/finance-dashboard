import { View, Text, Pressable } from "react-native";
import { createStyles } from "./StrategyCard.styles";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

export default function StrategyCard() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>PRO STRATEGY INSIGHT</Text>
      <Text style={styles.title}>
        Optimizing your portfolio{"\n"}for the upcoming Q3 market shift.
      </Text>
      <Text style={styles.description}>
        Our AI analyzed your current allocation and identified 3 key rebalancing
        opportunities to increase yield by 2.4%.
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryText}>Execute Strategy</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Review Audit</Text>
        </Pressable>
      </View>
    </View>
  );
}
