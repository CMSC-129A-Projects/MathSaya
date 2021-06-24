import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ImageBackground, TouchableOpacity, ImageBackgroundComponent, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {windowHeight, windowWidth} from '../utils/Dimensions';


const Leksiyon = ({route}) => {
    const {data} = route.params;

    const LessonContentList = ({ content, index }) => {
        const navigation = useNavigation();
        return (
            <View 
            style={{
                paddingHorizontal: 20, 
                paddingVertical: 10, 
                flexDirection: 'row'
            }}>
                <Text style={{ fontSize: 50, fontFamily: 'Quicksand-Bold', color: '#402A03'}}>
                    {(index + 1)}
                </Text>
                <View style={{paddingHorizontal: 20, flex: 1}}>
                    {/* <Text 
                    style={{
                        fontSize:15, 
                        color:"#A0A5BD", 
                        fontFamily: 'Quicksand-Medium',
                        marginBottom: 5,
                    }}>
                        {content.time}
                    </Text> */}
                    <Text 
                        style = {{
                            fontSize: 25, 
                            fontFamily: 'Quicksand-Bold', 
                            color: '#05375a',
                            marginTop: 10,
                        }}> {content.title}
                    </Text>
                </View>
                <View style={{
                    width:40, 
                    height:40, 
                    backgroundColor: '#402A03',
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: 'center',
                }}>
                    <TouchableOpacity activeOpacity={0.8} onPress = {() => navigation.navigate("Learning")}>
                        <Icon 
                            name="play" 
                            size={25}
                            style={{color: '#fff'}} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{backgroundColor:'#F0F8FF', flex:1}}>
            <ImageBackground 
                source={data.image} 
                style={styles.learning2}>
            </ImageBackground>
            <View 
            style={{
                flex: 1,
                marginTop: -35,
                backgroundColor: '#fefac0',
                borderTopRightRadius: 35,
                borderTopLeftRadius: 35,
            }}>
            <Text 
                style={{
                    textAlign: 'center',
                    marginTop: 25,
                    marginBottom: 20,
                    marginHorizontal: 20,
                    fontSize: 30,
                    fontFamily: 'Quicksand-Bold',
                    color: '#05375a',
                }}>
                Mga Topics
            </Text>
            <FlatList showsVerticalScrollIndicator={false}
            data={data.lessonContent}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
                <LessonContentList index={index} content={item}/>)}
            />
            </View>
        </SafeAreaView>
    );
};

export default Leksiyon;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0',
        flex: 1,
        padding: 20,
    },
    learning2: {
        height: windowHeight/4,
        width: windowWidth/2,
        resizeMode: 'cover',
        overflow: 'hidden',
    },
});