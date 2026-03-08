import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/begin/splashscreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
  );
};

export default StackNavigation;
