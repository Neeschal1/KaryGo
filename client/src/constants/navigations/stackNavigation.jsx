import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, Welcome } from "../../screens/begin/beginLayout";
import {
  Email,
  SignupSplash,
  Login,
  Otp,
  Password,
  Profile,
} from "../../screens/auth/authLayout";

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
          headerTintColor: '#FFFFFF'
        }}
      />
      <Stack.Screen name="SignupSplash" component={SignupSplash} />
      <Stack.Screen name="Email" component={Email} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
