import { View, Text, TextInput } from "react-native";
import { styles } from "./Header.style";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { useEffect, useState } from "react";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce<string>(search, 500);

  useEffect(() => {
    console.log("Searching Portfolio:", debouncedSearch);
  }, [debouncedSearch]);

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search portfolio or markets..."
        placeholderTextColor="#94A3B8"
        style={styles.searchInput}
      />

      <View style={styles.navContainer}>
        <Text
          style={location.pathname === "/" ? styles.activeNav : styles.navItem}
          onPress={() => navigate("/")}
        >
          Portfolio
        </Text>
        <Text
          style={
            location.pathname === "/budget" ? styles.activeNav : styles.navItem
          }
          onPress={() => navigate("/budget")}
        >
          Analysis
        </Text>
        <Text style={styles.navItem}>Market</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.navItem}>Settings</Text>
        <View style={styles.profileCircle} />
      </View>
    </View>
  );
}
