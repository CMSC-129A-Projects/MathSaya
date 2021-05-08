import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const ProfileProgressScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text >Progress Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default ProfileProgressScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0'
    },
});