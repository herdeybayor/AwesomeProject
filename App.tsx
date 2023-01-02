import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { ColorBox } from "./components";

import type { Box } from "./typings";

const App = () => {
  const BOXES: Box[] = [
    {
      id: "1",
      color: {
        name: "Cyan",
        hex: "#2aa198",
      },
    },
    {
      id: "2",
      color: {
        name: "Blue",
        hex: "#268bd2",
      },
    },
    {
      id: "3",
      color: {
        name: "Magenta",
        hex: "#d33682",
      },
    },
    {
      id: "4",
      color: {
        name: "Orange",
        hex: "#cb4b16",
      },
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Here are some boxes of different colours
        </Text>
        {BOXES.map((box) => (
          <ColorBox key={box.id} box={box} />
        ))}
      </View>

      {/* Status bar for android */}
      <StatusBar barStyle={"dark-content"} backgroundColor="white" />
    </SafeAreaView>
  );
};

export default App;

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
