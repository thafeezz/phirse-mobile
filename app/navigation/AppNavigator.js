import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import PlayerScreen from "../screens/PlayerScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Player" component={PlayerScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
