import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigator from "./app/navigation/HomeNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
