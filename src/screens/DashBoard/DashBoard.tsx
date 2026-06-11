import { View } from "react-native";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import MetricCard from "../../components/MetricCard";
export default function DashBoard() {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#020617",
      }}
    >
      <Sidebar />

      <View
        style={{
          flex: 1,
          padding: 24,
        }}
      >
        <Header />
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 20,
          }}
        >
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
      </View>
    </View>
  );
}
