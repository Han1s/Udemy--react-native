import React from 'react';
import {Platform, StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        width: '80%',
        textAlign: 'center',
        borderWidth: 0,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%'
    }
})

export default Title;
