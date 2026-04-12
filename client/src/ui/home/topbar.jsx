import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const homeLogo = require("@/src/assets/images/homeLogo.png");

const Topbar = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const navigation = useNavigation();

  return (
    <View className="w-full">
      <View className="w-full flex-row items-center mt-[-10] mb-5 justify-between bg-background px-2 py-2">
        <View className="flex-row items-center flex-shrink justify-center">
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={homeLogo}
              style={{ height: 40, width: 70, borderRadius: 50 }}
            />
          </TouchableOpacity>

          <Text
            numberOfLines={1}
            className="font-Quicksandsemibold text-2xl ml-1"
          >
            KaryGo
          </Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity className="bg-white p-3 rounded-full mr-2">
            <Ionicons name="notifications-outline" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-3 rounded-full">
            <Ionicons name="search-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Topbar;
