import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

import Lessons from './Lessons';
import Leksiyon from './Leksiyon';
import Learning from './Learning';
import Criteriascreen from './Criteriascreen';

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
                component={Criteriascreen} 
                options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                    </Icon.Button>
                )
            }}></LessonsStack.Screen>

            <LessonsStack.Screen 
                name = "Lessons" 
                component={Lessons} 
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