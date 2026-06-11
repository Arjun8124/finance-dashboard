import { View, ScrollView } from "react-native";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import MetricCard from "../../components/MetricCard";
import { styles } from "./DashBoard.styles";
import StrategyCard from "../../components/StrategyCard";
import AlertCard from "../../components/AlertCard";
import SpendingComposition from "../../components/SpendingComposition";

export default function DashBoard() {
  return (
    <View style={styles.container}>
      <Sidebar />

      <ScrollView style={styles.main} contentContainerStyle={styles.mainContent}>
        <Header />
        <View style={styles.metrics}>
          <MetricCard
            title="Total Net Worth"
            value="$1,245,678"
            change="+4.2% today"
            color="#10B981"
          />
          <MetricCard
            title="Liquid Cash"
            value="$120,340"
            change="-1.5% today"
            color="#EF4444"
          />
          <MetricCard
            title="Investment Portfolio"
            value="$985,338"
            change="+2.8% today"
            color="#3B82F6"
          />
        </View>
        <View style={styles.strategy}>
          <StrategyCard />

          <View
            style={{
              width: 400,
              gap: 16,
            }}
          >
            <AlertCard
              title="Subscription Spike"
              description="3 new recurring charges detected from Cloud SaaS."
            />

            <AlertCard
              title="Emergency Fund Cap"
              description="Your rainy day fund reached its target."
            />

            <AlertCard
              title="Dividend Reinvestment"
              description="AAPL and MSFT paid dividends today."
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 24,
          }}
        >
          <SpendingComposition />

          {/* Transaction Table goes here later */}
        </View>
      </ScrollView>
    </View>
  );
}

