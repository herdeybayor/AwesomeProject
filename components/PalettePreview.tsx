import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Box } from "../typings";

type Props = {
  handlePress: () => void;
  palette: {
    title: string;
    data: Box[];
  };
};

const PalettePreview = ({ handlePress, palette }: Props) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.heading}>{palette.title}</Text>
      <FlatList
        style={styles.list}
        data={palette.data.slice(0, 5)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.color, { backgroundColor: item.color.hex }]} />
        )}
        horizontal={true}
      />
    </TouchableOpacity>
  );
};

export default PalettePreview;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    flexDirection: "row",
    marginBottom: 30,
  },
  color: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 10,
  },
});
