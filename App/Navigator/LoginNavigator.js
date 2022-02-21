import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Views/Login";
import colors from "../Styles/colors";
import Register from "../Views/Register";
import { Button, Input, CheckBox } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "登入",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: "注册",
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
