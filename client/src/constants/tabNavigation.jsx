import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Home, AddJobs, Community, Chats, Profile } from "../screens/Layout";

const Tab = createBottomTabNavigator();
const profilePic = require("../assets/images/profile.jpg");

const TabBarIcons = ({ route, focused, color }) => {
  let iconName;

  if (route.name === "Home") {
    iconName = focused ? "home" : "home-outline";
    return <Ionicons name={iconName} size={20} color={color} />;
  }

  if (route.name === "Jobs") {
    iconName = focused ? "briefcase" : "briefcase-outline";
    return <Ionicons name={iconName} size={20} color={color} />;
  }

  if (route.name === "Community") {
    iconName = focused ? "people" : "people-outline";
    return <Ionicons name={iconName} size={20} color={color} />;
  }

  if (route.name === "Chats") {
    iconName = focused ? "chatbubble" : "chatbubble-outline";
    return <Ionicons name={iconName} size={20} color={color} />;
  }

  // Profile image icon
  return (
    <Image
      source={profilePic}
      style={{
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: focused ? 2 : 0,
        borderColor: "#1467C8",
      }}
    />
  );
};

const TabNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => (
          <TabBarIcons route={route} focused={focused} color={color} />
        ),
        tabBarActiveTintColor: "#1467C8",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 2,
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#E5E5E5",
          elevation: 8,
        },

        tabBarLabelStyle: {
          marginBottom: 5,
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Jobs" component={AddJobs} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
