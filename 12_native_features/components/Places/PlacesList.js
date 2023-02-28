import React from "react";
import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ places }) => {
  const renderItem = (item) => (
    <PlaceItem place={item} />
  )

  return <FlatList data={places} keyExtractor={(item) => item.id} renderItem={renderItem}/>;
};

export default PlacesList;
