import { View, Text, Pressable } from "react-native";
import { createStyles } from "./Sidebar.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useMemo } from "react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const navItems = [
    { icon: "📊", label: "Dashboard", path: "/" },
    { icon: "💳", label: "Accounts", path: "/accounts" },
    { icon: "📄", label: "Transactions", path: "/transactions" },
    { icon: "📁", label: "Budgets", path: "/budget" },
    { icon: "💡", label: "Insights", path: "/insights" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.brandRow}>
          <View style={styles.brandIcon}>
            <Text style={styles.brandIconText}>₿</Text>
          </View>
          <View>
            <Text style={styles.logo}>Proton Finance</Text>
            <Text style={styles.tagline}>WEALTH CURATOR</Text>
          </View>
        </View>

        <View style={styles.menu}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Pressable
                key={item.path}
                style={[styles.menuItem, isActive && styles.activeItem]}
                onPress={() => navigate(item.path)}
              >
                <Text style={[styles.menuIcon, isActive && styles.activeIcon]}>
                  {item.icon}
                </Text>
                <Text style={[styles.item, isActive && styles.active]}>
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View>
        <View style={styles.proCard}>
          <Text style={styles.proLabel}>PRO ACCESS</Text>
          <Text style={styles.proTitle}>Unlock AI Strategy{"\n"}Insights</Text>
          <Pressable style={styles.proButton}>
            <Text style={styles.proButtonText}>Upgrade to Premium</Text>
          </Pressable>
        </View>
        <View style={styles.bottomLinks}>
          <Text style={styles.bottomLink}>⊙ Help Center</Text>
          <Text style={styles.bottomLink}>⊳ Logout</Text>
        </View>
      </View>
    </View>
  );
}
