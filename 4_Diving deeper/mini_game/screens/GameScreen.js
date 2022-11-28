import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
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
