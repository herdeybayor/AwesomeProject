import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  ColorPalette: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ColorPalette")}>
        <Text>Go to ColorPalette</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
