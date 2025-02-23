/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(false);

let db;

db = SQLite.openDatabase(
    {
    name: 'bismath-database.db',
    createFromLocation : "~bismath-database.db",
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
      
      return new Promise((resolve) => {
        db.transaction(function (tx) {
          tx.executeSql(
            'INSERT INTO table_users (user_name, user_password, user_confirmpassword) VALUES (?,?,?)',
            [username, password, confirmPassword],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert(
                  'Malampuson!',
                  'Narehistro na ka',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('LoginScreen'),
                      //onPress: () => alert('Sign Up Clicked!')
                    },
                  ],
                  { cancelable: false }
                );
              } else alert('Naay mali sa imong pagrehistro, palihog kog tsek balik.');
            }
          );
        });
      });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fefac0' }}>
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'space-between' }}>
                
                <View style={{ flex: 1, justifyContent: 'center' }} >
                  <ScrollView
                    style={{ marginHorizontal: 35 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled">
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
                                {/* <Text style={styles.color_textPrivate}>
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
                                </TouchableOpacity> */}
                        
                      </View>
                    

                    

                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            style={styles.navButton}
                            onPress={() => navigation.navigate('LoginScreen')}>
                            <Text style={styles.navButtonText}>
                                Naa na ba kay account? Sign In.
                            </Text>
                        </TouchableOpacity>
                    </View>
                  </ScrollView>
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
  // textPrivate: {
  //     flexDirection: 'row',
  //     flexWrap: 'wrap',
  //     marginVertical: 12,
  //     justifyContent: 'center',
  // },
  // color_textPrivate: {
  //     fontSize: 13,
  //     fontWeight: '400',
  //     fontFamily: 'Roboto-Medium',
  //     color: 'grey',
  //},
});