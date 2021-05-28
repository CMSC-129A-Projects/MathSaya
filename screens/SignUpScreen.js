/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
        console.log(username, password, confirmPassword);
    
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

        db.transaction(tx => {
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
                        onPress: () => navigation.navigate('ViewUsers'),
                        //onPress: () => alert('Sign Up Clicked!')
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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fefac0' }}>
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'space-between' }}>
                
                <View style={{ flex: 1, justifyContent: 'center' }} >
                   
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.logo}
                        />
                    </View>

                    <ScrollView 
                        style={{ marginHorizontal: 35 }}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled">
                        

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
                                    By registering, you confirm that you accept our 
                                </Text>

                                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}> 
                                      Terms of service
                                    </Text>
                                </TouchableOpacity>

                                <Text style={styles.color_textPrivate}> and </Text>

                                <TouchableOpacity onPress={() => alert('Privacy Policy Clicked!')}>
                                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}> 
                                      Privacy Policy
                                </Text>

                        </TouchableOpacity>
                        
                    </View>
                    </ScrollView>

                    

                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            style={styles.navButton}
                            onPress={() => navigation.navigate('LoginScreen')}>
                            <Text style={styles.navButtonText}>
                                Have an Account? Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
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
      
      height: 100,
      width: 100,
      resizeMode: 'cover',
      marginTop: 15,
      marginBottom: 15
  },
  text: {
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Quicksand-Bold',
      fontSize: 34,
      marginBottom: 10,
      color: '#402A03',
  },
  navButton: {
      marginTop: 15,
  },
  navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Roboto-Medium',
      marginBottom: 5
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 12,
      justifyContent: 'center',
  },
  color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Roboto-Medium',
      color: 'grey',
  },
});