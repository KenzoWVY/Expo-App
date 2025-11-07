import { useIsDesktop } from "@/hooks/useIsDesktop";
import MessagesDesktop from "@/screens/tabs/desktop/MessagesDesktop";
import { Text } from "react-native";

export default function Messages() {
  if (useIsDesktop()) {
    return <MessagesDesktop />;
  }

  return <Text>Messages Mobile</Text>;
}