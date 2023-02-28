import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const PlaceItem = ({ places, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{places.title}</Text>
        <Text>{places.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;