import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import TestView from './screens/testViewUsers';
//import HomeScreen from './screens/HomeScreen';

const AppStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
            >
                <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
                <AppStack.Screen name="Login" component={LoginScreen} />
                <AppStack.Screen name="SignUp" component={SignUpScreen} />
                <AppStack.Screen name="TestView" component={TestView} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default App;
