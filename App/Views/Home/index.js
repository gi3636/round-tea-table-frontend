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
      {/* <View style={styles.video}>
        <VideoPlayer
          videoProps={{
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
              // uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
          }}
          style={{
            videoBackgroundColor: "black",
          }}
        />
      </View> */}
      <HomeTopTabNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  container1: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: colors.primary,
    marginBottom: 1,
  },
  video: {
    position: "relative",
    top: 0, // shadow on
    right: 0,
    zIndex: -1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
