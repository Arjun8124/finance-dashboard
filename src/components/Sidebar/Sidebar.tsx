import { View, Text, Pressable } from "react-native";
import { styles } from "./Sidebar.styles";

export default function Sidebar() {
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
          <Pressable style={styles.activeItem}>
            <Text style={styles.activeIcon}>📊</Text>
            <Text style={styles.active}>Dashboard</Text>
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuIcon}>💳</Text>
            <Text style={styles.item}>Accounts</Text>
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuIcon}>📄</Text>
            <Text style={styles.item}>Transactions</Text>
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuIcon}>📁</Text>
            <Text style={styles.item}>Budgets</Text>
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuIcon}>💡</Text>
            <Text style={styles.item}>Insights</Text>
          </Pressable>
        </View>
      </View>

      <View>
        {/* Pro Access Card */}
        <View style={styles.proCard}>
          <Text style={styles.proLabel}>PRO ACCESS</Text>
          <Text style={styles.proTitle}>
            Unlock AI Strategy{"\n"}Insights
          </Text>
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