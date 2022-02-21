import { createStackNavigator } from "@react-navigation/stack";
import Edit from "../Views/Edit";
import Profile from "../Views/Profile";
import Setting from "../Views/Setting";
import SettingIcon from "../Images/setting.svg";
import EditIcon from "../Images/edit.svg";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Touchable,
} from "react-native";
import colors from "../Styles/colors";
const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // shadow on Android
            shadowOpacity: 0, // shadow on iOS,
            shadowRadius: 0, // shadow blur on iOS
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EditIcon
                onPress={() => {
                  console.log("编辑");
                }}
              ></EditIcon>
              <SettingIcon
                style={{ margin: 15 }}
                onPress={() => {
                  console.log("设定");
                }}
              ></SettingIcon>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
