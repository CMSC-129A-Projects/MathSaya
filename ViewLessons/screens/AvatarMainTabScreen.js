import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import AvatarScreen from './AvatarScreen';

const AvatarStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const AvatarMainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Avatar"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#402A03',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#402A03',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />

        <Tab.Screen
            name="Avatar"
            component={AvatarStackScreen}
            options={{
                tabBarLabel: 'Avatar',
                tabBarColor: '#402A03',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-happy" color={color} size={24} />
                ),
            }}
        />
        
        <Tab.Screen
            name="Tindahan"
            component={TindahanScreen}
            options={{
                tabBarLabel: 'Tindahan',
                tabBarColor: '#402A03',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-cart" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default AvatarMainTabScreen;

const AvatarStackScreen = ({ navigation }) => (
    <AvatarStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <AvatarStack.Screen name="Avatar" component={AvatarScreen} options={{
            title: 'My Avatar',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </AvatarStack.Navigator>
);
