import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity} from 'react-native';

import MyLesson from './MyLesson';
import Leksiyon from './Leksiyon';
import Learning from './Learning';
import CriteriaScreen from './CriteriaScreen';

const LessonsStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
        <LessonsStack.Navigator screenOptions={{        
            headerStyle: {
                backgroundColor: '#402A03',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <LessonsStack.Screen 
                name = "Home" 
                component={CriteriaScreen} 
                options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                    </Icon.Button>
                )
            }}></LessonsStack.Screen>

            <LessonsStack.Screen 
                name = "MyLesson" 
                component={MyLesson} 
                options={{
                headerLeft: () => (
                    <Icon.Button name="ios-arrow-back" size={25}
                        backgroundColor="#402A03" onPress={() => navigation.goBack()}>
                    </Icon.Button>
                )
            }}></LessonsStack.Screen>

            <LessonsStack.Screen 
                name = "Leksiyon" 
                component={Leksiyon} 
                options={({navigation}) => ({
                    // headerTransparent: true, 
                    headerLeft: () => (
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        backgroundColor="#402A03"
                        onPress={() => navigation.goBack()}>
                    <Icon 
                        name="ios-arrow-back" 
                        size={25}
                        style={{marginLeft: 20, color: '#fff'}} 
                    />
                    </TouchableOpacity>
                    )
            })}></LessonsStack.Screen>

            <LessonsStack.Screen 
                name = "Learning" 
                component = {Learning} 
                options={({navigation}) => ({
                    // headerTransparent: true, 
                    headerLeft: () => (
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        backgroundColor="#402A03"
                        onPress={() => navigation.goBack()}>
                    <Icon 
                        name="ios-arrow-back" 
                        size={25}
                        style={{marginLeft: 20, color: '#fff'}} 
                    />
                    </TouchableOpacity>
                    )
            })}></LessonsStack.Screen>
        </LessonsStack.Navigator>
    );
};

export default HomeScreen;