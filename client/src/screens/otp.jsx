import { View, Text, Image, TextInput } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PrimaryButton,
  DescriptiveText,
  SubTitleText,
  TextualButtonPrimary,
  ErrorText,
} from "../components/systemComponentLayout";
import { useNavigation } from "@react-navigation/native";

const logo = require("@/src/assets/images/mainlogo.png");

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [timeExpired, setTimeExpired] = useState(false);
  const [warningPeriod, setWarningPeriod] = useState(false)

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    if (secondsLeft == 0){
      setTimeExpired(true)
      return
    }

    if (secondsLeft <= 10){
      setWarningPeriod(true)
      return
    }

    return () => clearInterval(timerId);
  }, [secondsLeft]);

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center bg-background p-screen gap-large">
        <View className="items-center">
          <Image source={logo} />
          <DescriptiveText text="Begin to KaryGo by creating a fresh account." />
        </View>
        <View className="w-full gap-small">
          <View className="flex justify-between flex-row">
            <SubTitleText text="Enter OTP" />
            {timeExpired ? <ErrorText text="Time Expired" /> : warningPeriod ? <ErrorText text={`Time Remaining: ${secondsLeft} seconds`} /> : <SubTitleText text={`Time Remaining: ${secondsLeft} seconds`} />}
          </View>

          <View className="flex flex-row gap-small">
            {otp.map((value, index) => (
              <View className="flex flex-1" key={index}>
                <TextInput
                  ref={refs[index]}
                  placeholder="*"
                  value={value}
                  onChangeText={(text) => handleChange(index, text)}
                  keyboardType="number-pad"
                  maxLength={1}
                  className="border text-center border-descriptiveText font-Quicksandmedium text-descriptive rounded-button w-full py-5"
                />
              </View>
            ))}
          </View>
        </View>
        <PrimaryButton
          // loading={loading}
          text="Verify"
          // Press={HandleSignup}
          // parameters={{
          //   fullName,
          //   email,
          //   username,
          //   password,
          //   confirmPassword,
          //   checked,
          //   setLoading,
          //   setError,
          //   setErrorMessage,
            navigatingScreen="ChooseRole"
          // }}
        />
        <View>
          <DescriptiveText text="Didn't receive an OTP?" />
          <TextualButtonPrimary text="Resend OTP again" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
