import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component= {Home} options={{ title: 'Todo List', headerTitleAlign: 'center',
                 headerStyle: {  backgroundColor: '#bdc3c7',}, headerTintColor: 'black', headerTitleStyle: { fontWeight: 'bold',}, }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
