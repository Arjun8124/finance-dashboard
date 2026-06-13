import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { View, Text } from "react-native";
import { styles } from "./Performance.styles";

const data = [
  { month: "Oct", value: 1388400 },
  { month: "Nov", value: 1399200 },
  { month: "Dec", value: 1408500 },
  { month: "Jan", value: 1424902 },
];

export default function PerformanceChart() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Portfolio Performance</Text>

        <Text style={styles.amount}>$1,424,902</Text>
      </View>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis hide />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </View>
  );
}
