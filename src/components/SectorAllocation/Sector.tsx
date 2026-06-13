import { View, Text } from "react-native";
import { styles } from "./Sector.styles";

const sectors = [
  { name: "Technology", value: "42%" },
  { name: "Financials", value: "18%" },
  { name: "Healthcare", value: "15%" },
  { name: "Other", value: "25%" },
];

export default function SectorAllocation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sector Allocation</Text>

      {sectors.map((sector) => (
        <View key={sector.name} style={styles.row}>
          <Text style={styles.label}>{sector.name}</Text>

          <Text style={styles.value}>{sector.value}</Text>
        </View>
      ))}
    </View>
  );
}
