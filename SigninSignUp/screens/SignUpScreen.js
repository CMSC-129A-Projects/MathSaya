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

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>
            
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>

            <Text style={styles.text}>Create an Account</Text>

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

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => alert('Sign Up Clicked!')}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Terms of service
                </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                    Privacy Policy
                </Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.navButtonText}>
                        Have an Account? Sign In
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 40,
        backgroundColor: '#fefac0',
    },
    logo: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        marginBottom: 30
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Quicksand-Bold',
        fontSize: 30,
        marginBottom: 10,
        color: '#402A03',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Roboto-Medium',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 18,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Roboto-Medium',
        color: 'grey',
    },
});