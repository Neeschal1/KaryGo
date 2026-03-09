import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import {
  PrimaryButton,
  SecondaryButton,
  TextualButtonSecondary,
  BorderButton,
  AuthTextCustomInput,
  DescriptiveText,
  TitleText,
  SubTitleText,
} from "../../components/system/systemComponentLayout";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeImage = require("../../assets/images/welcomeImage.png");
const logo = require("../../assets/images/mainlogo.png");

const Welcome = () => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <ImageBackground
        source={WelcomeImage}
        className="w-full h-full flex justify-end items-end"
      >
        <View className="w-full gap-large bg-background py-8 rounded-3xl p-screen">
          <View className="w-full items-center">
            <Image source={logo} />
            <DescriptiveText text="Go further in your career :)" />
          </View>
          <View className="w-full gap-mid">
            <SecondaryButton text="Login" navigatingScreen="Login" />
            <PrimaryButton text="Get Started" navigatingScreen="SignupSplash" />
          </View>
          <View className="flex flex-row gap-extrasmall items-center justify-center">
            <TextualButtonSecondary text="KaryGo" navigatingScreen={" "} />
            <SubTitleText text="© 2026. All rights reserved." />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
