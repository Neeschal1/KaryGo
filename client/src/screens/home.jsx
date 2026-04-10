import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Topbar, FeaturedJobs, QuickActions } from "../ui/home/homeLayout";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../utils/api_url";
import JWTAuthorization from "../utils/authorization";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

// const scrollBar = [
//   {
//     index: 1,
//     btnName: "All",
//   },
//   {
//     index: 2,
//     btnName: "Remote",
//   },
//   {
//     index: 3,
//     btnName: "Design",
//   },
// ];

// const homeElements = async () => {
//   const auth = await JWTAuthorization();
//   try {
//     axios.get(`${url}`, { auth });
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// };

const Home = () => {
  const navigation = useNavigation();

  // const handleLogout = async () => {
  //   await AsyncStorage.removeItem("accessJWTToken");
  //   navigation.navigate("Welcome");
  // };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 flex items-center justify-center w-full p-screen">
        <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
          <View className="flex-1 items-center justify-center gap-large bg-background">
            <Topbar />
            <View className="w-full flex flex-1">
              <FeaturedJobs />
              <QuickActions />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
