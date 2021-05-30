import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import testViewUsers from './testViewUsers';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="testViewUsers" component={testViewUsers} />
    </RootStack.Navigator>
);

export default RootStackScreen;