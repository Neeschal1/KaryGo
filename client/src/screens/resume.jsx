import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PrimaryButton,
  DescriptiveText,
  TitleText,
  SubTitleText,
} from "../components/systemComponentLayout";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

const Resume = () => {
  const [cv, setCV] = useState(false);
  const documentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      });
      if (result.assets[0].mimeType = "application/pdf"){
        setCV(result)
      }
      console.log("Selected Docs: ", cv)
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center bg-background p-screen">
        <View>
          <TitleText text="Upload your Resume" />
          <SubTitleText />
        </View>
        <View className="items-center flex justify-center rounded-3xl py-5 px-10 border border-gray-300 mb-10">
          <TouchableOpacity
            className="bg-purple-300 items-center p-5 rounded-3xl"
            onPress={documentPick}
          >
            <Text>Upload your Resume</Text>
          </TouchableOpacity>
          <SubTitleText text="Choose a pdf file to upload" />
          <DescriptiveText text="Make sure to upload your valid current resume. Thank you :)" />
        </View>
        <PrimaryButton text="Upload Resume" />
      </View>
    </SafeAreaView>
  );
};

export default Resume;
