import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            
            <View style={{marginTop: 30, alignItems: 'center', justifyContent: 'center'}}>
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
            
            <Text style={[styles.textLabel, {
                fontFamily: 'Quicksand-Bold',
                fontSize: 20,
                paddingTop: 10,
                }]}>Personal Details</Text>

            <Text style={styles.textLabel}>Name</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.textDetail} >Taylor Marie Joy Dimagiba Swift </Text>
            </View>

            <Text style={styles.textLabel}>Birthday</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.textDetail} >December 13, 1989</Text>
            </View>
            
            <Text style={styles.textLabel}>Grade Level</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.textDetail} >Grade 3</Text>
            </View>

            <Text style={[styles.textLabel, {
                fontFamily: 'Quicksand-Bold',
                fontSize: 20,
                paddingTop: 10,
                }]}>Log In Credentials</Text>

            <Text style={styles.textLabel}>Username</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.textDetail} >Swiftswoft</Text>
            </View>

            <Text style={styles.textLabel}>Password</Text>
            <View style={[styles.detailContainer, {marginBottom: 20}]}>
                <Text style={styles.textDetail} >1234567890</Text>
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
    
    detailContainer: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#F9E671',
        borderRadius: 7,
        margin: 30,
        height: 40,
    },
    textDetail: {
        textAlignVertical: 'center',
        flex: 1,
        paddingHorizontal: 15,
        color: '#402A03',
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        
    },
    textLabel: {
        marginTop: 5,
        color: '#05375a',
        fontFamily: 'Quicksand-Medium',
        fontSize: 16,
        paddingHorizontal: 30,
    }
});