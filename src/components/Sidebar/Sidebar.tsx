import { View, Text } from "react-native";
import { styles } from "./Sidebar.styles";

export default function Sidebar() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Wealth Curator</Text>

      <View style={styles.menu}>
        <Text style={styles.active}>Dashboard</Text>
        <Text style={styles.item}>Accounts</Text>
        <Text style={styles.item}>Transactions</Text>
        <Text style={styles.item}>Budgets</Text>
        <Text style={styles.item}>Insights</Text>
      </View>
    </View>
  )
};