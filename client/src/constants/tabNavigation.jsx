import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, AddJobs, Community, Chats } from "../screens/Layout";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabBarIcons = ({ route, focused, color, size }) => {
  let iconName;

  if (route.name === "Home") {
    iconName = focused ? "home" : "home-outline";
  } else if (route.name === "Jobs") {
    iconName = focused ? "briefcase" : "briefcase-outline";
  } else if (route.name === "Community") {
    iconName = focused ? "people" : "people-outline";
  } else if (route.name === "Chats") {
    iconName = focused ? "chatbubble" : "chatbubble-outline";
  }

  return <Ionicons name={iconName} size={20} color={color} />;
  // tabBarActiveTintColor: "#000",
  // tabBarInactiveTintColor: "gray",

  tabBarLabelStyle: {
    marginBottom: 5
  }
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        animation: 'fade',
        headerShown: false,
        tabBarStyle: { position: "absolute", height: 60 },

        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcons
            route={route}
            focused={focused}
            color={color}
            size={size}
          />
        ),

        tabBarActiveTintColor: "#1467C8",
        tabBarInactiveTintColor: "#1467C8",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Jobs" component={AddJobs} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
