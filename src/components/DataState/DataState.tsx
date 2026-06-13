import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type DataStateProps = {
  loading: boolean;
  error: Error | null;
  isEmpty?: boolean;
  onRetry?: () => void;
  emptyMessage?: string;
  children: React.ReactNode;
};

// Renders loading / error / empty UI; shows `children` only once data is ready.
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
        <Text style={{ color: colors.textSecondary, fontSize: 14 }}>
          Loading…
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ paddingVertical: 48, alignItems: "center", gap: 12 }}>
        <Text style={{ color: colors.danger, fontSize: 14, textAlign: "center" }}>
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
            <Text style={{ color: "#FFFFFF", fontSize: 14 }}>Retry</Text>
          </Pressable>
        )}
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View style={{ paddingVertical: 48, alignItems: "center" }}>
        <Text style={{ color: colors.textMuted, fontSize: 14 }}>
          {emptyMessage}
        </Text>
      </View>
    );
  }

  return <>{children}</>;
}
