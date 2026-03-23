import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AddJobs = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center bg-background">
        <Text>AddJobs</Text>
      </View>
    </SafeAreaView>
  );
};

export default AddJobs;
