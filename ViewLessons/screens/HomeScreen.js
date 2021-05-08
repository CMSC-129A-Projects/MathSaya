import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity} from 'react-native';

import ViewLessonHomeScreen from './ViewLessonHomeScreen';
import LessonsScreen from './LessonsScreen';

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
            name = "My Lesson" 
            component={ViewLessonHomeScreen} 
            options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            ),
            headerRight: () => (
                <Image 
                    style={{height:40,width:40,marginRight:20}}
                    source={require("../assets/test-account.png")} 
                />
            ),
            }}></LessonsStack.Screen>

            <LessonsStack.Screen 
            name="LessonsScreen" 
            component={LessonsScreen} 
            options={({navigation}) => ({
                headerTransparent: true, 
                headerLeft: () => (
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    onPress={() => navigation.goBack()}>
                <Icon 
                    name="arrow-back" 
                    size={25}
                    style={{marginLeft: 20}}
                />
                </TouchableOpacity>
                )
            })}></LessonsStack.Screen>
        </LessonsStack.Navigator>
    );
};

export default HomeScreen;