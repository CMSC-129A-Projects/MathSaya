import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import CardFlip from 'react-native-card-flip';

const App = ({}) => {
    return (
        <View style={styles.container}>
            <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.cardd, styles.card1]}
                        onPress={() => this.card.flip()}>
                        <Text style={styles.label}>AB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.cardd, styles.card2]}
                        onPress={() => this.card.flip()}>
                        <Text style={styles.label}>CD</Text>
                    </TouchableOpacity>

                </View>
            </CardFlip>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cardContainer: {
        width: 320,
        height: 470,
    },
    cardd: {
        width: 200,
        height: 200,
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        lineHeight: 470,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default App;