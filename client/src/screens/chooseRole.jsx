import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DescriptiveText,
  PrimaryButton,
  SubTitleText,
  TextualButtonSecondary,
  Title,
} from "../components/systemComponentLayout";

const logo = require("@/src/assets/images/mainlogo.png");

const ChooseRole = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center bg-background p-screen gap-large">
        <View className="items-center">
          <Image source={logo} />
          <DescriptiveText text="Begin to KaryGo by choosing which role best suits your" />
        </View>
        <View className="flex items-center justify-center gap-large">
          <Title text="Choose your Role" />
          <View className="flex-row w-full justify-between gap-small">
            <View className="flex w-1/2">
              <PrimaryButton navigatingScreen="SeekerProfile" text="Seeker" />
            </View>
            <View className="flex w-1/2">
              <PrimaryButton navigatingScreen="RecruiterProfile" text="Recruiter" />
            </View>
          </View>
        </View>
        <View className="flex flex-row gap-extrasmall items-center justify-center">
          <TextualButtonSecondary text="KaryGo" navigatingScreen={" "} />
          <SubTitleText text="© 2026. All rights reserved." />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseRole;
