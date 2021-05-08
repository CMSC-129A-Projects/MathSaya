import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './SigninSignUp/screens/DrawerContent';

import MainTabScreen from './SigninSignUp/screens/MainTabScreen';
//import ProfileMainTabScreen from './screens/ProfileMainTabScreen';
//import TindahanMainTabScreen from './screens/TindahanMainTabScreen';
import SettingScreen from './SigninSignUp/screens/SettingScreen';
import AvatarScreen from './SigninSignUp/screens/AvatarScreen';
//import HomeScreen from './screens/HomeScreen';

import RootStackScreen from './SigninSignUp/screens/RootStackScreen';

import { AuthContext } from './SigninSignUp/components/context';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN': //app will check if user is previously logged in or not
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: (userName, password) => {
      //below is where we link the database for validation
      //check if the input username and password matches with our username and password
      //username/password is temporarily provided here but it should be checked from the database
      let userToken;
      userToken = null;
      if (userName == 'user' && password == 'pass') {
        userToken = 'asdfghjkl'; //this token here should be fetched from the database
      }
      console.log('user token:', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('asdfghjkl');
      // setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false);
      let userToken;
      userToken = 'dfssf'
      console.log('user token:', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);

  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }


  return (
    <AuthContext.Provider value = {authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (

          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}> 
            {/* for a drawer with multiple tabs */}
            {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            {/* <Drawer.Screen name="TindahanDrawer" component={TindahanMainTabScreen} /> */}
            {/* <Drawer.Screen name="ProfileDrawer" component={ProfileMainTabScreen} /> */}
            {/* for a drawer with no tabs */}
            <Drawer.Screen name="Avatar" component={AvatarScreen} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
          </Drawer.Navigator>
       )
     :
       <RootStackScreen />
     }
     </NavigationContainer>
   </AuthContext.Provider>
 );
}

export default App;

// /* eslint-disable prettier/prettier */
// /* eslint-disable no-trailing-spaces */
// // eslint-disable-line react/forbid-prop-types

// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {Image, TouchableOpacity} from 'react-native';

// import ViewLessonHomeScreen from './ViewLessons/src/view/screens/ViewLessonHomeScreen';
// import LessonsScreen from './ViewLessons/src/view/screens/LessonsScreen';

// const AppStack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//     <AppStack.Navigator 
//       screenOptions={{title: null,headerStyle:{elevation:0}}}>
//       <AppStack.Screen 
//       name = "My Lesson" 
//       component={ViewLessonHomeScreen} 
//       options={{
//         headerLeft: () => (
//           <Icon name="menu" size={25} style={{marginLeft:20}}/>
//         ),
//         headerRight: () => (
//           <Image 
//           style={{height:40,width:40,marginRight:20}}
//           source={require("./ViewLessons/src/assets/test-account.png")} 
//           />
//         ),
//       }}></AppStack.Screen>

//       <AppStack.Screen 
//         name="LessonsScreen" 
//         component={LessonsScreen} 
//         options={({navigation}) => ({
//           headerTransparent: true, 
//           headerLeft: () => (
//           <TouchableOpacity 
//             activeOpacity={0.8} 
//             onPress={() => navigation.goBack()}>
//             <Icon 
//               name="arrow-back" 
//               size={25}
//               style={{marginLeft: 20}}
//             />
//           </TouchableOpacity>
//           )
//         })}></AppStack.Screen>
//     </AppStack.Navigator>
//   </NavigationContainer>
//   );
// };

// export default App;