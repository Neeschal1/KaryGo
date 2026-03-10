import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AuthTextCustomInput } from "../../../components/system/textInput";
import { BorderButton } from "@/src/components/system/buttons";

import axios from "axios";

const fetchData = async () => {
  try {
    const res = await axios.get(
      " ",
    );
    console.log(res.data)
  } catch (err) {
    console.log("Error: ", err.response)
  }
};

const SignupSplash = () => {
  const [email, setEmail] = useState("");
  return (
    <View className="flex-1 items-center justify-center p-4 bg-white">
      {/* <AuthTextCustomInput
        placeholderText="Enter your Email"
        valueText={email}
        setValueText={setEmail}
      /> */}
      {/* <BorderButton text="Next" navigatingScreen="#" /> */}
      <TouchableOpacity className="bg-primary w-full text-white items-center justify-center py-5 rounded-full" onPress={fetchData}>
        <Text className="text-white">Fetch Github Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupSplash;
