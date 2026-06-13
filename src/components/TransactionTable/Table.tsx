import { View, Text, ScrollView } from "react-native";
import { createStyles } from "./Table.styles";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import useAnalytics from "../../hooks/useAnalytics";
import { useMemo } from "react";
import type { Transaction } from "../../api/mockData";

type TransactionTableProps = {
  data: Transaction[];
};

export default function TransactionTable({ data }: TransactionTableProps) {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const { trackEvent } = useAnalytics();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Activity</Text>
        <View style={styles.actions}>
          <Text
            style={styles.actionText}
            accessibilityRole="button"
            onPress={() => trackEvent("export_csv")}
          >
            Export CSV
          </Text>
          <Text
            style={styles.actionText}
            accessibilityRole="button"
            onPress={() => trackEvent("filter_click")}
          >
            Filter
          </Text>
        </View>
      </View>
      <ScrollView horizontal={true} style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
        <View style={styles.tableContent}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerText, { flex: 2 }]}>Merchant</Text>
            <Text style={[styles.headerText, { flex: 1.5 }]}>Category</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>Status</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>Amount</Text>
          </View>
          {data.map((item) => (
            <View key={item.id} style={styles.row}>
              <View style={{ flex: 2 }}>
                <Text style={styles.merchant}>{item.merchant}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <Text style={[styles.cellText, { flex: 1.5 }]}>{item.category}</Text>
              <Text style={[styles.cellText, { flex: 1, color: item.status === "Pending" ? "#F59E0B" : "#22C55E" }]}>{item.status}</Text>
              <Text style={[styles.amount, { flex: 1, color: item.amount.startsWith("+") ? "#22C55E" : "#f11e1eff" }]}>{item.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
