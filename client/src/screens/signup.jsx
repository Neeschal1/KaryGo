import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import HandleSignup from "@/src/api/auth/handleSignup";
import {
  PrimaryButton,
  TextualButtonPrimary,
  AuthTextCustomInput,
  AuthPasswordCustomInput,
  DescriptiveText,
  SubTitleText,
  ErrorText,
} from "@/src/components/systemComponentLayout";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const logo = require("@/src/assets/images/mainlogo.png");
const GoogleIcon = require("@/src/assets/images/google.png");

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [checked, setChecked] = useState(false)

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-1 bg-background items-center justify-center p-screen gap-large">
          <View className="items-center">
            <Image source={logo} />
            <DescriptiveText text="Begin to KaryGo by creating a fresh account." />
          </View>
          <View className="w-full items-start gap-small">
            <View className="w-full gap-mid">
              <View className="w-full gap-small">
                <SubTitleText text="Full Name" />

                <AuthTextCustomInput
                  placeholderText="Enter your full name"
                  valueText={fullName}
                  setValueText={setFullName}
                />
              </View>
              <View className="w-full gap-small">
                <SubTitleText text="Email" />

                <AuthTextCustomInput
                  placeholderText="Enter your email"
                  valueText={email}
                  setValueText={setEmail}
                />
              </View>
              <View className="w-full gap-small">
                <SubTitleText text="Username" />

                <AuthTextCustomInput
                  placeholderText="Enter your username"
                  valueText={username}
                  setValueText={setUsername}
                />
              </View>
              <View className="w-full gap-small">
                {error ? <ErrorText text="Password must match with Confirm Password" /> : <SubTitleText text="Password" />}
                <AuthPasswordCustomInput
                  placeholderText="Enter your password"
                  valueText={password}
                  setValueText={setPassword}
                />
              </View>
              <View className="w-full gap-small">
                  {error ? <ErrorText text="Confirm Password must match with Password" /> : <SubTitleText text="Confirm Password" />}
                <AuthPasswordCustomInput
                  placeholderText="Enter your password"
                  valueText={confirmPassword}
                  setValueText={setConfirmPassword}
                />
              </View>
            </View>
            <View className="flex flex-row gap-3 mt-5">
              <Checkbox value={checked} onValueChange={setChecked}/>
              <SubTitleText text="Remember me!" />
            </View>
          </View>
          <PrimaryButton
            loading={loading}
            text="Signup"
            Press={HandleSignup}
            parameters={{
              fullName,
              email,
              username,
              password,
              confirmPassword,
              checked,
              setLoading,
              setError,
              setErrorMessage,
              navigation,
            }}
          />
          <View className="flex-row flex-1 items-center justify-center w-full">
            <View style={styles.horizontalBar} />
            <Text
              style={{ color: "black" }}
              className="mx-3 text-gray-500 text-center"
            >
              OR
            </Text>
            <View style={styles.horizontalBar} />
          </View>
          <View className="flex items-center justify-center gap-mid w-full">
            <View className="gap-small w-full flex">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Otp");
                }}
                className="bg-black rounded-button w-full items-center flex-row justify-center"
              >
                <Icon name="apple" size={24} color="#FFFFFF" />
                <Text className="font-Quicksandmedium text-lighttext text-xl py-4 px-5">
                  Continue with Apple
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate("TabNavigation")}} className="border-[#626262] border rounded-button w-full items-center flex-row justify-center">
                <Image source={GoogleIcon} />
                <Text className="font-Quicksandmedium text-black text-xl py-4 px-5">
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </View>
            <View className="items-center justify-center flex-row gap-extrasmall">
              <SubTitleText text="Already have an account?" />
              <TextualButtonPrimary text="Login" navigatingScreen={"Login"} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  horizontalBar: {
    height: 2,
    width: "30%",
    backgroundColor: "black",
    opacity: 0.5,
    borderRadius: 50,
  },
});
