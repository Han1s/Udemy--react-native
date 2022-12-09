import React from 'react';
import { MEALS } from "../data/dummy-data";
import {Text, View, StyleSheet, FlatList} from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.includes(categoryId)
    })

    const renderMealItem = (itemData) => <MealItem title={itemData.item.title} />

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={displayedMeals}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
