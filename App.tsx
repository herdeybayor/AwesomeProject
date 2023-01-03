import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorPalette, HomeScreen } from "./screens";
import { RootStackParamList } from "./typings";

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  Stack.Navigator.defaultProps = {
    screenOptions: {
      headerShown: true,
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      animation: "slide_from_right",
      headerTitleAlign: "center",
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
