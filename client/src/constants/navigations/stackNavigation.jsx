import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/begin/splashscreen";
import Welcome from "../../screens/begin/welcome";
import SignupSplash from "../../screens/auth/signup/signupsplash";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignupSplash" component={SignupSplash} />
      </Stack.Navigator>
  );
};

export default StackNavigation;
