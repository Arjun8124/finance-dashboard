import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext } from "./ThemeContext";
import { darkColors, lightColors } from "../constants/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useLocalStorage<boolean>("theme-dark", true);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
