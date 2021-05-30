import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const ProfileAchievementScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text >Achievement Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default ProfileAchievementScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0'
    },
});