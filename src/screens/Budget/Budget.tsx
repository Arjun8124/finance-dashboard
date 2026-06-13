import { View, Text } from "react-native";
import { styles } from "./Budget.styles";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import BudgetVelocity from "../../components/BudgetVelocity";
import BudgetCategoryCard from "../../components/BudgetCategory";
import MetricCard from "../../components/MetricCard";

export default function Budget() {
  return (
    <View style={styles.container}>
      <Sidebar />

      <View style={styles.content}>
        <Header />

        <Text style={styles.heading}>Monthly Overview</Text>

        <Text style={styles.period}>Fiscal Period: October 2023</Text>

        <View style={styles.overviewRow}>
          <BudgetVelocity />

          <View style={styles.rightCards}>
            <MetricCard
              title="Projected Surplus"
              value="+$2,550"
              change=""
              color="green"
            />

            <MetricCard
              title="Savings Efficiency"
              value="94.2%"
              change=""
              color="green"
            />
          </View>
        </View>

        <View style={styles.mainRow}>
          <View style={styles.leftSection}>
            <Text style={styles.sectionTitle}>Category Allocation</Text>

            <View style={styles.grid}>
              <BudgetCategoryCard
                title="Housing & Rent"
                spent="$3200"
                limit="$3200"
                percentage={100}
                status="FIXED"
                color="#2563EB"
              />

              <BudgetCategoryCard
                title="Groceries"
                spent="$642"
                limit="$900"
                percentage={71}
                status="HEALTHY"
                color="#10B981"
              />

              <BudgetCategoryCard
                title="Entertainment"
                spent="$450"
                limit="$500"
                percentage={90}
                status="CRITICAL"
                color="#EF4444"
              />

              <BudgetCategoryCard
                title="Lifestyle"
                spent="$210"
                limit="$600"
                percentage={35}
                status="OPTIMAL"
                color="#F59E0B"
              />
            </View>
          </View>

          <View style={styles.rightSection}>
            <BudgetStrategy />

            <RecentAlerts />
          </View>
        </View>
      </View>
    </View>
  );
}
