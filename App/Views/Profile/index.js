import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import Colors from "../../Styles/colors";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../Styles/colors";
import { Avatar } from "react-native-elements";
import MaleIcon from "../../Images/male.svg";
import FemaleIcon from "../../Images/female.svg";
import CopyIcon from "../../Images/copy.svg";
import Test from "../../Navigator/Test";
import VideoList from "../../Components/VideoList";
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
        <ScrollView>
          <View style={styles.profileContainer}>
            <View style={styles.content}>
              {/* 头像 */}
              <Avatar
                size={124}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/women/57.jpg",
                }}
                containerStyle={{
                  backgroundColor: "grey",
                }}
              ></Avatar>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 24,
                    color: colors.main_font,
                    paddingTop: 5,
                  }}
                >
                  <FemaleIcon></FemaleIcon>
                  &#8197;阿吉&#8197;
                  <MaleIcon></MaleIcon>
                </Text>
              </View>
              {/* ID */}
              <Text
                style={{ fontSize: 12, color: colors.main_font, padding: 5 }}
              >
                ID:84950235
                <CopyIcon
                  onPress={() => {
                    console.log("拷贝");
                  }}
                ></CopyIcon>
              </Text>
              {/* 关注，分数，获得赞*/}
              <View
                style={{
                  marginLeft: "3%",
                  width: "95%",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {/* 关注 */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: colors.main_font,
                        paddingBottom: 5,
                      }}
                    >
                      2545
                    </Text>
                    <Text style={{ fontSize: 14, color: colors.main_font }}>
                      关注中
                    </Text>
                  </View>
                </View>
                {/* 竖线 */}
                <View
                  style={{
                    marginTop: 5,
                    backgroundColor: colors.main_font,
                    width: 1,
                    height: "80%",
                    borderRadius: 20,
                  }}
                />
                {/* 粉丝 */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: colors.main_font,
                        paddingBottom: 5,
                      }}
                    >
                      2545
                    </Text>
                    <Text style={{ fontSize: 14, color: colors.main_font }}>
                      粉丝
                    </Text>
                  </View>
                </View>
                {/* 竖线 */}
                <View
                  style={{
                    marginTop: 5,
                    backgroundColor: colors.main_font,
                    width: 1,
                    height: "80%",
                    borderRadius: 20,
                  }}
                />
                {/* 获赞 */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: colors.main_font,
                        paddingBottom: 5,
                      }}
                    >
                      2545
                    </Text>
                    <Text style={{ fontSize: 14, color: colors.main_font }}>
                      获赞
                    </Text>
                  </View>
                </View>
              </View>
              {/* 介绍 */}
              <View style={{ paddingTop: 10 }}>
                <Text
                  numberOfLines={4}
                  ellipsizeMode="tail"
                  style={{
                    color: colors.main_font,
                    fontSize: 14,
                  }}
                >
                  当来到一个新环境时，时常需要我们进行一个自我介绍，自我介绍是人与人进行沟通的出发点。写起自我自我介绍是人与人进行沟通的出发点。写起自
                  份未发未发对方快来解放昆仑山搭街坊去给分effe
                </Text>
                <Text
                  style={{
                    paddingTop: 2,
                    color: colors.primary,
                    alignSelf: "flex-end",
                  }}
                >
                  查看更多
                </Text>
              </View>
              {/* 水平线 */}
              <View
                style={{
                  opacity: 0.5,
                  marginTop: 10,
                  backgroundColor: colors.placeholder,
                  height: 1,
                  width: "100%",
                }}
              ></View>
              {/* 选单 */}
              <Text>测试1</Text>
              <Test></Test>
              <Text>测试2</Text>
            </View>
          </View>
        </ScrollView>
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
  profileContainer: {
    height: screenHeight,
    width: screenWidth - 50,
    marginLeft: 25,
    marginTop: 80,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  content: {
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    top: -50,
  },
});
