import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TindahanScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TindahanScreen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default TindahanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0'
    },
});