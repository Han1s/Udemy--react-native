import React from 'react';

import {CATEGORIES} from "../data/dummy-data";
import {FlatList} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {

    const renderCategoryItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={() => {
                navigation.navigate('MealsOverview', {
                    categoryId: itemData.item.id,
                })
            }}/>
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            numColumns={2}
            keyExtractor={(item) => item.id}/>
    );
};

export default CategoriesScreen;
