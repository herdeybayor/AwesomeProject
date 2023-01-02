import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Box } from "../typings";

type Props = {
  box: Box;
};

const ColorBox = ({ box }: Props) => {
  return (
    <TouchableOpacity
      key={box.id}
      style={[{ backgroundColor: box.color.hex }, styles.box]}
    >
      <Text style={styles.boxText}>
        {box.color.name} {box.color.hex}
      </Text>
    </TouchableOpacity>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  boxText: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
});
