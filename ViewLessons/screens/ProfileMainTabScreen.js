import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import ProfilePersonalScreen from './ProfilePersonalScreen';
import ProfileAchievementScreen from './ProfileAchievementScreen';
import ProfileProgressScreen from './ProfileProgressScreen';

const ProfilePersonalStack = createStackNavigator();
const ProfileAchievementStack = createStackNavigator();
const ProfileProgressStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const ProfileMainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Personal"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#402A03' }}
    >
        <Tab.Screen
            name="Personal"
            component={ProfilePersonalStackScreen}
            options={{
                tabBarLabel: 'Personal',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-clipboard" color={color} size={24} />
                ),
            }}
        />
        <Tab.Screen
            name="Achievements"
            component={ProfileAchievementStackScreen}
            options={{
                tabBarLabel: 'Achievements',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-trophy" color={color} size={23} />
                ),
            }}
        />
        <Tab.Screen
            name="Progress"
            component={ProfileProgressStackScreen}
            options={{
                tabBarLabel: 'Progress',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-albums" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default ProfileMainTabScreen;

const ProfilePersonalStackScreen = ({ navigation }) => (
    <ProfilePersonalStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ProfilePersonalStack.Screen name="Personal" component={ProfilePersonalScreen} options={{
            title: 'My Profile',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
        {/* <ProfilePersonalStack.Screen name="Achievements" component={ProfileAchievementScreen}/>
        <ProfilePersonalStack.Screen name="Progress" component={ProfileProgressScreen} /> */}
    </ProfilePersonalStack.Navigator>
);

const ProfileAchievementStackScreen = ({ navigation }) => (
    <ProfileAchievementStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ProfileAchievementStack.Screen name="Achievement" component={ProfileAchievementScreen} options={{
            title: 'My Profile',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </ProfileAchievementStack.Navigator>
);

const ProfileProgressStackScreen = ({ navigation }) => (
    <ProfileProgressStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ProfileProgressStack.Screen name="Progress" component={ProfileProgressScreen} options={{
            title: 'My Profile',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </ProfileProgressStack.Navigator>
);

