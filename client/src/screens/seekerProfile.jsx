import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import {
  AuthPasswordCustomInput,
  AuthTextCustomInput,
  DescriptiveText,
  PrimaryButton,
  SubTitleText,
} from "../components/systemComponentLayout";
import { useNavigation } from "@react-navigation/native";

const logo = require("@/src/assets/images/mainlogo.png");

const SeekerProfile = () => {
  const navigation = useNavigation();

  const [profileName, setProfileName] = useState("");
  const [web, setWeb] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [industry, setIndustry] = useState("");

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-1 bg-background items-center justify-center p-screen gap-large">
          <View className="items-center">
            <Image source={logo} />
            <DescriptiveText text="Create a fresh profile based on your role as a Seeker" />
          </View>
          <View className="w-full items-start gap-small">
            <View className="w-full gap-mid">
              <View className="w-full gap-small">
                <View className="flex flex-row items-center gap-small">
                  <SubTitleText text="Profile Name" />
                  <Text className="text-red-600">*</Text>
                </View>

                <AuthTextCustomInput
                  placeholderText="Enter your profile name"
                  valueText={profileName}
                  setValueText={setProfileName}
                />
              </View>
              <View className="w-full gap-small">
                <SubTitleText text="Website or Portfolio" />
                <AuthTextCustomInput
                  placeholderText="Your website or portfolio link "
                  valueText={web}
                  setValueText={setWeb}
                />
              </View>
              <View className="w-full gap-small">
                <View className="flex flex-row items-center gap-small">
                  <SubTitleText text="Location" />
                  <Text className="text-red-600">*</Text>
                </View>

                <AuthTextCustomInput
                  placeholderText="Enter your location"
                  valueText={location}
                  setValueText={setLocation}
                />
              </View>
              <View className="w-full gap-small">
                <View className="w-full gap-small">
                  <View className="flex flex-row items-center gap-small">
                    <SubTitleText text="Phone" />
                    <Text className="text-red-600">*</Text>
                  </View>

                  <AuthTextCustomInput
                    placeholderText="Enter your phone number"
                    valueText={phone}
                    setValueText={setPhone}
                  />
                </View>
              </View>
              <View className="w-full gap-small">
                <View className="flex flex-row items-center gap-small">
                  <SubTitleText text="Your Company Name" />
                  <Text className="text-red-600">*</Text>
                </View>

                <AuthTextCustomInput
                  placeholderText="Enter your current company name"
                  valueText={companyName}
                  setValueText={setCompanyName}
                />
              </View>
              <View className="w-full gap-small">
                <View className="flex flex-row items-center gap-small">
                  <SubTitleText text="Position" />
                  <Text className="text-red-600">*</Text>
                </View>

                <AuthTextCustomInput
                  placeholderText="Enter your position in above's company"
                  valueText={position}
                  setValueText={setPosition}
                />
              </View>
              <View className="w-full gap-small">
                <View className="flex flex-row items-center gap-small">
                  <SubTitleText text="Industry" />
                  <Text className="text-red-600">*</Text>
                </View>

                <AuthTextCustomInput valueText={industry}
                  setValueText={setIndustry} placeholderText="Mention your Industry" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="p-screen">
        <PrimaryButton
          text="Set up a new Profile"
          navigatingScreen="TabNavigation"
        //   parameters={{
        //     profileName,
        //     web,
        //     location,
        //     phone,
        //     companyName,
        //     position,
        //     industry,
        //     setLoading,
        //     setError,
        //     setErrorMessage,
        //     navigation,
        //   }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SeekerProfile;

const styles = StyleSheet.create({
  horizontalBar: {
    height: 2,
    width: "30%",
    backgroundColor: "black",
    opacity: 0.5,
    borderRadius: 50,
  },
});
