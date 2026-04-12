import { View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  SubTitleText,
  TitleText,
  Title,
  ApplyButton,
} from "@/src/components/systemComponentLayout";

const JobsLists = [
  {
    index: 1,
    JobName: "Senior UI Designer",
    CompanyName: "TechCorp",
    Field: "Remote",
    Stipend: "$80k - $120k",
    IconName: "rocket-outline",
  },
  {
    index: 2,
    JobName: "Frontend Developer",
    CompanyName: "InnovateX",
    Field: "Onsite",
    Stipend: "$70k - $100k",
    IconName: "rocket-outline",
  },
  {
    index: 3,
    JobName: "React Native Developer",
    CompanyName: "Appify Solutions",
    Field: "Remote",
    Stipend: "$75k - $110k",
    IconName: "rocket-outline",
  },
  {
    index: 4,
    JobName: "UI/UX Designer",
    CompanyName: "DesignHub",
    Field: "Hybrid",
    Stipend: "$60k - $90k",
    IconName: "rocket-outline",
  },
  {
    index: 5,
    JobName: "Backend Developer",
    CompanyName: "CodeBase Inc.",
    Field: "Onsite",
    Stipend: "$85k - $130k",
    IconName: "rocket-outline",
  },
  {
    index: 6,
    JobName: "Product Designer",
    CompanyName: "Visionary Labs",
    Field: "Remote",
    Stipend: "$90k - $140k",
    IconName: "rocket-outline",
  },
  {
    index: 7,
    JobName: "Mobile App Developer",
    CompanyName: "NextGen Apps",
    Field: "Hybrid",
    Stipend: "$70k - $105k",
    IconName: "rocket-outline",
  },
  {
    index: 8,
    JobName: "Full Stack Developer",
    CompanyName: "DevWorks",
    Field: "Remote",
    Stipend: "$95k - $150k",
    IconName: "rocket-outline",
  },
  {
    index: 9,
    JobName: "Graphic Designer",
    CompanyName: "Creative Studio",
    Field: "Onsite",
    Stipend: "$50k - $75k",
    IconName: "rocket-outline",
  },
  {
    index: 10,
    JobName: "Software Engineer Intern",
    CompanyName: "StartupX",
    Field: "Remote",
    Stipend: "$20k - $35k",
    IconName: "rocket-outline",
  },
];

const FeaturedJobs = () => {
  const renderItem = ({ item }) => (
    <View className="flex mb-4 items-center w-full justify-center">
      <View className="flex p-5 gap-5 bg-white w-full rounded-2xl items-start justify-center">
        <View className="flex gap-small">
          <View className="flex flex-row items-center gap-mid">
            <Ionicons
              className="p-4 flex bg-[#F0F5FC] rounded-2xl"
              name={item.IconName}
              size={26}
              color={"blue"}
            />
            <View>
              <Title text={item.JobName} />
              <SubTitleText text={item.CompanyName} />
            </View>
          </View>

          <View className="flex flex-row gap-small">
            <View className="flex bg-[#E7EFF9] p-2 rounded-full px-5">
              <TitleText text={item.Stipend} />
            </View>
            <View className="flex bg-[#FEF6E6] p-2 rounded-full px-5">
              <TitleText text={item.Field} />
            </View>
          </View>
        </View>

        <ApplyButton text="Apply Now!" />
      </View>
    </View>
  );

  return (
    <View className="flex-1">
      <FlatList
      data={JobsLists}
      keyExtractor={(item) => item.index.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View className="mb-2">
          <Title text="Featured Jobs" />
        </View>
      }
    />
    <View className="flex h-10 items-center justify-center">
      <TitleText text="You've come to the end :)" />
    </View>
    </View>
  );
};

export default FeaturedJobs;