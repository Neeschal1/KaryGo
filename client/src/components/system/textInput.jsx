import { TextInput } from "react-native";

export const AuthTextCustomInput = ({
  placeholderText,
  valueText,
  setValueText,
}) => {
  return (
    <TextInput
      className="border border-gray-300 rounded-lg w-full px-4 py-3"
      placeholder={placeholderText}
      value={valueText}
      onChangeText={setValueText}
    />
  );
};