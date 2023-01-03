import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens";
import ColorPalette from "./screens/ColorPalette";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={{
            title: "Color Palette",
            animation: "slide_from_right",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
