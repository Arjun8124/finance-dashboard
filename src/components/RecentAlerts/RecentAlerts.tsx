import { View, Text } from "react-native";
import { createStyles } from "./RecentAlerts.styles";
import AlertCard from "../AlertCard";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

export default function RecentAlerts() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RECENT ALERTS</Text>
      <AlertCard title="Entertainment Threshold" description="Limit is at 90% ($450/$500)" />
      <AlertCard title="Dining Anomaly" description="Spending at The Oak Room is 20% higher." />
      <AlertCard title="Subscription Renewed" description="Bloomberg Terminal was auto-paid." />
    </View>
  );
}
