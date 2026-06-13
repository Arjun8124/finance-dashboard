import { useState } from "react";
import { MobileNavContext } from "./MobileNavContext";

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <MobileNavContext.Provider 
      value={{ 
        isSidebarOpen, 
        openSidebar: () => { console.log("Opening sidebar!"); setIsSidebarOpen(true); }, 
        closeSidebar: () => { console.log("Closing sidebar!"); setIsSidebarOpen(false); } 
      }}
    >
      {children}
    </MobileNavContext.Provider>
  );
}
