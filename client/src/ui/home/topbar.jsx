import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  SubTitleText,
  TitleText,
} from "@/src/components/systemComponentLayout";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const profileImage = require("@/src/assets/images/profile.jpg");

const categorySection = [
  { id: 1, sectionName: "All" },
  { id: 2, sectionName: "Remote" },
  { id: 3, sectionName: "Design" },
  { id: 4, sectionName: "Development" },
  { id: 5, sectionName: "Frontend" },
  { id: 6, sectionName: "Backend" },
  { id: 7, sectionName: "Full Stack" },
  { id: 8, sectionName: "Mobile" },
  { id: 9, sectionName: "UI/UX" },
  { id: 10, sectionName: "Internship" },
  { id: 11, sectionName: "Part-time" },
  { id: 12, sectionName: "Full-time" },
  { id: 13, sectionName: "Hybrid" },
  { id: 14, sectionName: "Onsite" },
  { id: 15, sectionName: "Product" },
  { id: 16, sectionName: "Marketing" },
];

const Topbar = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const navigation = useNavigation()

  return (
    <View className="flex flex-1">
      <View className="flex gap-3">
        <View className="flex-1 items-center justify-center bg-background flex-row gap-3">
          <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
            <Image
              style={{ height: 50, width: 50, borderRadius: 50 }}
              className=""
              source={profileImage}
            />
          </TouchableOpacity>
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
      <View>
        <ScrollView horizontal={true}>
          {categorySection.map((index) => (
            <View key={index.id} className="flex flex-1">
              <TouchableOpacity
                onPress={() => {
                  setSelectedButton(index.id);
                }}
                className={`${selectedButton === index.id ? "bg-[#1362E9]" : "border border-[#1362E9]"} rounded-full ml-2 px-8 py-4`}
              >
                <Text
                  className={`font-Quicksandmedium ${
                    selectedButton === index.id
                      ? "text-white"
                      : "text-[#1362E9]"
                  }`}
                >
                  {index.sectionName}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Topbar;
