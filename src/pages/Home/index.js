import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
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

    return (
        <View style={styles.homeWrapper}>
            <Header />
            <View style={styles.container}>
                <AddTodo 
                    onPress={() => submitActivity(text)}
                    onChangeText={(val) => onChangeText(val)}
                    // value={text}
                />
                <FlatList 
                    // numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={activity}
                    renderItem={({ item }) =>
                        <Activity activity={item.title} />
                    }
                />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    homeWrapper: {
        backgroundColor: '#FFF',
        flex: 1
    },
    container: {
        padding: 10,
    }
});
