import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={{ marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Avatar.Image
                    source={{
                        uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                    }}
                    size={80}
                />
                <View>
                    <Title style={styles.title}>Bata :)</Title>
                    {/* <Caption style={styles.caption}>Bata Batuta</Caption> */}
                </View>
            </View>

            <Text style={[styles.text_label, {
                fontFamily: 'Quicksand-Bold',
                fontSize: 20,
                paddingTop: 10,
            }]}>Personal Details</Text>

            <Text style={styles.text_label}>Name</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your Name"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={styles.text_label}>Birthday</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your Birthday"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={styles.text_label}>Grade Level</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your Grade Level"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                // onChangeText={(val) => textInputChange(val)}
                />
            </View>

            <Text style={[styles.text_label, {
                fontFamily: 'Quicksand-Bold',
                fontSize: 20,
                paddingTop: 10,
            }]}>Log In Credentials</Text>

            <Text style={styles.text_label}>Username</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={styles.text_label}>Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={styles.text_label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Re-enter your Password"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                // onChangeText={(val) => textInputChange(val)}
                />
            </View>

            <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => alert('Profile Saved')}
                    style={[styles.buttonContainer, {
                        backgroundColor: '#402A03',
                    }]} >
                    <Text style={styles.buttonText}>Save Changes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert('Profile Edit Cancelled')}
                    style={[styles.buttonContainer, {
                        backgroundColor: 'red'
                    }]} >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fefac0',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },

    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#F9E671',
        borderRadius: 7,
        margin: 30,
        height: 40,
    },
    textInput: {
        flex: 1,
        padding: 5,
        paddingHorizontal: 15,
        color: '#402A03',
        alignItems: 'center',
        fontFamily: 'Roboto-Regular',

    },
    text_label: {
        marginTop: 5,
        color: '#05375a',
        fontFamily: 'Quicksand-Medium',
        fontSize: 16,
        paddingHorizontal: 30,
    },
    buttonContainer: {
        marginTop: 10,
        width: '50%',
        alignItems: 'center',
        height: 45,
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Quicksand-Bold',
    },
});