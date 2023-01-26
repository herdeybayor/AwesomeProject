import React from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { ColorBox } from "../components";
import { MainStackParamList } from "../typings";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Clipboard from "expo-clipboard";

type Props = NativeStackScreenProps<MainStackParamList, "ColorPalette">;

const ColorPalette = ({ route }: Props) => {
  const [copiedText, setCopiedText] = React.useState("");

  const copyToClipboard = async (value: string) => {
    await Clipboard.setStringAsync(value);
    setCopiedText(value);
  };

  React.useEffect(() => {
    if (copiedText) {
      Alert.alert("Copied to clipboard", copiedText);
    }
  }, [copiedText]);

  return (
    <View style={styles.container}>
      <FlatList
        data={route.params.data}
        renderItem={({ item }) => (
          <ColorBox
            box={item}
            handlePress={(box) => copyToClipboard(box.color.hex)}
          />
        )}
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
  copiedText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
