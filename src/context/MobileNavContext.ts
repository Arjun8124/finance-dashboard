import { createContext, useContext } from "react";

export type MobileNavContextType = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const MobileNavContext = createContext<MobileNavContextType>({
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
});

export function useMobileNav() {
  return useContext(MobileNavContext);
}
