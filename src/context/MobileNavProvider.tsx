import { useCallback, useMemo, useState } from "react";
import { MobileNavContext } from "./MobileNavContext";

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setIsSidebarOpen(true),[])
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), [])

  const values = useMemo(() => {
    return {
        isSidebarOpen,
        openSidebar,
        closeSidebar
      }
  },[isSidebarOpen,openSidebar,closeSidebar])

  return (
    <MobileNavContext.Provider
      value={values}
    >
      {children}
    </MobileNavContext.Provider>
  );
}
