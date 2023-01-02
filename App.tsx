import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.lavender]}>
        <Text>Hello, World!</Text>
      </View>
      <StatusBar barStyle={"dark-content"} backgroundColor="white" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  lavender: {
    backgroundColor: "lavender",
  },
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});
