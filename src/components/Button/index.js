import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Button = (props) => {
    return (
        <Button onPress={props.onPress} color="coral">
            <Text style={styles.title}>{props.title}</Text>
        </Button>
    )
}

export default Button

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'coral',
        justifyContent: 'center'
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})
