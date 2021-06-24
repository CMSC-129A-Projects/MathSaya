import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ImageBackground, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import lesson from './lesson';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const Lessons = ({route, navigation}) => {
    const {data} = route.params;
    
    const LessonCard = ({lesson}) => {
        return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("Leksiyon", {data:lesson})}>
            <ImageBackground
                source={lesson.image}
                style={styles.lessonCardContainer}
            >
                    <View style={{ alignItems: 'center', backgroundColor: 'rgba(175, 96, 26, 0.9)', padding: 5, borderRadius: 10,}}>
                        <Text style={{ color: "#ffff", fontSize: 20, fontFamily: 'Quicksand-Bold', paddingBottom: 1}}>
                        {lesson.name}
                    </Text>
                    <Text style={{color:"#ffff", fontSize:18, fontWeight: '600', fontWeight: 'bold'}}>
                        {lesson.totalLesson + 'Topics'}

                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity> 
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginTop: 20}}>
                <Text style={{ fontSize: 28, fontFamily: 'Quicksand-Bold'}}>
                    Malipayong pagbalik,
                </Text>
                <Text style={{fontSize:16, color: '#616888', marginTop:5, fontFamily: 'Quicksand-Medium'}}>
                    Magkat - on kita ug bag - o ug lain - laing termino karong adlawa!
                </Text>
                <View style={styles.searchBar}>
                    <Icon name="search" size={25}/>
                    <TextInput 
                        style={{ fontSize: 18, marginLeft: 5, color: '#000000', fontFamily: 'Quicksand-Regular'}}
                        placeholder="Pangita bisag unsa..."
                        placeholderTextColor='#696969'
                    />
                </View>
                <View style={{
                    paddingVertical: 25, 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                    }}>
                    <Text style={{ fontSize: 25, fontFamily: 'Quicksand-Bold'}}>
                            Mga Leksiyon sa {data.name}
                        </Text>
                    </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <FlatList
                    showsVerticalScrollIndicator={false} 
                    numColumns={2} 
                    data={lesson}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=><LessonCard lesson={item}/>}
                />
            </View> 
        </SafeAreaView>
    );
};

export default Lessons;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fefac0',
        flex: 1,
        paddingHorizontal: 20,
    },
    lessonCardContainer: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: windowWidth / 2.4,
        height: windowHeight / 3,
        overflow: "hidden",
        padding: 20,
        // paddingTop: 25,
        // paddingLeft: 20,
        borderRadius: 15,
        // alignItems: 'center'
    },
    searchBar: {
        height: 60,
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        backgroundColor: "rgba(184, 184, 184, 0.534)",
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
    },
});