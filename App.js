import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import AppBottomTab from "./App/Navigator/AppBottomTab";
import { Provider } from "react-redux";
import store from "./App/Redux/store";
import AppLoader from "./App/Components/AppLoader";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppBottomTab />
      </Provider>
    </NavigationContainer>
  );
}
