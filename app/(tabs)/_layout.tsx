import { Slot, Tabs } from "expo-router";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {

  const isDesktop = useIsDesktop();

  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#007AFF",
      tabBarInactiveTintColor: "#8E8E93",
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
