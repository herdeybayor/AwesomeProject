import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "../typings";
import ColorPalette from "./ColorPalette";
import HomeScreen from "./Home";

const MainStack = createNativeStackNavigator<MainStackParamList>();
MainStack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: true,
    headerStyle: {
      backgroundColor: "white",
    },
    headerTintColor: "black",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    animation: "slide_from_right",
    headerTitleAlign: "center",
  },
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.title })}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
