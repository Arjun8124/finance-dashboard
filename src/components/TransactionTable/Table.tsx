import { View, Text } from "react-native";
import { styles } from "./Table.styles";

const transactions = [
  {
    merchant: "Apple Store Soho",
    category: "Technology",
    status: "Cleared",
    amount: "-$1,299.00",
    date: "Oct 24, 2023",
  },
  {
    merchant: "Blue Hill Farm",
    category: "Lifestyle",
    status: "Cleared",
    amount: "-$485.20",
    date: "Oct 23, 2023",
  },
  {
    merchant: "ConEd Utility Bill",
    category: "Utilities",
    status: "Pending",
    amount: "-$214.10",
    date: "Oct 22, 2023",
  },
  {
    merchant: "Monthly Salary Deposit",
    category: "Income",
    status: "Cleared",
    amount: "+$12,500.00",
    date: "Oct 21, 2023",
  },
];

export default function TransactionTable() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Activity</Text>

        <View style={styles.actions}>
          <Text style={styles.actionText}>Export CSV</Text>
          <Text style={styles.actionText}>Filter</Text>
        </View>
      </View>

      <View style={styles.tableHeader}>
        <Text style={[styles.headerText, { flex: 2 }]}>Merchant</Text>

        <Text style={[styles.headerText, { flex: 1.5 }]}>Category</Text>

        <Text style={[styles.headerText, { flex: 1 }]}>Status</Text>

        <Text style={[styles.headerText, { flex: 1 }]}>Amount</Text>
      </View>

      {transactions.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={{ flex: 2 }}>
            <Text style={styles.merchant}>{item.merchant}</Text>

            <Text style={styles.date}>{item.date}</Text>
          </View>

          <Text style={[styles.cellText, { flex: 1.5 }]}>{item.category}</Text>

          <Text
            style={[
              styles.cellText,
              {
                flex: 1,
                color: item.status === "Pending" ? "#F59E0B" : "#22C55E",
              },
            ]}
          >
            {item.status}
          </Text>

          <Text
            style={[
              styles.amount,
              {
                flex: 1,
                color: item.amount.startsWith("+") ? "#22C55E" : "#FFFFFF",
              },
            ]}
          >
            {item.amount}
          </Text>
        </View>
      ))}
    </View>
  );
}
