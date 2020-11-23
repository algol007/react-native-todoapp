import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'coral',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    }
});
