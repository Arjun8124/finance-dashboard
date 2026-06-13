import { View, Text } from "react-native";
import { styles } from "./Market.styles";

const sentiments = [
  {
    label: "Global Equities",
    value: "Bullish",
    color: "#22C55E",
  },

  {
    label: "Fixed Income",
    value: "Neutral",
    color: "#F59E0B",
  },

  {
    label: "Volatility Index",
    value: "Low",
    color: "#3B82F6",
  },
];

export default function MarketSentiment() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market Sentiment</Text>

      <Text style={styles.overall}>Optimistic</Text>

      {sentiments.map((item) => (
        <View key={item.label} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>

          <Text
            style={[
              styles.value,
              {
                color: item.color,
              },
            ]}
          >
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
}
