import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Box } from "../typings";

type Props = {
  box: Box;
  handlePress: (box: Box) => void;
};

const ColorBox = ({ box, handlePress }: Props) => {
  return (
    <TouchableOpacity
      key={box.id}
      style={[
        styles.box,
        {
          backgroundColor: box.color.hex,
        },
      ]}
      onPress={() => handlePress(box)}
    >
      <Text
        style={[
          styles.boxText,
          {
            color:
              parseInt(box.color.hex.replace("#", ""), 16) > 0xffffff / 2
                ? "black"
                : "white",
          },
        ]}
      >
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
