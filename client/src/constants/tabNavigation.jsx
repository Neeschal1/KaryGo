import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, AddJobs } from "../screens/Layout";
// import { BlurView } from "expo-blur";
// import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", height: 60 },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Jobs" component={AddJobs} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
