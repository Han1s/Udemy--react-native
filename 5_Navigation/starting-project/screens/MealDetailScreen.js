import React from 'react';
import {Text} from "react-native";

const MyComponent = ({route}) => {
    const mealId = route.params.mealId;

    return (
        <Text>This is the Meal Detail Screen. ({mealId})</Text>
    );
};

export default MyComponent;
