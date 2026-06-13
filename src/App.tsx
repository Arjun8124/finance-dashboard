import { View } from "react-native";
import DashBoard from "./screens/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insights from "./screens/Insights/Insights";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <View
              style={{
                flex: 1,
                height: "100%",
              }}
            >
              <DashBoard />
            </View>
          }
        />
        <Route
          path="/insights"
          element={
            <View
              style={{
                flex: 1,
                height: "100%",
              }}
            >
              <Insights />
            </View>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
