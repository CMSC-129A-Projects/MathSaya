import React from 'react';

import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ImageBackground, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import lessons from './lessons';
// import Dimensions from './utils/Dimensions';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ViewLessonHomeScreen = ({navigation}) => {
    const LessonCard = ({lesson}) => {
        return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("LessonsScreen", {data:lesson})}>
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
                <Text style={{fontSize:28, fontWeight: 'bold'}}>Kumusta,</Text>
                <Text style={{fontSize:22, color: '#616888', marginTop:15}}>
                    Tara ug magkat - on kita!
                </Text>
                <View style={{
                    height: 60,
                    marginTop: 35,
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
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Mga Kategorya</Text>
                        <Text style={{fontSize:18, color:'#708090'}}>
                            See All
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

export default ViewLessonHomeScreen;