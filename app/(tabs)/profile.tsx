import { useIsDesktop } from "@/hooks/useIsDesktop";
import ProfileDesktop from "@/screens/tabs/desktop/ProfileDesktop";
import { Text } from "react-native";

export default function Profile() {
  if (useIsDesktop()) {
    return <ProfileDesktop />;
  }

  return <Text>Profile Mobile</Text>;
}