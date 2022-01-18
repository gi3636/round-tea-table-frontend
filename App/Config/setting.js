import Constants from "expo-constants";

const settings = {
  dev: {
    baseUrl: "http://192.168.1.43:8888/",
    socketUrl: "http://192.168.31.47:3901",
  },
  //   staging: {
  //     apiUrl: "http://bugi-staging.bugilabs.com:3901/api",
  //     socketUrl: "http://bugi-staging.bugilabs.com:3901",
  //   },
  //   prod: {
  //     apiUrl: "http://bugi-staging.bugilabs.com:3901/api",
  //     socketUrl: "http://bugi-staging.bugilabs.com:3901",
  //   },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
