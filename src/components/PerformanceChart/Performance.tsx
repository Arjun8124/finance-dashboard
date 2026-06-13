import { View, Text, Pressable } from "react-native";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { createStyles } from "./Performance.styles";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import { useMemo } from "react";

const data = [
  { name: "Jan", val: 4000 },
  { name: "Feb", val: 3000 },
  { name: "Mar", val: 5000 },
  { name: "Apr", val: 4500 },
  { name: "May", val: 6000 },
  { name: "Jun", val: 5500 },
  { name: "Jul", val: 7000 },
];

export default function PerformanceChart() {
  const { colors, isDark } = useTheme();
  const { isMobile } = useResponsive();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);
  const periods = ["1W", "1M", "3M", "YTD", "1Y", "ALL"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Total Portfolio Value</Text>
          <View style={styles.amountRow}>
            <Text style={styles.amount}>$1,248,500.00</Text>
            <Text style={styles.change}>+12.4%</Text>
          </View>
        </View>
        <View style={styles.periodRow}>
          {periods.map((p) => (
            <Pressable key={p} style={[styles.periodBtn, p === "YTD" && styles.periodBtnActive]}>
              <Text style={[styles.periodText, p === "YTD" && styles.periodTextActive]}>{p}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.primary} stopOpacity={0.3} />
                <stop offset="95%" stopColor={colors.primary} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke={colors.textMuted} fontSize={12} tickLine={false} axisLine={false} />
            <YAxis hide={true} domain={["dataMin - 1000", "dataMax + 1000"]} />
            <Tooltip contentStyle={{ backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF", borderColor: isDark ? "#333" : "#E5E7EB", color: colors.text }} itemStyle={{ color: colors.primary }} />
            <Area type="monotone" dataKey="val" stroke={colors.primary} strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
          </AreaChart>
        </ResponsiveContainer>
      </View>
    </View>
  );
}
