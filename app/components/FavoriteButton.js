import React, { useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteButton = () => {
    setIsFavorite((prevState) => !prevState);
    // add to list of favorites
    // if isFavorite is true, add to favorites
    // if isFavorite is false, remove from favorites
  };

  const starStyles = isFavorite ? styles.selected : styles.notSelected;
  const starName = isFavorite ? "star-remove" : "star-plus-outline";

  return (
    <View>
      <Pressable onPress={handleFavoriteButton}>
        <MaterialCommunityIcons
          name={starName}
          size={40}
          style={[styles.button, starStyles]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    color: "gold",
  },
  notSelected: {
    color: "gray",
  },
});

export default FavoriteButton;
