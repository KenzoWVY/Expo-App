import { useIsDesktop } from "@/hooks/useIsDesktop";
import SavedDesktop from "@/screens/tabs/desktop/SavedDesktop";
import { Text } from "react-native";

export default function Saved() {
  if (useIsDesktop()) {
    return <SavedDesktop />;
  }

  return <Text>Saved Mobile</Text>;
}