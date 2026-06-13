import { View, Text } from "react-native";
import { styles } from "./Top.styles";

export default function TopPerformer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Performer</Text>
      <Text style={styles.stock}>NVDA</Text>
      <Text style={styles.growth}>+5.4%</Text>
    </View>
  );
}
