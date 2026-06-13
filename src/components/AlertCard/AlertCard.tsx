import { View, Text } from "react-native";
import { styles } from "./AlertCard.styles";

type AlertCardProps = {
  title: string;
  description: string;
  iconColor?: string;
};

export default function AlertCard({ title, description, iconColor = "#F59E0B" }: AlertCardProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconCircle, { backgroundColor: iconColor + "20" }]}>
        <View style={[styles.iconDot, { backgroundColor: iconColor }]} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
