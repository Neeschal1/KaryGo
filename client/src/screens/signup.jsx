import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HandleSignup from '@/src/api/auth/handleSignup'
import {
  PrimaryButton,
  SecondaryButton,
  TextualButtonPrimary,
  BorderButton,
  AuthTextCustomInput,
  AuthPasswordCustomInput,
  DescriptiveText,
  TitleText,
  SubTitleText,
} from "@/src/components/systemComponentLayout";
import { useNavigation } from "@react-navigation/native";

const logo = require("@/src/assets/images/mainlogo.png");

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation()

  const handleSignup = () => {
    if (password == confirmPassword){

    }
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-1 items-center justify-center p-screen gap-large">
        <View className="items-center">
          <Image source={logo} />
          <DescriptiveText text="Begin to KaryGo by creating a fresh account." />
        </View>
        <View className="w-full items-end gap-small">
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
              <SubTitleText text="Password" />
              <AuthPasswordCustomInput
                placeholderText="Enter your password"
                valueText={password}
                setValueText={setPassword}
              />
            </View>
            <View className="w-full gap-small">
              <SubTitleText text="Confirm Password" />
              <AuthPasswordCustomInput
                placeholderText="Enter your password"
                valueText={confirmPassword}
                setValueText={setConfirmPassword}
              />
            </View>
          </View>
          {/* Checkbox */}
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
              setLoading,
              setError,
              setErrorMessage,
              navigation
            }}
          />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
