import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile screen</Text>
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
