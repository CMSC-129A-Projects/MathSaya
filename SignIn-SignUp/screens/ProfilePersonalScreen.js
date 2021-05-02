import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const ProfilePersonalScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text >Personal Details Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default ProfilePersonalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0'
    },
});