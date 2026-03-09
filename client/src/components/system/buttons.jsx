import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";



export const PrimaryButton = ({ text, navigatingScreen }) => {
  
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate(navigatingScreen);
  };

  return (
    <TouchableOpacity
      className="bg-primary rounded-button w-full items-center"
      onPress={handleButtonPress}
    >
      <Text className="font-Quicksandbold text-lighttext text-subheading py-5 px-5">{text}</Text>
    </TouchableOpacity>
  );
};



export const SecondaryButton = ({ text, navigatingScreen }) => {

  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate(navigatingScreen);
  };

  return (
    <TouchableOpacity
      className="border border-primary rounded-button w-full items-center"
      onPress={handleButtonPress}
    >
      <Text className="font-Quicksandbold text-darktext text-subheading py-5 px-5">{text}</Text>
    </TouchableOpacity>
  );
};



export const TextualButton = ({ text, navigatingScreen }) => {

  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate(navigatingScreen);
  };

  return (
    <TouchableOpacity
      className="justify-center items-center"
      onPress={handleButtonPress}
    >
      <Text className="font-Quicksandbold text-secondary text-description">{text}</Text>
    </TouchableOpacity>
  );
};



export const BorderButton = ({ text, navigatingScreen }) => {

  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate(navigatingScreen);
  };

  return (
    <TouchableOpacity
      className="border border-secondary rounded-full w-full items-center"
      onPress={handleButtonPress}
    >
      <Text className="font-Quicksandbold py-5 px-5">{text}</Text>
    </TouchableOpacity>
  );
};
