import { View, ActivityIndicator } from "react-native";
import { ThemeProvider } from "./context/ThemeProvider";
import { MobileNavProvider } from "./context/MobileNavProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import useAnalytics from "./hooks/useAnalytics";
import { lazy, Suspense, useEffect } from "react";

// Route screens are code-split so each one only loads when first visited.
const DashBoard = lazy(() => import("./screens/DashBoard/DashBoard"));
const Insights = lazy(() => import("./screens/Insights/Insights"));
const Budget = lazy(() => import("./screens/Budget/Budget"));

const pageStyle = { flex: 1, height: "100%" } as const;

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

// Shown while a lazy route chunk is loading.
function RouteFallback() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MobileNavProvider>
        <BrowserRouter>
          <RouteAnalytics />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route
                path="/"
                element={
                  <View style={pageStyle}>
                    <DashBoard />
                  </View>
                }
              />
              <Route
                path="/insights"
                element={
                  <View style={pageStyle}>
                    <Insights />
                  </View>
                }
              />
              <Route
                path="/budget"
                element={
                  <View style={pageStyle}>
                    <Budget />
                  </View>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MobileNavProvider>
    </ThemeProvider>
  );
}
