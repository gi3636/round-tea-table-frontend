import AsyncStorage from "@react-native-async-storage/async-storage";
export const getStorageToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("getToken", e.message);
  }
};

export const saveStorageToken = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (e) {
    console.log("saveToken", e.message);
  }
};

export const getStorageUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("user");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("getUser", e.message);
  }
};

export const saveStorageUser = async (user) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (e) {
    console.log("saveUser", e.message);
  }
};
