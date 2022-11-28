import React from "react";
import {StyleSheet, Text, View} from "react-native";

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            {/*GUESS*/}
            <View>
                <Text>Higher or lower?</Text>
                {/*+*/}
                {/*-*/}
            </View>
            {/*<View>LOG ROUNDS</View>*/}
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 24
    }
})
