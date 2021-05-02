/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import SQLite from 'react-native-sqlite-storage';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

let db;

db = SQLite.openDatabase(
    {
    name: 'MathSaya-database.db',
    createFromLocation : "~MathSaya-database.db",
    }
);

const SignUpScreen = ({ navigation }) => {
    let [username, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    let register_user = () => {
        //console.log(username, userpassword, confirmPassword);
    
        if (!username) {
          alert('butngi username');
          return;
        }
        if (!password) {
          alert('butangi password');
          return;
        }
        if (!confirmPassword) {
          alert('butang usab ang password');
          return;
        }

        db.transaction(function (tx) {
            tx.executeSql(
              'INSERT INTO table_users (user_name, user_password, user_confirmpassword) VALUES (?,?,?)',
              [username, password, confirmPassword],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () => navigation.navigate('TestView'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else alert('Registration Failed');
              }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView
                            behavior="padding"
                            style={{ flex: 1, justifyContent: 'space-between' }}>

                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../assets/logo.png')}
                                    style={styles.logo}
                                />
                            </View>

                            <Text style={styles.text}>Buhat ug Account</Text>

                            <FormInput
                                labelValue={username}
                                onChangeText={(userName) => setUserName(userName)}
                                placeholderText="Username"
                                iconType="user"
                                //keyboardType="email-address"
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
                                //onPress={() => alert('Sign Up Clicked!')}
                                onPress={register_user}
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
                        </KeyboardAvoidingView>
                    </ScrollView>
            </View>

        </SafeAreaView>
        
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

