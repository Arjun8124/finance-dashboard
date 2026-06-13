import { View, Text, Pressable } from "react-native";
import { styles } from "./AISignalCard.styles";

export default function AISignalCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>ACTIVE SIGNAL</Text>

      <Text style={styles.signal}>Rebalance Priority</Text>

      <Text style={styles.description}>
        Your technology exposure has increased by 14.2% this quarter.
      </Text>

      <Text style={styles.subtext}>
        Our AI suggests shifting 4% gains toward healthcare and energy.
      </Text>

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
