import { useWindowDimensions } from "react-native";

// Single breakpoint: below 768px we treat the layout as mobile.
export default function useResponsive() {
  const { width } = useWindowDimensions();
  return { isMobile: width < 768 };
}
