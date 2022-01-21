import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../Styles/colors";

/* 屏幕的宽度 */
const screenWidth = Dimensions.get("window").width;
/* 屏幕的高度 */
const screenHeight = Dimensions.get("window").height;
export default function Profile() {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[Colors.primary, Colors.secondary]}
        style={styles.linearGradient}
      >
        <Text>个人界面</Text>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: Colors.primary,
  },
  linearGradient: {
    flex: 1,
  },
});
