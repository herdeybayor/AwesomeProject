import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PalettePreview } from "../components";
import { Box, ColorPalette, MainStackParamList } from "../typings";

type Props = NativeStackScreenProps<MainStackParamList, "Home">;

interface IData {
  title: string;
  data: Box[];
}

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const { newPalette } = route.params || {};
  React.useEffect(() => {
    if (newPalette) {
      console.log(newPalette);
      setColorPalettes((prev) => {
        if (!prev) {
          return null;
        }
        const newBox: IData = {
          title: newPalette.paletteName,
          data: newPalette.colors.map(
            ({ colorName: name, hexCode: hex }, i) => ({
              id: i.toString(),
              color: { name, hex },
            }),
          ),
        };
        return [newBox, ...prev];
      });
    }
  }, [newPalette]);

  const [colorPalettes, setColorPalettes] = React.useState<IData[] | null>(
    null,
  );
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const fetchColorPalettes = React.useCallback(async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch(
        "https://color-palette-api.kadikraman.now.sh/palettes",
      );
      if (response.ok) {
        const palettes: ColorPalette[] = await response.json();
        const boxes: IData[] = palettes.map(({ paletteName, colors }) => ({
          title: paletteName,
          data: colors.map(({ colorName: name, hexCode: hex }, i) => ({
            id: i.toString(),
            color: { name, hex },
          })),
        }));
        setIsRefreshing(false);
        setColorPalettes(boxes);
      }
    } catch (error) {
      setIsRefreshing(false);
      setColorPalettes([]);
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  //  Loading Screen
  if (!colorPalettes) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={{ alignItems: "center" }}
      data={colorPalettes}
      keyExtractor={(item) => item.title}
      renderItem={({ item: box }) => (
        <PalettePreview
          handlePress={() => navigation.push("ColorPalette", box)}
          palette={box}
        />
      )}
      ListEmptyComponent={<Text>No boxes</Text>}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={fetchColorPalettes}
          colors={["#0000ff", "#689F38"]}
          progressBackgroundColor="#ffffff"
        />
      }
      ListHeaderComponent={
        <TouchableOpacity onPress={() => navigation.push("AddNewPalette")}>
          <Text style={styles.text}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    color: "#1492a3",
    fontWeight: "bold",
  },
});
