import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { costumStyle } from '../../styles';

const Detail = ({ navigation, route }) => {

    return (
        <View style={costumStyle.container}>
            <Text>{ route.params.title }</Text>
            <Button 
                title="Back" 
                onPress={() => navigation.goBack()} 
                color="coral"
            />
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({});
