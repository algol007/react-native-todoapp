import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Activity = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.activity}>{props.activity}</Text>
        </View>
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
