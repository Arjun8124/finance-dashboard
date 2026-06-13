import { View, Text, TextInput, Pressable } from "react-native";
import { createStyles } from "./Header.style";
import { useNavigate, useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { useEffect, useState, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, colors, toggleTheme } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

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
        placeholderTextColor={colors.textMuted}
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
        <Pressable style={styles.themeToggle} onPress={toggleTheme}>
          <Text style={styles.themeToggleText}>{isDark ? "☀️" : "🌙"}</Text>
        </Pressable>
        <Text style={styles.navItem}>Settings</Text>
        <View style={styles.profileCircle} />
      </View>
    </View>
  );
}
