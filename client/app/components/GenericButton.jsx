import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function GenericButton({ name, func }) {
  return (
    <TouchableOpacity onPress={func}>
      <View style={styles.button}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default GenericButton;
