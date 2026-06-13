import { View, Text, TextInput, Pressable } from "react-native";
import { createStyles } from "./Header.style";
import { useNavigate, useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { useEffect, useState, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";
import useResponsive from "../../hooks/useResponsive";
import { useMobileNav } from "../../context/MobileNavContext";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, colors, toggleTheme } = useTheme();
  const { isMobile } = useResponsive();
  const { openSidebar } = useMobileNav();
  const styles = useMemo(() => createStyles(colors, isMobile), [colors, isMobile]);

  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce<string>(search, 500);

  useEffect(() => {
    console.log("Searching Portfolio:", debouncedSearch);
  }, [debouncedSearch]);

  return (
    <View style={styles.container}>
      {isMobile && (
        <Pressable style={styles.hamburgerMenu} onPress={openSidebar}>
          <Text style={styles.hamburgerText}>☰</Text>
        </Pressable>
      )}

      <View style={styles.searchContainer}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder={isMobile ? "Search..." : "Search portfolio or markets..."}
          placeholderTextColor={colors.textMuted}
          style={styles.searchInput}
        />
      </View>

      {!isMobile && (
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
      )}

      <View style={styles.rightContainer}>
        <Pressable style={styles.themeToggle} onPress={toggleTheme}>
          <Text style={styles.themeToggleText}>{isDark ? "☀️" : "🌙"}</Text>
        </Pressable>
        {!isMobile && <Text style={styles.navItem}>Settings</Text>}
        <View style={styles.profileCircle} />
      </View>
    </View>
  );
}
