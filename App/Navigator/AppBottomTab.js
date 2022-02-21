import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Video from "../Images/video.svg";
import colors from "../Styles/colors";
import Friend from "../Views/Friend";
import Home from "../Views/Home";
import Login from "../Views/Login";
import Message from "../Views/Message";
import Profile from "../Views/Profile";
import LoginNavigator from "./LoginNavigator";
import Spinner from "react-native-loading-spinner-overlay";
import { useSelector, useDispatch } from "react-redux";
import AppLoader from "../Components/AppLoader";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export default function AppBottomTab() {
  const loading = useSelector((state) => state.isLoading.loading);
  console.log(loading);
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Friend"
          component={Friend}
          options={{
            tabBarLabel: "Friend",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="profile" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="登入"
          component={LoginNavigator}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              // <Image
              //   source={require("../Images/video.png")}
              //   style={{ width: 50, height: 50 }}
              // />
              <Video
                style={{ width: "100%", height: "100%", padding: 30 }}
              ></Video>
            ),
            tabBarItemStyle: { marginBottom: 10 },
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarLabel: "Message",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="message1" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileNavigator"
          component={ProfileNavigator}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <AppLoader />
    </>
  );
}
