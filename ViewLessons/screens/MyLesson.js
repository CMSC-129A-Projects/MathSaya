import React from 'react';

import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ImageBackground, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import lessons from './lessons';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const MyLesson = ({route, navigation}) => {
    const {data} = route.params;
    
    const LessonCard = ({lesson}) => {
        return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("Leksiyon", {data:lesson})}>
            <ImageBackground source={lesson.image} style={{
                marginVertical: 10,
                marginHorizontal: 5,
                borderRadius: 50,
                width:windowWidth / 2 - 30, 
                height:windowHeight / 3,
                overflow:"hidden",
                paddingTop: 25,
                paddingLeft: 20,
                borderRadius: 15,
            }}>
                <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 1}}>
                    {lesson.name}
                </Text>
                <Text style={{color:"#000000", fontSize:18, fontWeight: '600', fontWeight: 'bold'}}>
                    {lesson.totalLesson + 'Topics'}

                </Text>
            </ImageBackground>
        </TouchableOpacity> 
        );
    };
    return (
        <SafeAreaView 
            style={{
                backgroundColor: '#fefac0', 
                flex: 1, 
                paddingHorizontal: 20,
            }}>
            <View style={{marginTop: 20}}>
                <Text style={{fontSize:28, fontWeight: 'bold'}}>
                    Malipayong pagbalik,
                </Text>
                <Text style={{fontSize:16, color: '#616888', marginTop:5}}>
                    Magkat - on kita ug bag - o ug lain - laing termino karong adlawa!
                </Text>
                <View style={{
                    height: 60,
                    marginTop: 15,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 15,
                    backgroundColor: "#F0F8FF",
                    borderRadius: 30,
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <Icon name="search" size={25}/>
                    <TextInput 
                        style={{fontSize:18, marginLeft:5, color: '#000000'}}
                        placeholder="Search for anything"
                        placeholderTextColor='#696969'
                    />
                </View>
                <View style={{
                    paddingVertical: 25, 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    }}>
                        <Text style={{fontSize:30, fontWeight:'bold'}}>
                            Mga Leksiyon sa {data.name}
                        </Text>
                    </View>
            </View>
            <View style={{flex: 1}}>
                <FlatList
                    showsVerticalScrollIndicator={false} 
                    numColumns={2} 
                    data={lessons}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=><LessonCard lesson={item}/>}
                />
            </View> 
        </SafeAreaView>
    );
};

export default MyLesson;