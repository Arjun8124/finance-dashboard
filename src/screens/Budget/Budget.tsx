import { View, Text, ScrollView } from "react-native";
import { createStyles } from "./Budget.styles";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import BudgetVelocity from "../../components/BudgetVelocity";
import BudgetCategoryCard from "../../components/BudgetCategory";
import MetricCard from "../../components/MetricCard";
import BudgetStrategy from "../../components/BudgetStrategy";
import RecentAlerts from "../../components/RecentAlerts";
import DataState from "../../components/DataState";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import useFetch from "../../hooks/useFetch";
import { getBudget } from "../../api";
import { useMemo } from "react";

export default function Budget() {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const { data, loading, error, refetch } = useFetch(getBudget);
  const styles = useMemo(
    () => createStyles(colors, isMobile),
    [colors, isMobile],
  );

  return (
    <View style={styles.container}>
      <Sidebar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
        <Header />
        <Text style={styles.heading}>Monthly Overview</Text>
        <Text style={styles.period}>Fiscal Period: October 2023</Text>
        <DataState
          loading={loading}
          error={error}
          isEmpty={!!data && data.categories.length === 0}
          onRetry={refetch}
        >
          {data && (
            <>
              <View style={styles.overviewRow}>
                <BudgetVelocity />
                <View style={styles.rightCards}>
                  {data.metrics.map((metric) => (
                    <MetricCard key={metric.title} {...metric} />
                  ))}
                </View>
              </View>
              <View style={styles.mainRow}>
                <View style={styles.leftSection}>
                  <Text style={styles.sectionTitle}>Category Allocation</Text>
                  <View style={styles.grid}>
                    {data.categories.map((category) => (
                      <BudgetCategoryCard
                        key={category.id}
                        title={category.title}
                        spent={category.spent}
                        limit={category.limit}
                        percentage={category.percentage}
                        status={category.status}
                        color={category.color}
                      />
                    ))}
                  </View>
                </View>
                <View style={styles.rightSection}>
                  <BudgetStrategy />
                  <RecentAlerts />
                </View>
              </View>
            </>
          )}
        </DataState>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2023 Editorial Finance. All financial data is encrypted and
            secure.
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
