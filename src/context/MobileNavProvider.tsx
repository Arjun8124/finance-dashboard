import { useState } from "react";
import { MobileNavContext } from "./MobileNavContext";

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <MobileNavContext.Provider
      value={{
        isSidebarOpen,
        openSidebar: () => setIsSidebarOpen(true),
        closeSidebar: () => setIsSidebarOpen(false),
      }}
    >
      {children}
    </MobileNavContext.Provider>
  );
}
