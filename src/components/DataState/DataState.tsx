import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { typography } from "../../constants/typography";

type DataStateProps = {
  loading: boolean;
  error: Error | null;
  isEmpty?: boolean;
  onRetry?: () => void;
  emptyMessage?: string;
  children: React.ReactNode;
};

/**
 * Renders loading / error / empty UI for a data-driven section and only shows
 * `children` once data is present. Keeps that branching out of the screens.
 */
export default function DataState({
  loading,
  error,
  isEmpty,
  onRetry,
  emptyMessage = "Nothing to show yet.",
  children,
}: DataStateProps) {
  const { colors } = useTheme();

  if (loading) {
    return (
      <View
        accessibilityRole="progressbar"
        accessibilityLabel="Loading"
        style={{ paddingVertical: 48, alignItems: "center", gap: 12 }}
      >
        <ActivityIndicator color={colors.primary} />
        <Text style={{ color: colors.textSecondary, fontSize: typography.body }}>
          Loading…
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ paddingVertical: 48, alignItems: "center", gap: 12 }}>
        <Text style={{ color: colors.danger, fontSize: typography.body, textAlign: "center" }}>
          {error.message}
        </Text>
        {onRetry && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Retry loading"
            onPress={onRetry}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 8,
              backgroundColor: colors.primary,
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: typography.body }}>Retry</Text>
          </Pressable>
        )}
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View style={{ paddingVertical: 48, alignItems: "center" }}>
        <Text style={{ color: colors.textMuted, fontSize: typography.body }}>
          {emptyMessage}
        </Text>
      </View>
    );
  }

  return <>{children}</>;
}
