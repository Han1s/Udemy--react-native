import React from 'react';
import {Image, Text, View} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MyComponent = ({route}) => {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{uri: selectedMeal.imageUrl}} />
            <Text>{selectedMeal.tilte}</Text>
            <MealDetails affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} duration={selectedMeal.duration}/>
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step) => <Text key={step}>{step}</Text>)}
        </View>
    );
};

export default MyComponent;
