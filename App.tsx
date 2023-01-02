import { SafeAreaView, StatusBar, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello, World!</Text>
      </View>
      <StatusBar barStyle={"dark-content"} backgroundColor="white" />
    </SafeAreaView>
  );
};

export default App;
