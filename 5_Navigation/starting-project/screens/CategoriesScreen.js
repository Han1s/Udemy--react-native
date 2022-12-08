import React from 'react';

import { CATEGORIES } from "../data/dummy-data";
import {FlatList} from "react-native";

const CategoriesScreen = () => {

    const renderCategoryItem = (item) => {
        return (

        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={}
            keyExtractor={item => item.id} />
    );
};

export default CategoriesScreen;
