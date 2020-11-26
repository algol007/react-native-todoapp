import React from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { InputText } from '../../components';

const AddTodo = (props) => {
    return (
        <View style={{marginBottom: 20}}>
            <InputText placeholder="e.g. Playing Badminton" onChangeText={props.onChangeText} />
            <View style={{paddingHorizontal: 5}}>
                <Button 
                    title="ADD" 
                    color="coral" 
                    onPress={props.onPress}
                />
            </View>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({})
