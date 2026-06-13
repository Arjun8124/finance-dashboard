import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { View, Text, Pressable } from "react-native";
import { styles } from "./Performance.styles";

const data = [
  { month: "Jan", value: 1180000 },
  { month: "Feb", value: 1220000 },
  { month: "Mar", value: 1200000 },
  { month: "Apr", value: 1270000 },
  { month: "May", value: 1310000 },
  { month: "Jun", value: 1280000 },
  { month: "Jul", value: 1360000 },
  { month: "Aug", value: 1390000 },
  { month: "Sep", value: 1424902 },
];

const periods = ["1M", "3M", "1Y", "ALL"];

export default function PerformanceChart() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.sectionLabel}>Portfolio Performance</Text>
          <View style={styles.amountRow}>
            <Text style={styles.amount}>$1,424,902.18</Text>
            <Text style={styles.change}>+12.4%</Text>
          </View>
        </View>
        <View style={styles.periodRow}>
          {periods.map((p, i) => (
            <Pressable
              key={p}
              style={i === 3 ? styles.periodBtnActive : styles.periodBtn}
            >
              <Text
                style={i === 3 ? styles.periodTextActive : styles.periodText}
              >
                {p}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 11 }}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              border: "1px solid #334155",
              borderRadius: 8,
              color: "#FFFFFF",
              fontSize: 13,
            }}
            labelStyle={{ color: "#94A3B8" }}
            formatter={(value: number) =>
              [`$${value.toLocaleString()}`, "Value"]
            }
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="url(#chartGradient)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </View>
  );
}
