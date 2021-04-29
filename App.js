

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewLessonHomeScreen from './ViewLessons/src/view/screens/ViewLessonHomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, TouchableOpacity} from 'react-native';
import LessonsScreen from './ViewLessons/src/view/screens/LessonsScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{title: null,headerStyle:{elevation:0}}}>
      <Stack.Screen 
      name = "My Lesson" 
      component={ViewLessonHomeScreen} 
      options={{
        headerLeft: () => (
          <Icon name="menu" size={25} style={{marginLeft:20}}/>
        ),
        headerRight: () => (
          <Image 
          style={{height:40,width:40,marginRight:20}}
          source={require("./ViewLessons/src/assets/test-account.png")} 
          />
        ),
      }}></Stack.Screen>
      <Stack.Screen 
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
        })}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
