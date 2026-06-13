import { View, Text } from "react-native";
import { styles } from "./Market.styles";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const sentiments = [
  { label: "Global Equities", value: "Bullish", color: "#3B82F6" },
  { label: "Fixed Income", value: "Neutral", color: "#F59E0B" },
  { label: "Volatility Index", value: "Low", color: "#10B981" },
];

const data = [
  { name: "Technology", value: 42 },
  { name: "Financials", value: 18 },
  { name: "Healthcare", value: 15 },
  { name: "Other", value: 25 },
];

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"];

export default function MarketSentiment() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>Market Sentiment</Text>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <PieChart width={175} height={175}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={55}
            outerRadius={80}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <Text style={styles.overall}>Optimistic</Text>
      <Text style={styles.score}>Score: 74/100</Text>

      {sentiments.map((item, index) => (
        <View
          key={item.label}
          style={[
            styles.row,
            index === sentiments.length - 1 && { borderBottomWidth: 0 },
          ]}
        >
          <Text style={styles.label}>{item.label}</Text>
          <Text style={[styles.value, { color: item.color }]}>
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
}
