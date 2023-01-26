import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AddNewPaletteModal from "./screens/AddNewPaletteModal";
import MainStackScreen from "./screens/MainStackScreen";
import { RootStackParamList } from "./typings";

const App = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AddNewPalette"
          component={AddNewPaletteModal}
          options={{ presentation: "modal", title: "Add New Palette" }}
        />
      </RootStack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

export default App;
