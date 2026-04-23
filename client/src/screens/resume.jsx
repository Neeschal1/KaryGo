import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";


const Resume = () => {
  const [cv, setCV] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadToCloudinary = async (file) => {
    const data = new FormData();

    data.append("file", {
      uri: file.uri,
      name: file.name,
      type: file.mimeType || "application/pdf",
    });

    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      if (result.secure_url) {
        return result.secure_url;
      } else {
        console.log("Cloudinary error:", result);
        return null;
      }
    } catch (err) {
      console.log("Upload error:", err);
      return null;
    }
  };

  const documentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      });

      if (result.canceled) return;

      const file = result.assets?.[0];
      if (!file) return;

      if (file.mimeType !== "application/pdf") {
        console.log("Only PDF allowed");
        return;
      }
      setCV(file);
      setLoading(true);
      const url = await uploadToCloudinary(file);

      setLoading(false);

      if (url) {
        setUploadedUrl(url);
        console.log("Uploaded Resume URL:", url);
      }
    } catch (err) {
      setLoading(false);
      console.log("Error:", err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center gap-6 p-screen">

        <Text className="text-white">
          {cv ? `File: ${cv.name}` : "No file selected"}
        </Text>

        {loading && (
          <Text className="text-yellow-400">Uploading...</Text>
        )}

        {uploadedUrl && (
          <Text className="text-green-400 text-xs text-center px-4">
            Uploaded Successfully
          </Text>
        )}

        {uploadedUrl && (
          <Text className="text-gray-400 text-xs text-center px-4">
            {uploadedUrl}
          </Text>
        )}

        <TouchableOpacity onPress={documentPick}>
          <Text className="text-blue-500">
            Pick & Upload Resume (PDF)
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Resume;