import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Import Home Screen / Lessons include here
import HomeScreen from './HomeScreen';

//Import Profile Screens
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import ProfilePersonalScreen from './ProfilePersonalScreen';
import ProfileAchievementScreen from './ProfileAchievementScreen';
import ProfileProgressScreen from './ProfileProgressScreen';

//Import Tindahan Screens
import TindahanScreen from './TindahanScreen';

//Import Avatar Screens
import AvatarScreen from './AvatarScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function ProfileStackScreen () {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
      }
      }}>
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          title: 'My Profile',
          headerLeft: () => (
            <Icon.Button 
              name="ios-menu" 
              size={25}
              backgroundColor="#402A03" 
              onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor="#402A03"
              onPress={() => navigation.navigate('EditProfile')}>
            </MaterialCommunityIcons.Button>
          )
        }} 
      />
      <Stack.Screen 
        name="EditProfile"
        component={EditProfileScreen}
        options={{
        title: 'Edit Profile'
        }}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}

function AvatarStackScreen () {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#402A03',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <Stack.Screen name="Avatar" component={AvatarScreen} options={{
            title: 'My Avatar',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </Stack.Navigator>
  )
}

function TindahanStackScreen () {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#402A03',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Tindahan" component={TindahanScreen} options={{
        title: 'Tindahan',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#402A03" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }} />
    </Stack.Navigator>
  )
}

function MaterialBottomNavigation () {
  return (
    <Tab.Navigator
        initialRouteName="Home"
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
            component={TindahanStackScreen}
            options={{
                tabBarLabel: 'Tindahan',
                tabBarColor: '#402A03',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-cart" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
  )
}

export default MaterialBottomNavigation;