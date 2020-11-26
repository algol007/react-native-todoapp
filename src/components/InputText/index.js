import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputText = (props) => {

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 2,
        margin: 5
    }
});
