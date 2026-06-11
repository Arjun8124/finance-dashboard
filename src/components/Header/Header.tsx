import { View, Text, TextInput } from "react-native";
import { styles } from "./Header.style";

export default function Header() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search portfolio or markets..."
        placeholderTextColor="#94A3B8"
        style={styles.searchInput}
      />

      <View style={styles.navContainer}>
        <Text style={styles.activeNav}>Portfolio</Text>
        <Text style={styles.navItem}>Analysis</Text>
        <Text style={styles.navItem}>Market</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.navItem}>Settings</Text>
        <View style={styles.profileCircle} />
      </View>
    </View>
  );
}