import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HomeTopTabNavigator from "../../Navigator/HomeTopTabNavigator";
import colors from "../../Styles/colors";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
/* 屏幕的宽度 */
const screenWidth = Dimensions.get("screen").width;
/* 屏幕的高度 */
const screenHeight = Dimensions.get("screen").height;
const Home = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.primary} />
      <HomeTopTabNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
