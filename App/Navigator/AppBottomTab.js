import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import ProfileNavigator from "../Navigator/ProfileNavigator";
import Friend from "../Views/Friend";
import Home from "../Views/Home";
import Login from "../Views/Login";
const Tab = createBottomTabNavigator();

export default function AppBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
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
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="adduser" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="login" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
