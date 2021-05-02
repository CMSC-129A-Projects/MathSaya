import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text >Home Screen</Text>
            <Button
                title="Lesson 1"
                onPress={() => alert('Button Clicked!')}
            />
            <Button
                title="Lesson 2"
                onPress={() => alert('Button Clicked!')}
            />
            <Button
                title="Lesson 3"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0'
    },
});