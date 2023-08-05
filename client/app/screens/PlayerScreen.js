import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";

function PlayerScreen() {
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
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default PlayerScreen;
