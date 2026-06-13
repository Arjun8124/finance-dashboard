import { View } from "react-native";
import DashBoard from "./screens/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Insights from "./screens/Insights/Insights";
import Budget from "./screens/Budget/Budget";
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
        <Route
          path="/budget"
          element={
            <View
              style={{
                flex: 1,
                height: "100%",
              }}
            >
              <Budget />
            </View>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
