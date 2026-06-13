import { View, Text } from "react-native";
import { createStyles } from "./Top.styles";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

export default function TopPerformer() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Performer</Text>
      <Text style={styles.stock}>NVDA</Text>
      <Text style={styles.growth}>+5.4%</Text>
    </View>
  );
}
