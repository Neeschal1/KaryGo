import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  BackHandler,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Topbar, FeaturedJobs, QuickActions } from "../ui/home/homeLayout";

const Home = () => {
  const [exitModalVisible, setExitModalVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      setExitModalVisible(true);
      return true; // prevents default back navigation
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => subscription.remove();
  }, []);

  const handleExit = () => {
    setExitModalVisible(false);

    if (Platform.OS === "android") {
      BackHandler.exitApp(); // exits app
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 w-full p-screen">
        <Topbar />
        <FeaturedJobs />
      </View>
        <View className="flex h-4"></View>

      <Modal
        transparent
        visible={exitModalVisible}
        animationType="fade"
        onRequestClose={() => setExitModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              padding: 20,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 15 }}>
              Are you sure you want to exit?
            </Text>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={() => setExitModalVisible(false)}
                style={{
                  padding: 10,
                  backgroundColor: "#ccc",
                  borderRadius: 8,
                  width: 80,
                  alignItems: "center",
                }}
              >
                <Text>No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleExit}
                style={{
                  padding: 10,
                  backgroundColor: "red",
                  borderRadius: 8,
                  width: 80,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
