import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useRef, useEffect } from "react";
import jwt_decode from "jwt-decode";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import { Button, Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import request from "../../Api/request";
import SvgUri from "react-native-svg-uri";
import UserIcon from "../../Images/user.svg";
import LockIcon from "../../Images/lock.svg";
import colors from "../../Styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
// import { saveUserAction } from "../../Redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../../Redux/userSlice";
import { updateLoading } from "../../Redux/loadingSlice";
import AwesomeLoading from "react-native-awesome-loading";
import { saveStorageToken } from "../../Utils/storage";
export default function Register({ navigation }, props) {
  //react-hooks-form 组件
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      username: "12345678",
      password: "123456",
      comfirmPassword: "123456",
    },
  });
  //监听并获取password的值
  const pwd = watch("password");
  //网络请求
  const client = request.create();
  //获取store 的user
  const user = useSelector((state) => state.user.userObj);
  const dispatch = useDispatch();

  function register(data) {
    dispatch(updateLoading());

    client
      .register({
        username: data.username,
        password: data.password,
      })
      .then(function (response) {
        let result = response.data;
        console.log(result);
        if (result.success) {
          Alert.alert("注册成功", "", [
            {
              text: "确认",
              onPress: () => {
                navigation.goBack();
              },
            },
          ]);
        } else {
          ToastAndroid.show(result.message, ToastAndroid.SHORT);
        }
        dispatch(updateLoading());
      })
      .catch(function (error) {
        Alert.alert("Error：" + error.message);
        dispatch(updateLoading());
      });
  }

  function clear(key) {
    return () => {
      setValue(key, "");
    };
  }

  return (
    <View style={{ flex: 1 }}>
      <Controller
        name="username"
        control={control}
        rules={{ required: "用户名不能为空" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              onChangeText={onChange}
              disabledInputStyle={{ background: "#ddd" }}
              leftIcon={<UserIcon></UserIcon>}
              leftIconContainerStyle={{ marginLeft: 10 }}
              value={value}
              rightIcon={
                <Icon
                  onPress={clear("username")}
                  name="close"
                  size={20}
                  color={colors.placeholder}
                />
              }
              rightIconContainerStyle={{
                margin: 5,
                display: value ? "flex" : "none",
              }}
              placeholder="用户名"
              containerStyle={{
                top: 16,
                height: 80,
              }}
              inputContainerStyle={{
                borderColor: error ? colors.danger : "transparent",
                borderWidth: 1,
                backgroundColor: "white",
                borderRadius: 4,
                margin: 6,
                elevation: 3,
              }}
              inputStyle={{
                backgroundColor: "white",
                padding: 12,
                color: colors.main_font,
              }}
            />
            {error && (
              <Text
                style={{
                  color: colors.danger,
                  marginLeft: 15,
                  alignSelf: "stretch",
                }}
              >
                {error.message || "错误"}
              </Text>
            )}
          </>
        )}
      ></Controller>
      <Controller
        name="password"
        control={control}
        rules={{ required: "密码不能为空" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              onChangeText={onChange}
              disabledInputStyle={{ background: "#ddd" }}
              leftIcon={<LockIcon></LockIcon>}
              leftIconContainerStyle={{ marginLeft: 10 }}
              value={value}
              rightIcon={
                <Icon
                  onPress={clear("password")}
                  name="close"
                  size={20}
                  color={colors.placeholder}
                />
              }
              rightIconContainerStyle={{
                margin: 5,
                display: value ? "flex" : "none",
              }}
              placeholder="密码"
              containerStyle={{
                height: 60,
              }}
              inputContainerStyle={{
                borderColor: error ? colors.danger : "transparent",
                borderWidth: 1,
                backgroundColor: "white",
                borderRadius: 4,
                margin: 6,
                elevation: 3,
              }}
              inputStyle={{
                backgroundColor: "white",
                padding: 12,
                color: colors.main_font,
              }}
            />
            {error && (
              <Text
                style={{
                  color: colors.danger,
                  marginLeft: 15,
                  alignSelf: "stretch",
                }}
              >
                {error.message || "错误"}
              </Text>
            )}
          </>
        )}
      ></Controller>
      <Controller
        name="comfirmPassword"
        control={control}
        rules={{
          required: "确认密码不能为空",
          validate: (value) => value === pwd || "密码不一致",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              onChangeText={onChange}
              disabledInputStyle={{ background: "#ddd" }}
              leftIcon={<LockIcon></LockIcon>}
              leftIconContainerStyle={{ marginLeft: 10 }}
              value={value}
              rightIcon={
                <Icon
                  onPress={clear("comfirm_password")}
                  name="close"
                  size={20}
                  color={colors.placeholder}
                />
              }
              rightIconContainerStyle={{
                margin: 5,
                display: value ? "flex" : "none",
              }}
              placeholder="确认密码"
              containerStyle={{
                height: 60,
              }}
              inputContainerStyle={{
                borderColor: error ? colors.danger : "transparent",
                borderWidth: 1,
                backgroundColor: "white",
                borderRadius: 4,
                margin: 6,
                elevation: 3,
              }}
              inputStyle={{
                backgroundColor: "white",
                padding: 12,
                color: colors.main_font,
              }}
            />
            {error && (
              <Text
                style={{
                  color: colors.danger,
                  marginLeft: 15,
                  alignSelf: "stretch",
                }}
              >
                {error.message || "错误"}
              </Text>
            )}
          </>
        )}
      ></Controller>

      <Button
        style
        onPress={handleSubmit(register)}
        title={"注册"}
        buttonStyle={{
          backgroundColor: colors.primary,
          borderRadius: 4,
          padding: 10,
        }}
        containerStyle={{
          width: 150,
          marginHorizontal: 50,
          marginVertical: 10,
          alignSelf: "center",
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "#ADB5BD",
    elevation: 5, // shadow on Android
    shadowOpacity: 0, // shadow on iOS,
    shadowRadius: 0, // shadow blur on iOS
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 8,
    paddingBottom: 10,
  },
  checkBoxTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    left: -5,
  },
});
