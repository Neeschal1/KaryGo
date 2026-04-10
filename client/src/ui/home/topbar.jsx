import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {SubTitleText, TitleText} from '@/src/components/systemComponentLayout'

const profileImage = require("@/src/assets/images/profile.jpg");

const Topbar = () => {
  return (
    <SafeAreaView className="flex-1 bg-background justify-center items-center">
      <View className="flex gap-large">
        <View className="flex-1 items-center justify-center bg-background flex-row gap-3">
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            className=""
            source={profileImage}
          />
          <View>
            <Text className="font-Quicksandsemibold text-2xl">
              Good Morning, Diya 👋
            </Text>
            <TitleText text="Find your dream job today" />
          </View>
          <TouchableOpacity className="bg-white p-4 rounded-full">
            <Ionicons name="notifications-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-1">
          <TouchableOpacity className="border border-descriptiveText font-Quicksandmedium text-ddescriptive rounded-button w-full py-5 pl-4">
            <SubTitleText text="Search jobs, skills or anything..." />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Topbar;
