import { View, Text } from "react-native";
import { createStyles } from "./Risk.styles";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

export default function RiskLevel() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Risk Level</Text>
      <Text style={styles.level}>Moderate</Text>
      <Text style={styles.subtitle}>Balanced</Text>
    </View>
  );
}
