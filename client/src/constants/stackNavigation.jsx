import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  Welcome,
  Login,
  Home,
  Resume,
  Profile,
  Signup,
  Otp,
  ChooseRole,
  RecruiterProfile,
  SeekerProfile,
} from "../screens/Layout";

import TabNavigation from "./tabNavigation";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false, animation: "fade_from_right" }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ChooseRole" component={ChooseRole} />
      <Stack.Screen name="RecruiterProfile" component={RecruiterProfile} />
      <Stack.Screen name="SeekerProfile" component={SeekerProfile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Resume" component={Resume} />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: " ",
          headerTintColor: "#000000",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: " ",
          headerTintColor: "#FFFFFF",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
