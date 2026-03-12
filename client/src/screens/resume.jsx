import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
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
//   const documentPick = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: "application/pdf",
//         copyToCacheDirectory: true,
//       });
//       if (result.assets[0].mimeType = "application/pdf"){
//         setCV(result)
//       }
//       console.log("Selected Docs: ", cv)
//     } catch (err) {
//       console.log("Error: ", err);
//     }
//   };
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center gap-10 bg-background p-screen">
        <View className="flex w-full items-center gap-5">
          <SubTitleText text="Paste all of your Resume's detail here" />
          <TextInput placeholder="Enter your resume contents" value={cv} onChange={setCV} style={{height: 100}} className="w-full border-gray-400 font-Quicksandmedium rounded-3xl border" multiline={true} />
        </View>
        
        <PrimaryButton text="Upload Resume" />
      </View>
    </SafeAreaView>
  );
};

export default Resume;
