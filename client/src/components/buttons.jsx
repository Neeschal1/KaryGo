import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const PrimaryButton = ({
  text,
  loading,
  navigatingScreen,
  Press,
  parameters,
}) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    if (Press) {
      Press(parameters);
    } else if (navigatingScreen) {
      navigation.navigate(navigatingScreen);
    } else {
      console.log("Button Not working perfectly. so sorry!");
    }
  };

  return (
    <TouchableOpacity
      className={`${loading ? "bg-primaryloading" : "bg-primary"} rounded-button w-full items-center`}
      onPress={handleButtonPress}
      disabled={loading}
    >
      {loading ? (
        <View className="py-5">
          <ActivityIndicator color="white" />
        </View>
      ) : (
        <Text className="font-Quicksandbold text-lighttext text-subheading py-5 px-5">
          {text}
        </Text>
      )}
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
      <Text className="font-Quicksandbold text-darktext text-subheading py-5 px-5">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const TextualButtonPrimary = ({ text, navigatingScreen }) => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate(navigatingScreen);
  };

  return (
    <TouchableOpacity
      className="justify-center items-center"
      onPress={handleButtonPress}
    >
      <Text className="font-Quicksandbold text-primary text-description">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export const TextualButtonSecondary = ({ text, navigatingScreen }) => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate(navigatingScreen);
  };

  return (
    <TouchableOpacity
      className="justify-center items-center"
      onPress={handleButtonPress}
    >
      <Text className="font-Quicksandbold text-secondary text-description">
        {text}
      </Text>
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

export const ApplyButton = ({text}) => {
  return (
    <TouchableOpacity className="bg-primary rounded-button w-full items-center">
      <Text className="font-Quicksandbold text-white text-subheading py-3 px-3">
        {text}
      </Text>
    </TouchableOpacity>
  )
}