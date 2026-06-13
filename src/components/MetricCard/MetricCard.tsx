import { Text, View } from "react-native";
import { createStyles } from "./MetricCard.styles";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import { useMemo } from "react";

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  color: string;
};

export default function MetricCard(props: MetricCardProps) {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.value}>{props.value}</Text>
      <Text style={[styles.change, { color: props.color }]}>
        {props.change}
      </Text>
    </View>
  );
}
