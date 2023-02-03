import {StyleSheet, Text, View} from 'react-native';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../store/auth-context";

const WelcomeScreen = () => {
    const [message, setMessage] = useState('');

    const authCtx = useContext(AuthContext);
    const token = authCtx.token;

    useEffect(() => {
        console.log('useEffect token', token);

        axios.get(`https://react-native-course-4af99-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token}`)
            .then((res) => {
                setMessage(res.data);
            })
    }, [token]);

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
            <Text>{message}</Text>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
