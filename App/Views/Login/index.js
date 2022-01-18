import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import request from "../../Api/request";
export default function Login() {
  const [username, setUsername] = React.useState("123123");
  const [password, setPassword] = React.useState("123456");
  const [errorMsg, setErrorMsg] = React.useState("");
  const client = request.create();

  function login() {
    console.log(
      client
        .login({
          username,
          password,
        })
        .then(function (response) {
          let data = response.data;
          if (data.code !== 20018) {
            setErrorMsg(data.msg);
          }
        })
    );
  }
  function updateUsername(username) {
    console.log(username);
    setUsername(username);
  }

  function updatePassword(password) {
    console.log(password);
    setPassword(password);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>登入界面</Text>
      <Input
        label="用户名"
        onChangeText={updateUsername}
        disabledInputStyle={{ background: "#ddd" }}
        errorMessage={errorMsg}
        errorStyle={{}}
        errorProps={{}}
        leftIcon={
          <MaterialCommunityIcons name="account" size={24} color="black" />
        }
        value={username}
        rightIcon={<Icon name="close" size={20} />}
        rightIconContainerStyle={{}}
        placeholder="用户名"
      />
      <Input
        label="密码"
        onChangeText={updatePassword}
        errorMessage={errorMsg}
        disabledInputStyle={{ background: "#ddd" }}
        leftIcon={
          <MaterialCommunityIcons name="lock" size={24} color="black" />
        }
        value={password}
        rightIcon={<Icon name="close" size={20} />}
        rightIconContainerStyle={{}}
        placeholder="密码"
      />
      <Button onPress={login} title={"登入"}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
