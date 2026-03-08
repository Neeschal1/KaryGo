import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
  return (
    <SafeAreaView className="flex-1 flex">
      <View className="flex flex-1 w-full h-full justify-center items-center">
        <Text className="text-blue-600">SplashScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
