import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { DescriptiveText } from "../../../components/system/systemComponentLayout";
import { BorderButton } from "@/src/components/system/buttons";
import { useNavigation } from "@react-navigation/native";

const Logo = require("@/src/assets/images/mainlogo.png");

const SignupSplash = () => {
  const navigation = useNavigation();

  useState(() => {
    setInterval(() => {
      navigation.navigate("Email");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center p-4 bg-background">
      <Image source={Logo} />
      <DescriptiveText text="Signup an account to get access to KaryGo's services :)" />
    </View>
  );
};

export default SignupSplash;
