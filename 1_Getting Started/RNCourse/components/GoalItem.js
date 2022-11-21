import {Text, View} from "react-native";
import {StyleSheet} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#210644'}}
                onPress={() => props.onDeleteItem(props.id)}
                style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
      opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: "white",
    },
});

export default GoalItem;
