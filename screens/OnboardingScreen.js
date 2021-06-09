/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 10,
                height: 10,
                marginHorizontal: 4,
                borderRadius: 5,
                backgroundColor
            }}
        />
    );
};

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16, fontFamily: 'Quicksand-Medium' }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16, fontFamily: 'Quicksand-Medium' }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16, fontFamily: 'Quicksand-Medium' }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Auth")}
            onDone={() => navigation.navigate("Auth")}
            pages={[
            {
                backgroundColor: '#fefac0',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Pagkat-on',
                subtitle: 'A New Way To Connect With The World',
            },
            {
                backgroundColor: '#fefac0',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Makakat-on',
                subtitle: 'Share your Thoughts',
            },
            {
                backgroundColor: '#fefac0',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Nakakat-on',
                subtitle: 'Claim that Diploma',
            },

        ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});