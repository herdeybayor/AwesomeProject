import { FlatList, StyleSheet, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, ColorPalette, RootStackParamList } from "../typings";
import { PalettePreview } from "../components";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

interface IData {
  title: string;
  data: Box[];
}

const HomeScreen = ({ navigation }: Props) => {
  const [colorPalettes, setColorPalettes] = React.useState<IData[]>([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const fetchColorPalettes = React.useCallback(async () => {
    setIsRefreshing(true);
    const response = await fetch(
      // eslint-disable-next-line prettier/prettier
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
  }, []);

  React.useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.title}
      renderItem={({ item: box }) => (
        <PalettePreview
          handlePress={() => navigation.push("ColorPalette", box)}
          palette={box}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={fetchColorPalettes}
      ListEmptyComponent={<Text>No boxes</Text>}
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
