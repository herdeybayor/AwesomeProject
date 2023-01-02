import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const App = () => {
  const BOXES = [
    {
      id: 1,
      colour: {
        name: "Cyan",
        hex: "#2aa198",
      },
    },
    {
      id: 2,
      colour: {
        name: "Blue",
        hex: "#268bd2",
      },
    },
    {
      id: 3,
      colour: {
        name: "Magenta",
        hex: "#d33682",
      },
    },
    {
      id: 4,
      colour: {
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
          <TouchableOpacity
            key={box.id}
            style={[{ backgroundColor: box.colour.hex }, styles.box]}
          >
            <Text style={styles.boxText}>
              {box.colour.name} {box.colour.hex}
            </Text>
          </TouchableOpacity>
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
