import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
//import Feather from 'react-native-vector-icons/Feather';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import { AuthContext } from '../components/context';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {signIn} = React.useContext(AuthContext);

    const loginHandle = (username, password) => {
        signIn(username, password);
    }

    return (
        <View style={styles.container}>
            
            <View style={{alignItems: 'center'}}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>
            
            <Text style={styles.text}>Sign In</Text>

            <FormInput
                labelValue={username}
                onChangeText={(userUsername) => setUsername(userUsername)}
                placeholderText="Username"
                iconType="user"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign In"
                onPress={() =>{loginHandle(username, password)}}
            />
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                    <Text style={styles.navButtonText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.forgotButton}
                    onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.navButtonText}>
                        Don't have an account? Create here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 50,
        backgroundColor: '#fefac0',
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        marginBottom: 30
    },
    text: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 35,
        marginBottom: 10,
        color: '#402A03',        
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 10,
    },
    navButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Roboto-Medium',
    },
});