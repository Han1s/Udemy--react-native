import React, {useState} from "react";
import {Alert, StyleSheet, Text, View} from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({userNumber}) => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    let minBoundary = 1;
    let maxBoundary = 100;

    const nextGuessHandler = (direction) => {
        if (direction === 'lower' && currentGuess < userNumber ||
            direction === 'greater' && currentGuess > userNumber) {
            Alert.alert(
                'Dont lie!',
                'You know that this is wrong',
                [{text: 'Sorry!', style: 'cancel'}]
            )
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
                </View>
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
