import { View, Text } from "react-native";
// import { styles } from "./Insights.styles";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AISignalCard from "../../components/AISignalCard";
import MarketSentiment from "../../components/MarketSentimentCard";
import AlertCard from "../../components/AlertCard";
import PerformanceChart from "../../components/PerformanceChart";
import SectorAllocation from "../../components/SectorAllocation";
import TopPerformer from "../../components/TopPerformer";
import RiskLevel from "../../components/RiskLevel";
import { styles } from "./Insights.styles";

export default function Insights() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <Header />
        <Text style={styles.header}>Wealth Intelligence</Text>
        <Text style={styles.title}>Portfolio Insights</Text>
        <Text style={styles.subtitle}>
          Your curated financial perspective, balancing algorithmic precision
          with long- term wealth preservation goals.
        </Text>

        <View style={styles.row}>
          <AISignalCard />
          <MarketSentiment />
        </View>
        <PerformanceChart />
        <View style={styles.row}>
          <SectorAllocation />
          <TopPerformer />
          <RiskLevel />
        </View>
        <AlertCard
          title="Surplus Opportunity"
          description="Transfer $450 to your Growth bucket."
        />

        <AlertCard
          title="Recurring Audit"
          description="Canceling Media+ saves $180 annually."
        />

        <AlertCard
          title="Tax Loss Harvesting"
          description="Potential tax benefit of $2100."
        />
      </View>
    </View>
  );
}
