import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";



export const AuthTextCustomInput = ({
  placeholderText,
  valueText,
  setValueText,
}) => {
  return (
    <TextInput
      className="border border-descriptiveText font-Quicksandmedium text-ddescriptive rounded-button w-full py-5 pl-4"
      placeholder={placeholderText}
      value={valueText}
      onChangeText={setValueText}
    />
  );
};



export const AuthPasswordCustomInput = ({
  placeholderText,
  valueText,
  setValueText,
}) => {
  const [secureText, setSecureText] = useState(true); 

  return (
    <View className="relative w-full">
      <TextInput
        className="border border-descriptiveText font-Quicksandmedium text-ddescriptive rounded-button w-full py-5 pl-4 pr-12"
        placeholder={placeholderText}
        value={valueText}
        onChangeText={setValueText}
        secureTextEntry={secureText} 
      />
      <TouchableOpacity
        className="absolute right-5 top-1/2 -translate-y-1/2"
        onPress={() => setSecureText(!secureText)}
      >
        <Ionicons
          name={secureText ? "eye-off" : "eye"}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};