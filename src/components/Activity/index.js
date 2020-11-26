import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Activity = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.activity}>{props.activity}</Text>
        </TouchableOpacity>
    )
}

export default Activity;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 2,
        borderColor: 'coral',
        margin: 5,
        flex: 1
    },
    activity: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
