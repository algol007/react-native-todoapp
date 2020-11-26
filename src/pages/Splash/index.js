import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 2000);
    })

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>TODO APP</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'coral',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
