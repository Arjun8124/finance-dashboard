import { View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "./Insights.styles";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function SignalChart() {
  return (
    <View style={styles.signalChartBlock}>
      <div
        style={{ width: "100%", height: 60 }}
        dangerouslySetInnerHTML={{
          __html: `
            <svg width="100%" height="60" viewBox="0 0 160 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="signalGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#2563EB" stop-opacity="0.15"/>
                  <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0 55 Q20 50 40 42 T80 28 T120 18 T160 10 V60 H0 Z" fill="url(#signalGrad)"/>
              <path d="M0 55 Q20 50 40 42 T80 28 T120 18 T160 10" stroke="#2563EB" stroke-width="2" fill="none"/>
            </svg>
          `,
        }}
      />
      <View style={styles.signalConfidenceRow}>
        <Text style={styles.signalConfidenceLabel}>Signal Confidence</Text>
        <View style={styles.signalConfidenceBar}>
          <View style={[styles.signalConfidenceFill, { width: "92%" }]} />
        </View>
        <Text style={styles.signalConfidenceValue}>92%</Text>
      </View>
    </View>
  );
}

function SentimentGauge() {
  return (
    <View style={styles.sentimentGaugeContainer}>
      <div
        style={{ width: 120, height: 70 }}
        dangerouslySetInnerHTML={{
          __html: `
            <svg width="120" height="70" viewBox="0 0 120 70">
              <defs>
                <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#EF4444"/>
                  <stop offset="25%" stop-color="#F59E0B"/>
                  <stop offset="50%" stop-color="#10B981"/>
                  <stop offset="75%" stop-color="#2563EB"/>
                  <stop offset="100%" stop-color="#1E40AF"/>
                </linearGradient>
              </defs>
              <path d="M10 65 A50 50 0 0 1 110 65" stroke="#E5E7EB" stroke-width="8" fill="none" stroke-linecap="round"/>
              <path d="M10 65 A50 50 0 0 1 110 65" stroke="url(#gaugeGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
              <line x1="60" y1="65" x2="88" y2="32" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
              <circle cx="60" cy="65" r="4" fill="#111827"/>
            </svg>
          `,
        }}
      />
    </View>
  );
}

function PortfolioChart() {
  return (
    <View style={styles.chartContainer}>
      <div
        style={{ width: "100%", height: 180 }}
        dangerouslySetInnerHTML={{
          __html: `
            <svg width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#2563EB" stop-opacity="0.12"/>
                  <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0 160 C50 155,80 148,120 135 S200 115,240 100 S320 80,360 70 S430 52,480 42 S560 28,600 20 V180 H0 Z" fill="url(#chartGrad)"/>
              <path d="M0 160 C50 155,80 148,120 135 S200 115,240 100 S320 80,360 70 S430 52,480 42 S560 28,600 20" stroke="#2563EB" stroke-width="2.5" fill="none"/>
              <circle cx="420" cy="52" r="5" fill="#2563EB"/>
              <line x1="420" y1="52" x2="420" y2="180" stroke="#2563EB" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
            </svg>
          `,
        }}
      />
      <View style={styles.chartTooltip}>
        <Text style={styles.chartTooltipDate}>Oct 14, 2023</Text>
        <Text style={styles.chartTooltipValue}>$1,388,400.00</Text>
      </View>
    </View>
  );
}

export default function Insights() {
  const sectors = [
    { name: "Technology", pct: "42%", color: "#2563EB" },
    { name: "Financials", pct: "18%", color: "#F59E0B" },
    { name: "Healthcare", pct: "15%", color: "#111827" },
    { name: "Other", pct: "25%", color: "#D1D5DB" },
  ];

  const cashFlowInsights = [
    {
      icon: "💡",
      title: "Surplus Opportunity",
      desc: "You spent 12% less on dining this month. Transfer $450 to your Growth basket to stay ahead of your 2024 goal.",
    },
    {
      icon: "🔄",
      title: "Recurring Audit",
      desc: "We detected two overlapping streaming subscriptions. Canceling XMedia+ would save you $180 annually.",
    },
    {
      icon: "📊",
      title: "Tax-Loss Harvesting",
      desc: "3 assets in your legacy portfolio are eligible for tax-loss harvesting. Potential benefit: $2,100.",
    },
  ];

  return (
    <View style={styles.container}>
      <Sidebar />

      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.mainContent}
      >
        <Header />

        {/* Page Header */}
        <Text style={styles.headerLabel}>Wealth Intelligence</Text>
        <Text style={styles.pageTitle}>Portfolio Insights</Text>
        <Text style={styles.pageSubtitle}>
          Your curated financial perspective, balancing algorithmic precision
          with long-term wealth preservation goals.
        </Text>

        {/* ─── Top Row: Active Signal + Market Sentiment ─── */}
        <View style={styles.topRow}>
          {/* Active Signal Card */}
          <View style={styles.signalCard}>
            <View style={styles.signalBadgeRow}>
              <View style={styles.signalDot} />
              <Text style={styles.signalBadgeText}>
                Active Signal: Rebalance Priority
              </Text>
            </View>

            <View style={styles.signalContent}>
              <View style={styles.signalTextBlock}>
                <Text style={styles.signalTitle}>
                  Your technology exposure has increased by 14.2% since last
                  quarter.
                </Text>
                <Text style={styles.signalDescription}>
                  Our algorithms suggest shifting 4% of gains into emerging
                  market debt and high-yield real estate to maintain your
                  risk-adjusted profile.
                </Text>
                <View style={styles.signalActions}>
                  <Pressable style={styles.reviewBtn}>
                    <Text style={styles.reviewBtnText}>Review Strategy</Text>
                  </Pressable>
                  <Pressable style={styles.dismissBtn}>
                    <Text style={styles.dismissBtnText}>Dismiss</Text>
                  </Pressable>
                </View>
              </View>
              <SignalChart />
            </View>
          </View>

          {/* Market Sentiment Card */}
          <View style={styles.sentimentCard}>
            <Text style={styles.sentimentSectionLabel}>Market Sentiment</Text>
            <SentimentGauge />
            <Text style={styles.sentimentLabel}>Optimistic</Text>
            <Text style={styles.sentimentScore}>Score: 74/100</Text>
            <View
              style={[
                styles.sentimentRow,
                { borderTopWidth: 1, borderTopColor: "#F3F4F6" },
              ]}
            >
              <Text style={styles.sentimentRowLabel}>Global Equities</Text>
              <Text style={styles.sentimentRowBullish}>Bullish</Text>
            </View>
            <View style={styles.sentimentRow}>
              <Text style={styles.sentimentRowLabel}>Fixed Income</Text>
              <Text style={styles.sentimentRowNeutral}>Neutral</Text>
            </View>
            <View style={[styles.sentimentRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.sentimentRowLabel}>Volatility Index</Text>
              <Text style={styles.sentimentRowLow}>Low</Text>
            </View>
          </View>
        </View>

        {/* ─── Middle Row: Performance + Allocation ─── */}
        <View style={styles.middleRow}>
          {/* Portfolio Performance Card */}
          <View style={styles.performanceCard}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View>
                <Text style={styles.performanceSectionLabel}>
                  Portfolio Performance
                </Text>
                <View style={styles.performanceValueRow}>
                  <Text style={styles.performanceValue}>$1,424,902.18</Text>
                  <Text style={styles.performanceChange}>+12.4%</Text>
                </View>
              </View>
              <View style={styles.performancePeriodRow}>
                {["1M", "3M", "1Y", "ALL"].map((p, i) => (
                  <Pressable
                    key={p}
                    style={
                      i === 3 ? styles.periodBtnActive : styles.periodBtn
                    }
                  >
                    <Text
                      style={
                        i === 3
                          ? styles.periodBtnTextActive
                          : styles.periodBtnText
                      }
                    >
                      {p}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
            <PortfolioChart />
          </View>

          {/* Sector Allocation Card */}
          <View style={styles.allocationCard}>
            <Text style={styles.allocationSectionLabel}>
              Sector Allocation
            </Text>
            {sectors.map((s) => (
              <View key={s.name} style={styles.allocationRow}>
                <View style={styles.allocationDotLabel}>
                  <View
                    style={[
                      styles.allocationDot,
                      { backgroundColor: s.color },
                    ]}
                  />
                  <Text style={styles.allocationName}>{s.name}</Text>
                </View>
                <Text style={styles.allocationPercent}>{s.pct}</Text>
              </View>
            ))}

            <View style={styles.allocationTagsRow}>
              <View style={styles.topPerformerTag}>
                <Text style={styles.topPerformerTagLabel}>Top Performer</Text>
                <Text style={styles.topPerformerTagTicker}>NVDA</Text>
                <Text style={styles.topPerformerTagChange}>+5.4%</Text>
              </View>
              <View style={styles.riskLevelTag}>
                <Text style={styles.riskLevelTagLabel}>Risk Level</Text>
                <Text style={styles.riskLevelTagValue}>Moderate</Text>
                <Text style={styles.riskLevelTagSub}>Balanced</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ─── Cash Flow Intelligence ─── */}
        <View style={styles.cashFlowSection}>
          <View style={styles.cashFlowHeader}>
            <View>
              <Text style={styles.cashFlowSectionLabel}>
                Cash Flow Intelligence
              </Text>
              <Text style={styles.cashFlowSubtitle}>
                Automated suggestions based on your November spending patterns.
              </Text>
            </View>
            <Pressable style={styles.cashFlowViewReport}>
              <Text style={styles.cashFlowViewReportText}>
                View Monthly Report
              </Text>
              <Text style={styles.cashFlowViewReportArrow}>→</Text>
            </Pressable>
          </View>

          <View style={styles.cashFlowCards}>
            {cashFlowInsights.map((item, index) => (
              <View key={item.title} style={{ flex: 1, flexDirection: "row" }}>
                {index > 0 && <View style={styles.insightDivider} />}
                <View style={styles.insightCard}>
                  <View style={styles.insightIconCircle}>
                    <Text style={styles.insightIcon}>{item.icon}</Text>
                  </View>
                  <View style={styles.insightTextBlock}>
                    <Text style={styles.insightTitle}>{item.title}</Text>
                    <Text style={styles.insightDescription}>{item.desc}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
