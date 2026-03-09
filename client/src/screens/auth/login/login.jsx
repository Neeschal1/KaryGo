import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import handleLogin from "./handleLogin";
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
} from "../../../components/system/systemComponentLayout";

const LoginBG = require("../../../assets/images/loginBG.png");
const logo = require("../../../assets/images/mainlogo.png");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className="flex flex-1 bg-background items-center justify-start">
      <Image className="" source={LoginBG} />
      <View className="bg-background w-full p-screen rounded-button mt-[-20px]">
        <View className="w-full gap-large mt-5">
          <View className="items-center">
            <Image source={logo} />
            <DescriptiveText text="Please login your account in order to continue." />
          </View>
          <View className="w-full items-end gap-small">
            <View className="w-full gap-mid">
              <View className="w-full gap-small">
                <SubTitleText text="Email" />
                <AuthTextCustomInput
                  placeholderText="Enter your email"
                  valueText={email}
                  setValueText={setEmail}
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
            </View>
            <TextualButtonPrimary text="Forgot Password?" />
          </View>
          <PrimaryButton text="Login" onPress={handleLogin} parameters={{email, password}}/>
        </View>
      </View>
    </View>
  );
};

export default Login;
