import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DrameScreen from "./src/screens/DrameScreen";
import FantasyScreen from "./src/screens/FantasyScreen";
import HorreurScreen from "./src/screens/HorreurScreen";
import SciFiScreen from "./src/screens/SciFiScreen";
import ActionScreen from "./src/screens/ActionScreen";

export default function App() {

  const Stack = createNativeStackNavigator(); // On crée le stack de navigation

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DrameScreen" component={DrameScreen}/>
        <Stack.Screen name="FantasyScreen" component={FantasyScreen}/>
        <Stack.Screen name="HorreurScreen" component={HorreurScreen}/>
        <Stack.Screen name="SciFiScreen" component={SciFiScreen}/>
        <Stack.Screen name="ActionScreen" component={ActionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
