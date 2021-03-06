import axios from "axios";
import config from "../Config/setting";
import { getStorageToken } from "../Utils/storage";

const create = () => {
  const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: 3000,
    headers: {},
  });

  //请求拦截处理
  instance.interceptors.request.use(
    async function (config) {
      console.log("请求前拦截");
      const token = null;
      getStorageToken().then(function (value) {
        token = value;
      });
      if (token) {
        config.headers["token"] = token;
      }
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  //返回拦截处理
  instance.interceptors.response.use(
    function (response) {
      console.log("返回拦截");

      // 对响应数据做点什么
      return response;
    },
    function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );

  const login = (param) => instance.post("/login", { ...param });
  const register = (param) => instance.post("/register", { ...param });
  const searchFriend = (param) =>
    instance.post("api/friend/searchFriend", { ...param });
  const addFriend = (param) =>
    instance.post("api/friend/addFriend", { ...param });
  const deleteFriend = (param) =>
    instance.post("api/friend/deleteFriend", { ...param });
  const getFriendList = (id) =>
    instance.get("api/friend/getFriendList?selfId=" + id);
  const loginOut = (id) => instance.get("api/user/loginOut?userId=" + id);
  const getMessageHistory = ({ roomId, messageId, page }) =>
    instance.get(
      "api/message/getMessageHistory?roomId=" +
        roomId +
        "&messageId=" +
        messageId +
        "&page=" +
        page
    );
  const deleteMessageHistory = (id) =>
    instance.get("api/message/deleteMessageHistory?roomId=" + id);

  const publishArticle = (param) =>
    instance.post("api/user/publishArticle", { ...param });
  const getArticle = (page) => instance.get("api/user/getArticle?page=" + page);

  const comment = (param) => instance.post("api/user/comment", { ...param });
  const getComment = (id) =>
    instance.get("api/user/getComment?articleId=" + id);
  const changeName = (param) =>
    instance.post("api/user/changeName", { ...param });
  const changeAvatar = (param) =>
    instance.post("api/user/changeAvatar", { ...param });

  const thumbUp = (param) => instance.post("api/user/thumbUp", { ...param });
  const isThumbUp = (param) =>
    instance.post("api/user/isThumbUp", { ...param });
  const cancelThumbUp = (param) =>
    instance.post("api/user/cancelThumbUp", { ...param });
  const getThumb = (id) => instance.get("api/user/getThumb?articleId=" + id);

  const refreshToken = (refresh_token) =>
    instance.post("api/user/refreshToken", { refresh_token });

  return {
    login,
    register,
    searchFriend,
    addFriend,
    deleteFriend,
    getFriendList,
    loginOut,
    getMessageHistory,
    deleteMessageHistory,
    refreshToken,
    publishArticle,
    getArticle,
    comment,
    getComment,
    changeAvatar,
    changeName,
    thumbUp,
    getThumb,
    isThumbUp,
    cancelThumbUp,
  };
};

export default {
  create,
};
