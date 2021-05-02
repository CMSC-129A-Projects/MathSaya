import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const AvatarScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Avatar Feature Coming Soon!</Text>
            <Button
                title="Go to Avatar screen...again"
                onPress={() => navigation.push("Avatar")}
            />
            <Button
                title="Go to home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go to the first screen"
                onPress={() => navigation.popToTop("Avatar")}
            />
        </View>

    )
}

export default AvatarScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0'
    },
});