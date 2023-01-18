import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ColorBox } from "../components";
import { MainStackParamList } from "../typings";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<MainStackParamList, "ColorPalette">;

const ColorPalette = ({ route }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={route.params.data}
        renderItem={({ item }) => <ColorBox box={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No boxes</Text>}
      />
    </View>
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
  },
});
