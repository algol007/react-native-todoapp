import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home, About, Detail } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Splash" 
                component={Splash}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="About" 
                component={About} 
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail} 
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    )
}

export default Router;
