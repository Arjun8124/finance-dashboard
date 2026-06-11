import { View, Text } from "react-native";
import { styles } from "./AlertCard.styles";

type AlertCardProps = {
  title: string;
  description: string;
};

export default function AlertCard({ title, description }: AlertCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.indicator} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
