import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  Alert,
} from "react-native";

import { Color, RootStackParamList } from "../typings";
import { COLORS } from "../utils/colors";

type Props = NativeStackScreenProps<RootStackParamList, "AddNewPalette">;

const AddNewPaletteModal = ({ navigation }: Props) => {
  const [selectedColors, setSelectedColors] = React.useState<Color[]>([]);
  const [paletteName, setPaletteName] = React.useState("");

  const handleUpdate = React.useCallback(
    (color: Color) => {
      const newSelectedColors = selectedColors.find(
        ({ colorName }) => colorName === color.colorName,
      )
        ? selectedColors.filter(
            ({ colorName }) => colorName !== color.colorName,
          )
        : [...selectedColors, color];
      setSelectedColors(newSelectedColors);
    },
    [selectedColors, setSelectedColors],
  );

  const handleSubmit = React.useCallback(() => {
    if (!paletteName) {
      return Alert.alert("Please enter a name for your palette");
    }
    if (selectedColors.length < 3) {
      return Alert.alert("Please select at least 3 colors");
    }
    const newPalette = {
      paletteName,
      colors: selectedColors,
    };
    // If you want to navigate to a screen in the same stack
    navigation.navigate("Home", { newPalette });

    // If you want to navigate to a nested screen
    // navigation.navigate("Main", {
    //   screen: "Home",
    //   params: {
    //     newPalette,
    //   },
    // });

    // NOTE: Both of the above methods will work
  }, [paletteName, selectedColors, navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Form */}
        <View>
          <Text style={styles.label}>Name of your color palette</Text>
          {/* <TextInput style={styles.input} placeholder="Palette Name" /> */}
          <TextInput
            style={styles.input}
            placeholder="Palette Name"
            value={paletteName}
            onChangeText={(text) => setPaletteName(text)}
          />
        </View>

        <FlatList
          data={COLORS}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                {item.colorName}
              </Text>
              <Switch
                thumbColor={item.hexCode}
                ios_backgroundColor={"#ccc"}
                value={
                  !!selectedColors.find(
                    ({ colorName }) => colorName === item.colorName,
                  )
                }
                onChange={() => handleUpdate(item)}
              />
            </View>
          )}
        />

        {/* Submit Button */}
        <TouchableOpacity
          style={{ backgroundColor: "teal", padding: 15, borderRadius: 8 }}
          onPress={handleSubmit}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddNewPaletteModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
  },
});
