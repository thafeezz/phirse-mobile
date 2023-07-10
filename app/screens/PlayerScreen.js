import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";

function PlayerScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.screenContainer}>
        <SearchBar placeholder="Search" icon="search" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlayerScreen;
