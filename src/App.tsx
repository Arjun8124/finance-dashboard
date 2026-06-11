import { View } from "react-native";
import DashBoard from "./screens/DashBoard/DashBoard";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
      }}
    >
      <DashBoard />
    </View>
  );
}
