import {FlatList, StyleSheet, View,} from "react-native";
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((prevCourseGoals) => [
            ...prevCourseGoals,
            {
                text: enteredGoalText,
                id: Math.random().toString(),
            },
        ]);
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals((prevGoals) => {
          return prevGoals.filter((goal) => goal.id !== id)
        })
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(itemData) =>
                        <GoalItem
                            id={itemData.item.id}
                            onDeleteItem={deleteGoalHandler}
                            text={itemData.item.text}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer: {
        flex: 5,
    },
});
