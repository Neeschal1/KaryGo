import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import HandleLogin from "@/src/api/auth/handleLogin";
import {
  PrimaryButton,
  TextualButtonPrimary,
  AuthTextCustomInput,
  AuthPasswordCustomInput,
  DescriptiveText,
  SubTitleText,
} from "@/src/components/systemComponentLayout";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const LoginBG = require("@/src/assets/images/loginBG.png");
const logo = require("@/src/assets/images/mainlogo.png");
const GoogleIcon = require("@/src/assets/images/google.png");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Invalid Credentials!");

  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      <View className="flex flex-1 bg-background items-center justify-start">
      <ImageBackground
        style={{ height: 223, width: 394 }}
        className="flex items-center justify-center px-5"
        source={LoginBG}
      >
        {error ? (
          <View className="flex bg-red-600 py-7 px-6 rounded-3xl">
            <Text className="text-white font-Quicksandbold text-center">
              {errorMessage}
            </Text>
          </View>
        ) : null }
      </ImageBackground>
      <View className="flex flex-1 bg-background w-full p-screen rounded-button mt-[-20px] gap-extralarge justify-center">
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
          <PrimaryButton
            loading={loading}
            text="Login"
            Press={HandleLogin}
            parameters={{
              email,
              password,
              setLoading,
              setError,
              setErrorMessage,
              navigation
            }}
          />
        </View>
        <View className="flex-row flex-1 items-center justify-center w-full">
          <View style={styles.horizontalBar} />
          <Text className="mx-3 text-gray-500 text-center">OR</Text>
          <View style={styles.horizontalBar} />
        </View>
        <View className="flex items-center justify-center gap-mid">
          <View className="gap-small w-full flex">
            <TouchableOpacity onPress={()=>{navigation.navigate("Resume")}} className="bg-black rounded-button w-full items-center flex-row justify-center">
              <Icon name="apple" size={24} color="#FFFFFF" />
              <Text className="font-Quicksandmedium text-lighttext text-xl py-4 px-5">
                Continue with Apple
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-[#626262] border rounded-button w-full items-center flex-row justify-center">
              <Image source={GoogleIcon} />
              <Text className="font-Quicksandmedium text-black text-xl py-4 px-5">
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
          <View className="items-center justify-center flex-row gap-extrasmall">
            <SubTitleText text="New to KaryGo?" />
            <TextualButtonPrimary text="Signup" navigatingScreen={"Signup"} />
          </View>
        </View>
      </View>
      <View className="flex-1 h-10">

      </View>
    </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  horizontalBar: {
    height: 2,
    width: "30%",
    backgroundColor: "black",
    opacity: 0.5,
    borderRadius: 50,
  },
});
