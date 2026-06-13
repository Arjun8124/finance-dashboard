import { createContext, useContext } from "react";
import type { ThemeColors } from "../constants/theme";
import { darkColors } from "../constants/theme";

export type ThemeContextType = {
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  colors: darkColors,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
