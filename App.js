import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MaterialBottomNavigation from './screens/MaterialBottomNavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Auth = () => {
	return (
	<Stack.Navigator initialRouteName="LoginScreen">
		<Stack.Screen
			name="LoginScreen"
			component={LoginScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="SignUpScreen"
			component={SignUpScreen}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
	);
};

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			isAuthenticated: 'false'
		}
	}

	componentDidMount() {
		let isAuth = AsyncStorage.getItem('isAuthenticated');
		this.setState({ isAuthenticated: isAuth });
	}
			

	render() {
		return(
			<NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
					<Stack.Screen
						name="OnboardingScreen"
						component={OnboardingScreen}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="Auth"
						component={Auth}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name="MaterialBottomNavigation"
						component={MaterialBottomNavigation}
						options={{headerShown: false}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
};
