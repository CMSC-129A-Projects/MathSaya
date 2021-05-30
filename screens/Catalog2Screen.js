import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const Catalog2Screen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text >Catalog2 Screen</Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default Catalog2Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0'
    },
});