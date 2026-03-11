import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Email = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="bg-background flex flex-1 items-center justify-center">
        <Text>Email</Text>
      </View>
    </SafeAreaView>
  );
};

export default Email;
