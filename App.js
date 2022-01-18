import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from "native-base";
import * as React from "react";
import AppBottomTab from "./App/Navigator/AppBottomTab";
import ProfileNavigator from "./App/Navigator/ProfileNavigator";
import Friend from "./App/Views/Friend";
import Home from "./App/Views/Home";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      screenOptions={{
        tabBarActiveTintColor: "#FF7300",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Friend"
        component={Friend}
        options={{
          tabBarLabel: "Friend",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-friends" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="adduser" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <AppBottomTab />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
