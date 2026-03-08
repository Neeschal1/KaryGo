import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const PrimaryButton = () => {
    
}

export const SecondaryButton = () => {

}

export const TextualButton = () => {

}

export const BorderButton = ({ text, navigatingScreen }) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate(navigatingScreen);
  };

  return (
    <TouchableOpacity className="border border-secondary rounded-full w-full items-center" onPress={handleButtonPress}>
      <Text className="font-Quicksandbold py-5 px-5">{text}</Text>
    </TouchableOpacity>
  );
};