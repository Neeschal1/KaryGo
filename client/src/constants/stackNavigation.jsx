import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  Welcome,
  Email,
  SignupSplash,
  Login,
  Otp,
  Password,
  Home,
  Resume,
  Profile,
} from "../screens/Layout";
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false, animation: "fade_from_right" }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: " ",
          headerTintColor: "#FFFFFF",
        }}
      />
      <Stack.Screen
        // options={{
        //     headerShown: true,
        //     headerTransparent: true,
        //     headerTitle: " ",
        //     headerTintColor: '#000000'
        //   }}
        name="SignupSplash"
        component={SignupSplash}
      />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Resume" component={Resume} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
