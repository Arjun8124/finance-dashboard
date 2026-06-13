import { View, Text, Pressable } from "react-native";
import { styles } from "./Sidebar.styles";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

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
          <Pressable
            style={[
              styles.menuItem,
              location.pathname === "/" && styles.activeItem,
            ]}
            onPress={() => navigate("/")}
          >
            <Text
              style={[
                styles.menuIcon,
                location.pathname === "/" && styles.activeIcon,
              ]}
            >
              📊
            </Text>
            <Text
              style={[styles.item, location.pathname === "/" && styles.active]}
            >
              Dashboard
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.menuItem,
              location.pathname === "/accounts" && styles.activeItem,
            ]}
          >
            <Text style={styles.menuIcon}>💳</Text>
            <Text
              style={[
                styles.item,
                location.pathname === "/accounts" && styles.active,
              ]}
            >
              Accounts
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.menuItem,
              location.pathname === "/transactions" && styles.activeItem,
            ]}
          >
            <Text style={styles.menuIcon}>📄</Text>
            <Text
              style={[
                styles.item,
                location.pathname === "/transactions" && styles.active,
              ]}
            >
              Transactions
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.menuItem,
              location.pathname === "/budget" && styles.activeItem,
            ]}
            onPress={() => navigate("/budget")}
          >
            <Text style={styles.menuIcon}>📁</Text>
            <Text
              style={[
                styles.item,
                location.pathname === "/budget" && styles.active,
              ]}
            >
              Budgets
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.menuItem,
              location.pathname === "/insights" && styles.activeItem,
            ]}
            onPress={() => navigate("/insights")}
          >
            <Text style={styles.menuIcon}>💡</Text>
            <Text
              style={[
                styles.item,
                location.pathname === "/insights" && styles.active,
              ]}
            >
              Insights
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        {/* Pro Access Card */}
        <View style={styles.proCard}>
          <Text style={styles.proLabel}>PRO ACCESS</Text>
          <Text style={styles.proTitle}>Unlock AI Strategy{"\n"}Insights</Text>
          <Pressable style={styles.proButton}>
            <Text style={styles.proButtonText}>Upgrade to Premium</Text>
          </Pressable>
        </View>

        {/* Bottom Links */}
        <View style={styles.bottomLinks}>
          <Text style={styles.bottomLink}>⊙ Help Center</Text>
          <Text style={styles.bottomLink}>⊳ Logout</Text>
        </View>
      </View>
    </View>
  );
}
