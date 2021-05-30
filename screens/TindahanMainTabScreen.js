import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Catalog1Screen from './Catalog1Screen';
import Catalog2Screen from './Catalog2Screen';
import Catalog3Screen from './Catalog3Screen';

const Catalog1Stack = createStackNavigator();
const Catalog2Stack = createStackNavigator();
const Catalog3Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const TindahanMainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Catalog1"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#402A03' }}
    >
        <Tab.Screen
            name="Catalog1"
            component={Catalog1StackScreen}
            options={{
                tabBarLabel: 'Catalog 1',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-albums" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Catalog2"
            component={Catalog2StackScreen}
            options={{
                tabBarLabel: 'Catalog 2',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-albums" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Catalog3"
            component={Catalog3StackScreen}
            options={{
                tabBarLabel: 'Catalog 3',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-albums" color={color} size={24} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default TindahanMainTabScreen;

const Catalog1StackScreen = ({ navigation }) => (
    <Catalog1Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <Catalog1Stack.Screen name="Catalog1" component={Catalog1Screen} options={{
            title: 'Catalog1',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </Catalog1Stack.Navigator>
);

const Catalog2StackScreen = ({ navigation }) => (
    <Catalog2Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <Catalog2Stack.Screen name="Catalog2" component={Catalog2Screen} options={{
            title: 'Catalog2',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </Catalog2Stack.Navigator>
);

const Catalog3StackScreen = ({ navigation }) => (
    <Catalog3Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <Catalog3Stack.Screen name="Catalog3" component={Catalog3Screen} options={{
            title: 'Catalog3',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </Catalog3Stack.Navigator>
);