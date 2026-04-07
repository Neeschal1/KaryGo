import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../ui/home/homeLayout";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../utils/api_url";
import JWTAuthorization from "../utils/authorization";
import { useNavigation } from "@react-navigation/native";

const homeElements = async () => {
  const auth = await JWTAuthorization();
  try {
    axios.get(`${url}`, { auth });
  } catch (err) {
    console.log("Error: ", err);
  }
};

const Home = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("accessJWTToken");
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center bg-background">
        {/* <Topbar /> */}
        <TouchableOpacity
          onPress={handleLogout}
          className="flex p-5 bg-red-500"
        >
          <Text className="color-white">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
