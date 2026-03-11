import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const splashLogo = require("../assets/images/splashLogo.png");

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(()=>{
        navigation.navigate("Welcome")
    }, 2000)
  }, []);
  
  return (
    <SafeAreaView className="flex-1 flex bg-primary">
      <View className="flex bg-splashBackground flex-1 w-full h-full justify-center items-center">
        <Image source={splashLogo} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
