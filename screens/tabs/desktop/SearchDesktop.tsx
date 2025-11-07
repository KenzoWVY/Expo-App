import Sidebar from "@/components/Sidebar";
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function SearchDesktop() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Sidebar />
      <View style={{ flex: 1 }}>
        {/* Main content for SearchDesktop goes here */}
      </View>
    </View>
  )
}