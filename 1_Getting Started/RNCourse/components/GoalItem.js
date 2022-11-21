import {Text, View} from "react-native";
import {StyleSheet} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const GoalItem = (props) => {
    return (
        <Pressable onPress={() => props.onDeleteItem(props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white",
    },
});

export default GoalItem;
