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
export default function Login({ navigation }, props) {
  //react-hooks-form 组件
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: { username: "123123", password: "123456" },
  });
  //同意隐私政策
  const [check, setCheck] = useState(false);
  //网络请求
  const client = request.create();
  //获取store 的user
  const user = useSelector((state) => state.user.userObj);
  const dispatch = useDispatch();

  function login(data) {
    if (!check) {
      Alert.alert("请同意隐私政策后再点击登入。");
      return;
    }
    dispatch(updateLoading());

    client
      .login({
        username: data.username,
        password: data.password,
      })
      .then(function (response) {
        let result = response.data;
        if (result.success) {
          let token = result.data.token;
          let decoded = jwt_decode(token);
          dispatch(saveUser(decoded));
          saveStorageToken(token);
        } else {
          ToastAndroid.show(data.message, ToastAndroid.SHORT);
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
                top: 20,
                height: 90,
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
                  top: -7,
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
        rules={{ required: "密码不能为空" }}
        control={control}
        name="password"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
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
                display: value ? "flex" : "none",
                margin: 5,
              }}
              placeholder="密码"
              containerStyle={{
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
                  top: -15,
                  alignSelf: "stretch",
                  paddingBottom: 10,
                }}
              >
                {error.message || "错误"}
              </Text>
            )}
          </>
        )}
      ></Controller>

      <View style={{ flexDirection: "row", top: -12 }}>
        <Text style={{ paddingLeft: 16, flex: 1, color: colors.main_font }}>
          忘记密码？
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              flex: 1,
              color: colors.main_font,
              textAlign: "right",
              paddingRight: 16,
            }}
          >
            注册新用户
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkBoxContainer}>
        <CheckBox
          center={true}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            padding: 0,
            margin: 0,
            top: 1,
          }}
          checked={check}
          checkedIcon="check-square"
          checkedColor={colors.primary}
          onPress={() => setCheck(!check)}
        />
        <View style={styles.checkBoxTextContainer}>
          <Text style={{ color: colors.main_font }}>我同意</Text>
          <Text style={{ color: colors.primary }}>隐私政策</Text>
        </View>
      </View>
      <Button
        style
        onPress={handleSubmit(login)}
        title={"登入"}
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
