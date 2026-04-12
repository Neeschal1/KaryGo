import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {

  const navigation = useNavigation()

  const handleLogout = async () => {
    await AsyncStorage.removeItem("accessJWTToken");
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center bg-background">
        <Text>Profile</Text>
        <Pressable className="p-3 bg-red-500" onPressIn={handleLogout}>
          <Text className="text-white">Log Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
