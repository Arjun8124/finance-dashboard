import { View, Text } from "react-native";
import { createStyles } from "./AlertCard.styles";
import { useTheme } from "../../context/ThemeContext";
import { memo, useMemo } from "react";

type AlertCardProps = {
  title: string;
  description: string;
  iconColor?: string;
};

function AlertCard({
  title,
  description,
  iconColor = "#F59E0B",
}: AlertCardProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <View style={[styles.iconCircle, { backgroundColor: iconColor + "20" }]}>
        <View style={[styles.iconDot, { backgroundColor: iconColor }]} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export default memo(AlertCard);
