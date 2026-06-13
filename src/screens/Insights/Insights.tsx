import { View, Text, ScrollView, Pressable } from "react-native";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AISignalCard from "../../components/AISignalCard";
import MarketSentiment from "../../components/MarketSentimentCard";
import PerformanceChart from "../../components/PerformanceChart";
import SectorAllocation from "../../components/SectorAllocation";
import TopPerformer from "../../components/TopPerformer";
import RiskLevel from "../../components/RiskLevel";
import DataState from "../../components/DataState";
import { createStyles } from "./Insights.styles";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import useFetch from "../../hooks/useFetch";
import { getInsights } from "../../api";
import { useMemo } from "react";

export default function Insights() {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const { data, loading, error, refetch } = useFetch(getInsights);
  const styles = useMemo(
    () => createStyles(colors, isMobile),
    [colors, isMobile],
  );

  // Build the headline insight from the data instead of hardcoding it.
  const signal = data
    ? `Your technology exposure has increased by ${data.techExposureChange}% since last quarter.`
    : undefined;

  return (
    <View style={styles.container}>
      <Sidebar />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content}>
        <Header />
        <Text style={styles.header}>Wealth Intelligence</Text>
        <Text style={styles.title}>Portfolio Insights</Text>
        <Text style={styles.subtitle}>
          Your curated financial perspective, balancing algorithmic precision
          with long-term wealth preservation goals.
        </Text>
        <DataState
          loading={loading}
          error={error}
          isEmpty={!!data && data.cashFlow.length === 0}
          onRetry={refetch}
        >
          {data && (
            <>
              <View style={styles.row}>
                <AISignalCard signal={signal} />
                <MarketSentiment />
              </View>
              <View style={styles.middleRow}>
                <View style={styles.middleLeft}>
                  <PerformanceChart />
                </View>
                <View style={styles.middleRight}>
                  <SectorAllocation />
                  <View style={styles.middleRightNested}>
                    <TopPerformer />
                    <RiskLevel />
                  </View>
                </View>
              </View>
              <View style={styles.cashFlowSection}>
                <View style={styles.cashFlowHeader}>
                  <View>
                    <Text style={styles.cashFlowLabel}>
                      Cash Flow Intelligence
                    </Text>
                    <Text style={styles.cashFlowSubtitle}>
                      Automated suggestions based on your November spending
                      patterns.
                    </Text>
                  </View>
                  <Pressable>
                    <Text style={styles.cashFlowLink}>View Monthly Report →</Text>
                  </Pressable>
                </View>
                <View style={styles.cashFlowCards}>
                  {data.cashFlow.map((item, index) => (
                    <View key={item.id} style={styles.insightItem}>
                      {index > 0 && <View style={styles.insightDivider} />}
                      <View style={styles.insightCard}>
                        <View style={styles.insightIconCircle}>
                          <Text style={styles.insightIcon}>{item.icon}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.insightTitle}>{item.title}</Text>
                          <Text style={styles.insightDesc}>{item.desc}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
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
