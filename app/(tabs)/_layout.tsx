import { Slot, Tabs } from "expo-router";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function RootLayout() {

  const isDesktop = useIsDesktop();
  const insets = useSafeAreaInsets();

  if (isDesktop) {
    return <Slot />;
  }

  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#007AFF",
      tabBarInactiveTintColor: "#8E8E93",
      tabBarStyle: {
        paddingBottom: insets.bottom
      }
    }}
    >

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          )
        }}
      />
      
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmarks-outline" color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-outline" color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="lease"
        options={{
          title: "Lease",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="business-outline" color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          )
        }}
      />

    </Tabs>
  );
}
