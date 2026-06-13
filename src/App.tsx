import { View } from "react-native";
import { ThemeProvider } from "./context/ThemeProvider";
import { MobileNavProvider } from "./context/MobileNavProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DashBoard from "./screens/DashBoard/DashBoard";
import Insights from "./screens/Insights/Insights";
import Budget from "./screens/Budget/Budget";
import useAnalytics from "./hooks/useAnalytics";
import { useEffect } from "react";

// Sends a GA page_view whenever the route changes. Rendered inside the router
// so it has access to the current location.
function RouteAnalytics() {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname, trackPageView]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <MobileNavProvider>
        <BrowserRouter>
          <RouteAnalytics />
          <Routes>
            <Route
              path="/"
              element={
                <View style={{ flex: 1, height: "100%" }}>
                  <DashBoard />
                </View>
              }
            />
            <Route
              path="/insights"
              element={
                <View style={{ flex: 1, height: "100%" }}>
                  <Insights />
                </View>
              }
            />
            <Route
              path="/budget"
              element={
                <View style={{ flex: 1, height: "100%" }}>
                  <Budget />
                </View>
              }
            />
          </Routes>
        </BrowserRouter>
      </MobileNavProvider>
    </ThemeProvider>
  );
}
