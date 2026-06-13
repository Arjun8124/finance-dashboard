import { View, Text } from "react-native";
import { createStyles } from "./Market.styles";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import { useMemo } from "react";

export default function MarketSentiment() {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Market Sentiment</Text>
        <Text style={styles.icon}>⚡</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>78</Text>
        <Text style={styles.label}>Strong Bullish</Text>
      </View>
      <View style={styles.barContainer}>
        <View style={styles.barBear} />
        <View style={styles.barNeutral} />
        <View style={styles.barBull} />
      </View>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#EF4444" }]} />
          <Text style={styles.legendText}>Bear</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#F59E0B" }]} />
          <Text style={styles.legendText}>Neutral</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#10B981" }]} />
          <Text style={styles.legendText}>Bull</Text>
        </View>
      </View>
    </View>
  );
}
