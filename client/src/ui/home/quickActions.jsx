import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  SubTitleText,
  TitleText,
  Title,
  ApplyButton,
} from "@/src/components/systemComponentLayout";

const Actions = [
  {
    id: 1,
    actionName: "Find Jobs",
    bgcolor: "#1264E0",
  },
  {
    id: 2,
    actionName: "Post Jobs",
    bgcolor: "#F0AB00",
  },
  {
    id: 3,
    actionName: "Community",
    bgcolor: "#A73CFF",
  },
  {
    id: 4,
    actionName: "Messages",
    bgcolor: "#00AC5F",
  },
];

const QuickActions = () => {
  return (
    <View className="w-full gap-large mt-10">
      <Title text="Quick Actions" />

      <View className="flex-row flex-wrap justify-between">
        {Actions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{ backgroundColor: item.bgcolor }}
            className="w-[48%] p-5 rounded-2xl mb-4 flex-row items-center justify-between"
          >
            <Text className="text-white font-Quicksandsemibold text-lg">
              {item.actionName}
            </Text>

            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickActions