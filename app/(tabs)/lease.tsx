import { useIsDesktop } from "@/hooks/useIsDesktop";
import LeaseDesktop from "@/screens/tabs/desktop/LeaseDesktop";
import { Text } from "react-native";

export default function Lease() {
  if (useIsDesktop()) {
    return <LeaseDesktop />;
  }

  return <Text>Lease Mobile</Text>;
}