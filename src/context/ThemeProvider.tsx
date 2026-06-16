import React, { useCallback, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext } from "./ThemeContext";
import { darkColors, lightColors } from "../constants/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useLocalStorage<boolean>("theme-dark", true);
  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = useCallback(() => setIsDark(prev => !prev),[setIsDark])

  const values = useMemo(() => {
    return { isDark, colors, toggleTheme}
  },[isDark,colors,toggleTheme])

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  );
}
