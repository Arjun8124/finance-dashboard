import { View, ScrollView, Text } from "react-native";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import MetricCard from "../../components/MetricCard";
import { createStyles } from "./DashBoard.styles";
import StrategyCard from "../../components/StrategyCard";
import AlertCard from "../../components/AlertCard";
import SpendingComposition from "../../components/SpendingComposition";
import TransactionTable from "../../components/TransactionTable";
import DataState from "../../components/DataState";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import useFetch from "../../hooks/useFetch";
import { getDashboard } from "../../api";
import { useMemo } from "react";

export default function DashBoard() {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const { data, loading, error, refetch } = useFetch(getDashboard);
  const styles = useMemo(
    () => createStyles(colors, isMobile),
    [colors, isMobile],
  );

  return (
    <View style={styles.container}>
      <Sidebar />
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.mainContent}
      >
        <Header />
        <DataState
          loading={loading}
          error={error}
          isEmpty={!!data && data.metrics.length === 0}
          onRetry={refetch}
        >
          {data && (
            <>
              <View style={styles.metrics}>
                {data.metrics.map((metric) => (
                  <MetricCard key={metric.title} {...metric} />
                ))}
              </View>
              <View style={styles.strategy}>
                <StrategyCard />
                <View style={styles.alertsWrapper}>
                  <Text style={styles.alertsTitle}>Active Alerts</Text>
                  {data.alerts.map((alert) => (
                    <AlertCard
                      key={alert.id}
                      title={alert.title}
                      description={alert.description}
                      iconColor={alert.iconColor}
                    />
                  ))}
                </View>
              </View>
              <View style={styles.bottomSection}>
                <View style={styles.spendingWrapper}>
                  <SpendingComposition data={data.spending} />
                </View>
                <View style={styles.tableWrapper}>
                  <TransactionTable data={data.transactions} />
                </View>
              </View>
            </>
          )}
        </DataState>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2023 Proton Finance. Data encrypted with AES-256.
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
