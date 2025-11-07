import { useIsDesktop } from "@/hooks/useIsDesktop";
import SearchDesktop from "@/screens/tabs/desktop/SearchDesktop";
import { Text } from "react-native";

export default function Search() {
  if (useIsDesktop()) {
    return <SearchDesktop />;
  }

  return <Text>Search Mobile</Text>;
}