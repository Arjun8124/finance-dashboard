import { View, Text } from "react-native";
import { styles } from "./Category.styles";

interface Props {
  title: string;
  spent: string;
  limit: string;
  percentage: number;
  status: string;
  color: string;
}

export default function BudgetCategoryCard({
  title,
  spent,
  limit,
  percentage,
  status,
  color,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: color + "22",
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color,
              },
            ]}
          >
            {status}
          </Text>
        </View>
      </View>

      <Text style={styles.amount}>
        {spent}
        <Text style={styles.limit}> / {limit}</Text>
      </Text>

      <Text style={styles.percentage}>{percentage}%</Text>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${percentage}%`,
              backgroundColor: color,
            },
          ]}
        />
      </View>
    </View>
  );
}
