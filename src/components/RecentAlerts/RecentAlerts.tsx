import { View, Text } from "react-native";
import { styles } from "./RecentAlerts.styles";
import AlertCard from "../AlertCard";

export default function RecentAlerts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RECENT ALERTS</Text>

      <AlertCard
        title="Entertainment Threshold"
        description="Limit is at 90% ($450/$500)"
      />

      <AlertCard
        title="Dining Anomaly"
        description="Spending at The Oak Room is 20% higher."
      />

      <AlertCard
        title="Subscription Renewed"
        description="Bloomberg Terminal was auto-paid."
      />
    </View>
  );
}
