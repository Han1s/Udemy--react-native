import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MyComponent = ({route}) => {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView style={styles.root}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                duration={selectedMeal.duration}
                textStyle={styles.detailText}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
};

export default MyComponent;

const styles = StyleSheet.create({
    root: {
      marginBottom: 32
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: "white"
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
      alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})
