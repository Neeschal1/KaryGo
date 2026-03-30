import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../ui/home/homeLayout";
import axios from "axios";
import url from "../utils/api_url";
import JWTAuthorization from '../utils/authorization'

const homeElements = async () => {
  const auth = await JWTAuthorization()
  try {
    axios.get(`${url}`, {auth})
  } catch (err) {
    console.log("Error: ", err)
  }
};

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center bg-background">
        <Topbar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
