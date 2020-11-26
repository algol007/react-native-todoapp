import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header, Activity } from '../../components';
import { AddTodo } from '../../modules';

const Home = () => {
    const [activity, setActivity] = useState([
        { id: '1', title: 'Plan' },
        { id: '2', title: 'Pray' },
        { id: '3', title: 'Play' },
    ]);

    const [text, setText] = useState('');

    const submitActivity = (value) => {
        setActivity((todos) => {
            return [
                { id: Math.random().toString(), title: value },
                ...todos
            ]
        })
        // setText('')
    }

    const onChangeText = (val) => {
        setText(val)
    }

    const deleteActivity = (item) => {
        Alert.alert(
            "Delete Activity",
            "Are you sure to delete this activity?",
            [
                {
                    text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => {
                    setActivity(activity.filter(activity => activity.id !== item.id))
                }}
            ],
            { cancelable: false }  
        )  
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('Keyboard dismiss');
        }}>
            <View style={styles.homeWrapper}>
                <Header />
                <View style={styles.container}>
                    <AddTodo 
                        onPress={() => submitActivity(text)}
                        onChangeText={(val) => onChangeText(val)}
                    />
                    <View style={styles.activityList}>
                        <FlatList 
                            keyExtractor={(item) => item.id}
                            data={activity}
                            renderItem={({ item }) =>
                                <Activity activity={item.title} onPress={() => deleteActivity(item)} />
                            }
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Home;

const styles = StyleSheet.create({
    homeWrapper: {
        backgroundColor: '#FFF',
        flex: 1
    },
    container: {
        padding: 20,
        flex: 1
    },
    activityList: {
        flex: 1,
        // backgroundColor: 'yellow'
    }
});
