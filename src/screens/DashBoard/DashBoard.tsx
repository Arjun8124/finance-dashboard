import { View, ScrollView, Text } from "react-native";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import MetricCard from "../../components/MetricCard";
import { createStyles } from "./DashBoard.styles";
import StrategyCard from "../../components/StrategyCard";
import AlertCard from "../../components/AlertCard";
import SpendingComposition from "../../components/SpendingComposition";
import TransactionTable from "../../components/TransactionTable";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

export default function DashBoard() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Sidebar />
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.mainContent}
      >
        <Header />
        <View style={styles.metrics}>
          <MetricCard
            title="Total Net Worth"
            value="$1,248,500"
            change="+12.4% vs last month"
            color="#10B981"
          />
          <MetricCard
            title="Monthly Spending"
            value="$4,280"
            change="+2.1% higher than avg"
            color="#F59E0B"
          />
          <MetricCard
            title="Total Savings"
            value="$245,000"
            change="On track for Q4 goal"
            color="#10B981"
          />
        </View>
        <View style={styles.strategy}>
          <StrategyCard />
          <View style={{ width: 340, gap: 14 }}>
            <Text
              style={{
                color: colors.text,
                fontSize: 20,
                fontWeight: "700",
                marginBottom: 2,
              }}
            >
              Active Alerts
            </Text>
            <AlertCard
              title="Subscription Spike"
              description='3 new recurring charges detected from "Cloud SaaS" in the last 48h.'
              iconColor="#EF4444"
            />
            <AlertCard
              title="Emergency Fund Cap"
              description='Your "Rainy Day" fund has reached its target of $20k. Redirecting flows?'
              iconColor="#F59E0B"
            />
            <AlertCard
              title="Dividend Reinvestment"
              description="AAPL and MSFT paid dividends today. Automatic reinvestment pending."
              iconColor="#3B82F6"
            />
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={{ flex: 1 }}>
            <SpendingComposition />
          </View>
          <View style={{ flex: 1.4 }}>
            <TransactionTable />
          </View>
        </View>
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
