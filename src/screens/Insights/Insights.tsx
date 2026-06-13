import { View, Text, ScrollView, Pressable } from "react-native";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AISignalCard from "../../components/AISignalCard";
import MarketSentiment from "../../components/MarketSentimentCard";
import PerformanceChart from "../../components/PerformanceChart";
import SectorAllocation from "../../components/SectorAllocation";
import TopPerformer from "../../components/TopPerformer";
import RiskLevel from "../../components/RiskLevel";
import { createStyles } from "./Insights.styles";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

const cashFlowInsights = [
  { icon: "💡", title: "Surplus Opportunity", desc: "You spent 12% less on dining this month. Transfer $450 to your Growth basket to stay ahead of your 2024 goal." },
  { icon: "🔄", title: "Recurring Audit", desc: "We detected two overlapping streaming subscriptions. Canceling XMedia+ would save you $180 annually." },
  { icon: "📊", title: "Tax-Loss Harvesting", desc: "3 assets in your legacy portfolio are eligible for tax-loss harvesting. Potential benefit: $2,100." },
];

export default function Insights() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Sidebar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
        <Header />
        <Text style={styles.header}>Wealth Intelligence</Text>
        <Text style={styles.title}>Portfolio Insights</Text>
        <Text style={styles.subtitle}>Your curated financial perspective, balancing algorithmic precision with long-term wealth preservation goals.</Text>
        <View style={styles.row}><AISignalCard /><MarketSentiment /></View>
        <View style={styles.middleRow}>
          <View style={{ flex: 1 }}><PerformanceChart /></View>
          <View style={{ width: 280, gap: 16 }}>
            <SectorAllocation />
            <View style={{ flexDirection: "row", gap: 12 }}><TopPerformer /><RiskLevel /></View>
          </View>
        </View>
        <View style={styles.cashFlowSection}>
          <View style={styles.cashFlowHeader}>
            <View>
              <Text style={styles.cashFlowLabel}>Cash Flow Intelligence</Text>
              <Text style={styles.cashFlowSubtitle}>Automated suggestions based on your November spending patterns.</Text>
            </View>
            <Pressable><Text style={styles.cashFlowLink}>View Monthly Report →</Text></Pressable>
          </View>
          <View style={styles.cashFlowCards}>
            {cashFlowInsights.map((item, index) => (
              <View key={item.title} style={{ flex: 1, flexDirection: "row" }}>
                {index > 0 && <View style={styles.insightDivider} />}
                <View style={styles.insightCard}>
                  <View style={styles.insightIconCircle}><Text style={styles.insightIcon}>{item.icon}</Text></View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.insightTitle}>{item.title}</Text>
                    <Text style={styles.insightDesc}>{item.desc}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2023 Editorial Finance. All financial data is encrypted and secure.</Text>
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
