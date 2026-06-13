import { View, Text } from "react-native";
import { styles } from "./Risk.styles";

export default function RiskLevel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Risk Level</Text>

      <Text style={styles.level}>Moderate</Text>

      <Text style={styles.subtitle}>Balanced</Text>
    </View>
  );
}
