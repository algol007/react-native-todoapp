import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home, About } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Splash" 
                component={Splash} 
            />
            <Stack.Screen 
                name="Home" 
                component={Home} 
            />
            <Stack.Screen 
                name="About" 
                component={About} 
            />
        </Stack.Navigator>
    )
}

export default Router;
