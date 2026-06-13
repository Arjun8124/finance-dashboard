import { View, Text, Pressable } from "react-native";
import { styles } from "./BudgetStrategy.styles";

export default function BudgetStrategy() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>BUDGET STRATEGY</Text>

      <Text style={styles.title}>Optimize your spending to save</Text>

      <Text style={styles.highlight}>$200.00</Text>

      <Text style={styles.title}>next month.</Text>

      <Text style={styles.description}>
        Based on your spending patterns at "Gourmet Mart", switching to bulk
        purchases could reduce your grocery overhead by 14%.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Apply Strategy</Text>
      </Pressable>
    </View>
  );
}
