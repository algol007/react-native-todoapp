import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = () => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
    })

    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({});
