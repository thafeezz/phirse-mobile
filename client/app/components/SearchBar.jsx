import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import axios, { Axios } from "axios";
import colors from "../config/colors";

function SearchBar({ icon, onSearch }) {
  [search, setSearch] = useState("");

  const handleSearch = async () => {
    

  };

  return (
    <View style={styles.bar}>
      {icon && <Ionicons name={icon} size={24} style={styles.search} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    width: "50%",
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
  search: {
    marginRight: 10,
  },
});

export default SearchBar;
