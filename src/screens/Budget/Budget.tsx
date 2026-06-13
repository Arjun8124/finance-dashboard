import { View, Text, ScrollView } from "react-native";
import { createStyles } from "./Budget.styles";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import BudgetVelocity from "../../components/BudgetVelocity";
import BudgetCategoryCard from "../../components/BudgetCategory";
import MetricCard from "../../components/MetricCard";
import BudgetStrategy from "../../components/BudgetStrategy";
import RecentAlerts from "../../components/RecentAlerts";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import { useMemo } from "react";

export default function Budget() {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);

  return (
    <View style={styles.container}>
      <Sidebar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
        <Header />
        <Text style={styles.heading}>Monthly Overview</Text>
        <Text style={styles.period}>Fiscal Period: October 2023</Text>
        <View style={styles.overviewRow}>
          <BudgetVelocity />
          <View style={styles.rightCards}>
            <MetricCard title="Projected Surplus" value="+$2,550" change="" color="green" />
            <MetricCard title="Savings Efficiency" value="94.2%" change="" color="green" />
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
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2023 Editorial Finance. All financial data is encrypted and secure.
          </Text>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>Privacy Policy</Text>
            <Text style={styles.footerLink}>Security Audit</Text>
            <Text style={styles.footerLink}>API Docs</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
