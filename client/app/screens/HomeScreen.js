import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Text } from "react-native";

import Screen from "../components/Screen";

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Player")}>
        <View style={styles.screenContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>phirse</Text>
            <Text style={styles.subTitle}>sleep easy</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  textContainer: {
    backgroundColor: "black",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "white",
  },
  subTitle: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "400",
    opacity: 0.8,
    color: "white",
  },
});

export default HomeScreen;
