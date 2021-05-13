import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const Learning = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text >Learning Screen</Text>
            <Button
                title="Click Here"
                onPress = {() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default Learning;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0'
    },
});