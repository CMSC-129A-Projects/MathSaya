/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign In"
                onPress={() => alert('Sign In Clicked!')}
            />
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                    <Text style={styles.navButtonText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.forgotButton}
                    onPress={() => navigation.navigate('SignUp')}>
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