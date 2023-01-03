import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, RootStackParamList } from "../typings";
import { PalettePreview } from "../components";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const BOXES: Box[] = [
    { id: "0", color: { name: "Base03", hex: "#002b36" } },
    { id: "1", color: { name: "Base02", hex: "#073642" } },
    { id: "2", color: { name: "Base01", hex: "#586e75" } },
    { id: "3", color: { name: "Base00", hex: "#657b83" } },
    { id: "4", color: { name: "Base0", hex: "#839496" } },
    { id: "5", color: { name: "Base1", hex: "#93a1a1" } },
    { id: "6", color: { name: "Base2", hex: "#eee8d5" } },
    { id: "7", color: { name: "Base3", hex: "#fdf6e3" } },
    { id: "8", color: { name: "Yellow", hex: "#b58900" } },
    { id: "9", color: { name: "Orange", hex: "#cb4b16" } },
    { id: "10", color: { name: "Red", hex: "#dc322f" } },
    { id: "11", color: { name: "Magenta", hex: "#d33682" } },
    { id: "12", color: { name: "Violet", hex: "#6c71c4" } },
    { id: "13", color: { name: "Blue", hex: "#268bd2" } },
    { id: "14", color: { name: "Cyan", hex: "#2aa198" } },
    { id: "15", color: { name: "Green", hex: "#859900" } },
  ];

  const RAINBOW = [
    { id: "0", color: { name: "Red", hex: "#FF0000" } },
    { id: "1", color: { name: "Orange", hex: "#FF7F00" } },
    { id: "2", color: { name: "Yellow", hex: "#FFFF00" } },
    { id: "3", color: { name: "Green", hex: "#00FF00" } },
    { id: "4", color: { name: "Violet", hex: "#8B00FF" } },
  ];

  const FRONTEND_MASTERS = [
    { id: "0", color: { name: "Red", hex: "#c02d28" } },
    { id: "1", color: { name: "Black", hex: "#3e3e3e" } },
    { id: "2", color: { name: "Grey", hex: "#8a8a8a" } },
    { id: "3", color: { name: "White", hex: "#ffffff" } },
    { id: "4", color: { name: "Orange", hex: "#e66225" } },
  ];

  const COLOR_PALETTES = [
    { title: "Solarized", data: BOXES },
    { title: "Rainbow", data: RAINBOW },
    { title: "Frontend Masters", data: FRONTEND_MASTERS },
  ];
  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.title}
      renderItem={({ item: box }) => (
        <PalettePreview
          handlePress={() => navigation.push("ColorPalette", box)}
          palette={box}
        />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
