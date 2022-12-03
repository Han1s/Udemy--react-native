import {StyleSheet, ImageBackground, SafeAreaView, StatusBar, View} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverSreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameOver] = useState(true);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameOver(false)
    }

    const gameOverHandler = () => {
        setGameOver(true);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
        )
    }

    if (gameIsOver && userNumber) {
        screen = (
            <GameOverScreen />
        )
    }

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode={"cover"}
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <View style={styles.rootScreen}>
                    {screen}
                </View>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    backgroundImage: {
        opacity: 0.15
    },
});
