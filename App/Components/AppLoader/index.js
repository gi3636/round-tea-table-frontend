import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../../Styles/colors";
import { useSelector, useDispatch } from "react-redux";

export default function AppLoader() {
  const loading = useSelector((state) => state.isLoading.loading);
  return (
    <View>
      <Modal transparent={true} visible={loading}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    zIndex: 100,
    backgroundColor: "#545466",
  },
});
