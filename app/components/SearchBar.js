import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

function SearchBar({ icon, ...otherProps }) {
  return (
    <View style={styles.bar}>
      {icon && <Ionicons name={icon} size={24} style={styles.star} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
  star: {
    marginRight: 10,
  },
});

export default SearchBar;
