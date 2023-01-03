import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ColorBox } from "../components";
import { Box } from "../typings";

const ColorPalette = () => {
  const BOXES: Box[] = [
    {
      id: "0",
      color: {
        name: "Base03",
        hex: "#002b36",
      },
    },
    {
      id: "1",
      color: {
        name: "Base02",
        hex: "#073642",
      },
    },
    {
      id: "2",
      color: {
        name: "Base01",
        hex: "#586e75",
      },
    },
    {
      id: "3",
      color: {
        name: "Base00",
        hex: "#657b83",
      },
    },
    {
      id: "4",
      color: {
        name: "Base0",
        hex: "#839496",
      },
    },
    {
      id: "5",
      color: {
        name: "Base1",
        hex: "#93a1a1",
      },
    },
    {
      id: "6",
      color: {
        name: "Base2",
        hex: "#eee8d5",
      },
    },
    {
      id: "7",
      color: {
        name: "Base3",
        hex: "#fdf6e3",
      },
    },
    {
      id: "8",
      color: {
        name: "Yellow",
        hex: "#b58900",
      },
    },
    {
      id: "9",
      color: {
        name: "Orange",
        hex: "#cb4b16",
      },
    },
    {
      id: "10",
      color: {
        name: "Red",
        hex: "#dc322f",
      },
    },
    {
      id: "11",
      color: {
        name: "Magenta",
        hex: "#d33682",
      },
    },
    {
      id: "12",
      color: {
        name: "Violet",
        hex: "#6c71c4",
      },
    },
    {
      id: "13",
      color: {
        name: "Blue",
        hex: "#268bd2",
      },
    },
    {
      id: "14",
      color: {
        name: "Cyan",
        hex: "#2aa198",
      },
    },
    {
      id: "15",
      color: {
        name: "Green",
        hex: "#859900",
      },
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Here are some boxes of different colours
      </Text>
      <FlatList
        data={BOXES}
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
  safeArea: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});