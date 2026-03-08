import "../global.css";
import { useFonts } from "expo-font";
import StackNavigation from "../src/constants/navigations/stackNavigation";
import Fonts from "../src/utils/fonts";

export default function RootLayout() {
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return null;
  }

  return <StackNavigation />;
}
