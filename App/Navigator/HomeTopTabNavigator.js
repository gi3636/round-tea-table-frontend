import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomTabBar from "../Components/CustomTabBar";
import colors from "../Styles/colors";
import Follow from "../Views/Follow";
import Friend from "../Views/Friend";
import Recommed from "../Views/Recommed";
const Tab = createMaterialTopTabNavigator();

export default HomeTopTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      headerTransparent={true}
      firstRoute={"朋友"}
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.placeholder,
        tabBarLabelStyle: {
          fontSize: 20,
          textTransform: "uppercase",
        },
        tabBarItemStyle: {
          alignSelf: "center",
        },
        //指示器的样式
        tabBarIndicatorStyle: {
          // height:0, height 为0不显示
          backgroundColor: colors.white,
          borderRadius: 50,
          width: "20%",
          left: "7%",
          top: "90%",
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: "transparent",
        },
        tabBarStyle: {
          position: "absolute",
          paddingTop: insets.top,
          alignSelf: "center",
          width: "60%",
          backgroundColor: "transparent",
          elevation: 0, // shadow on Android
          shadowOpacity: 0, // shadow on iOS,
          shadowRadius: 0, // shadow blur on iOS
        },
      }}
    >
      <Tab.Screen name="推荐" component={Recommed} />
      <Tab.Screen name="朋友" component={Friend} />
      <Tab.Screen name="关注" component={Follow} />
    </Tab.Navigator>
  );
};
