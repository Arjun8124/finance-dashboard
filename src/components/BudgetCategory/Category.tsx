import { View, Text } from "react-native";
import { createStyles } from "./Category.styles";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import { memo, useMemo } from "react";

type BudgetCategoryCardProps = {
  title: string;
  spent: string;
  limit: string;
  percentage: number;
  status: "OPTIMAL" | "HEALTHY" | "CRITICAL" | "FIXED";
  color: string;
};

function BudgetCategoryCard(props: BudgetCategoryCardProps) {
  const { colors } = useTheme();
  const { isMobile } = useResponsive();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>🎯</Text>
        </View>
      </View>
      <View style={styles.amounts}>
        <Text style={styles.spent}>{props.spent}</Text>
        <Text style={styles.limit}>of {props.limit}</Text>
      </View>
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressFill,
            { width: `${props.percentage}%`, backgroundColor: props.color },
          ]}
        />
      </View>
      <View style={styles.footer}>
        <Text style={[styles.status, { color: props.color }]}>
          {props.status}
        </Text>
        <Text style={styles.percentage}>{props.percentage}% USED</Text>
      </View>
    </View>
  );
}

export default memo(BudgetCategoryCard);
