import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../Styles/colors";
import VideoPage from "../../Components/VideoPage";
const Recommend = () => {
  const [number, setNumber] = React.useState(0);
  const [videoList, setVideoList] = React.useState([
    {
      id: 0,
      videoUrl:
        "https://roundteatable-video-bucket.oss-cn-beijing.aliyuncs.com/yt1s.com%20-%203%E6%9C%88%E3%81%AE%E3%83%A9%E3%82%A4%E3%82%AA%E3%83%B3%20Sangatsu%20no%20Lion%20%20OP%201%20%20%20%E3%83%95%E3%83%A9%E3%83%83%E3%82%B0%E3%82%92%E7%AB%8B%E3%81%A6%E3%82%8D%20Flag%20o%20Tatero_360p.mp4",
    },
    {
      id: 1,
      videoUrl:
        "https://roundteatable-video-bucket.oss-cn-beijing.aliyuncs.com/%E4%B8%8A%E6%99%9A%E8%87%AA%E4%B9%A0%E6%97%B6%E7%9A%84%E5%87%A0%E7%A7%8D%E4%BA%BA%20%EF%BC%88%E8%B6%85%E7%9C%9F%E5%AE%9E%E7%B3%BB%E5%88%97%EF%BC%89.mp4",
    },
    {
      id: 2,
      videoUrl:
        "https://roundteatable-video-bucket.oss-cn-beijing.aliyuncs.com/%E8%80%83%E8%AF%95%E6%97%B6%E7%9A%84%E5%87%A0%E7%A7%8D%E4%BA%BA%EF%BC%88%E4%B8%8B%EF%BC%89%20%E6%8A%96%E9%9F%B32021%20%E6%8A%96%E9%9F%B3%E3%80%90%E7%83%AD%E7%82%B9%E3%80%91tiktok2021%20douyin%20%E5%BF%AB%E6%89%8B2021%20%E6%90%9E%E7%AC%91%20%E6%B2%99%E9%9B%95%E8%A7%86%E9%A2%91%E5%88%86%E4%BA%AB.mp4",
    },
    {
      id: 3,
      videoUrl:
        "https://roundteatable-video-bucket.oss-cn-beijing.aliyuncs.com/milet%E3%80%8Cinside%20you%E3%80%8DMUSIC%20VIDEO%EF%BC%88%E5%85%88%E8%A1%8C%E9%85%8D%E4%BF%A1%E4%B8%AD%EF%BC%81%E7%AB%B9%E5%86%85%E7%B5%90%E5%AD%90%E4%B8%BB%E6%BC%94%E3%83%BB%E3%83%95%E3%82%B8%E3%83%86%E3%83%AC%E3%83%93%E7%B3%BB%E3%83%89%E3%83%A9%E3%83%9E%E3%80%8E%E3%82%B9%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%80%E3%83%AB%E5%B0%82%E9%96%80%E5%BC%81%E8%AD%B7%E5%A3%AB%20QUEEN%E3%80%8FOP%E3%83%86%E3%83%BC%E3%83%9E%EF%BC%89.mp4",
    },
  ]);
  function handlePageScroll(e) {
    // setNumber(number + 1);
    // console.log("number", number);
    console.log("Current page index", e.nativeEvent.position);
    setNumber(e.nativeEvent.position);
  }

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[colors.primary, colors.secondary]}
      >
        <PagerView
          style={styles.viewPager}
          initialPage={0}
          orientation="vertical"
          onPageSelected={handlePageScroll}
        >
          {videoList.map((video, index) => {
            return (
              <View style={styles.page} key={video.id}>
                <VideoPage
                  id={video.id}
                  number={number}
                  videoUrl={video.videoUrl}
                />
              </View>
            );
          })}
        </PagerView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Recommend;
