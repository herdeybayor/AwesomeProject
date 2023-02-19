import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Linking from "expo-linking";

import AddNewPaletteModal from "./screens/AddNewPaletteModal";
import MainStackScreen from "./screens/MainStackScreen";
import { RootStackParamList } from "./typings";

const App = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL("/")],
    config: {
      screens: {
        Main: {
          screens: {
            Home: {
              screens: {
                Home: "home",
              },
            },
            ColorPalette: {
              screens: {
                ColorPalette: "palette/:paletteName",
              },
            },
          },
        },
        AddNewPalette: "add-new-palette",
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
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
