import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import AppBottomTab from "./App/Navigator/AppBottomTab";

export default function App() {
  return (
    <NavigationContainer>
      <AppBottomTab />
    </NavigationContainer>
  );
}
