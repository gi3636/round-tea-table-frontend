import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  LogBox,
} from "react-native";
import { Button } from "react-native-elements";
import colors from "../../Styles/colors";
import VideoPlayer from "expo-video-player";
import { Avatar } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
/* 屏幕的宽度 */
const screenWidth = Dimensions.get("window").width;
/* 屏幕的高度 */
const screenHeight = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function Message() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  const videoRef = useRef(null);
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[colors.primary, colors.secondary]}
      >
        <View style={styles.video}>
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
              videoBackgroundColor: "transparent",
              height: screenHeight - 20,
            }}
          />
        </View>
        {/* <View style={styles.video_cover}>
          
        </View> */}
        <View style={styles.iconGroup}>
          <View style={styles.iconContainer}>
            <Button
              icon={{
                name: "heart",
                type: "ant-design",
                size: 40,
                color: "white",
              }}
              buttonStyle={{ backgroundColor: "transparent" }}
              containerStyle={{
                width: 70,
              }}
            ></Button>
            <Text style={styles.label}>1995</Text>
          </View>
          <View style={styles.iconContainer}>
            <Button
              icon={{
                name: "commenting",
                type: "font-awesome",
                size: 40,
                color: "white",
              }}
              buttonStyle={{ backgroundColor: "transparent" }}
              containerStyle={{
                width: 70,
              }}
            ></Button>
            <Text style={styles.label}>1995</Text>
          </View>
          <View style={styles.iconContainer}>
            <Button
              icon={{
                name: "share",
                type: "font-awesome",
                size: 40,
                color: "white",
              }}
              buttonStyle={{ backgroundColor: "transparent" }}
              containerStyle={{
                width: 70,
              }}
            ></Button>
            <Text style={styles.label}>1995</Text>
          </View>
        </View>
        <View style={styles.authorDetailsContainer}>
          <Avatar
            size={60}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/women/57.jpg" }}
            containerStyle={{
              backgroundColor: "grey",
              borderWidth: 2,
              borderColor: colors.white,
            }}
          ></Avatar>
          <Avatar
            size={28}
            rounded
            title="+"
            titleStyle={{ fontSize: 20, marginBottom: 6 }}
            containerStyle={{
              position: "absolute",
              top: 17,
              left: 50,
              fontSize: 10,
              backgroundColor: colors.danger,
            }}
          />

          <Text style={{ color: colors.white, marginTop: 7, marginLeft: 2 }}>
            @林锋吉
          </Text>
          <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={{
              width: "60%",
              color: colors.white,
              marginTop: 4,
              marginLeft: 2,
            }}
          >
            本项目是一款用flutter实现的仿开眼短视频项目的App，项目具有比较完整的结构，代码整洁规范，结构清晰。
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight - 100,
  },
  video: {
    position: "absolute",
    right: 0,
    height: 160,
    top: -80,
  },
  video_cover: {
    backgroundColor: "transparent",
  },
  iconGroup: {
    opacity: 0.8,
    position: "absolute",
    right: 5,
    top: "53%",
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  label: {
    top: -8,
    color: "white",
  },
  authorDetailsContainer: {
    position: "relative",
    top: "62%",
    left: 10,
    opacity: 0.95,
  },
  followBtn: {},
  videoIntroduction: {
    top: 10,
  },
});
