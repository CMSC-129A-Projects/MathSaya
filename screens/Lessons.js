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
            <View style={styles.lessonCardContainer}>
                <Text style = {styles.gradeCardText}>
                    {lesson.name}
                </Text>
            </View>
            
            {/* <ImageBackground
                source={lesson.image}
                style={styles.lessonCardContainer}
            >

            </ImageBackground> */}
        </TouchableOpacity> 
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginTop: 15, padding: 10}}>
                <Text style={styles.header}>
                    Malipayong pagbalik,
                </Text>
                <Text style={styles.subheader}>
                    Magkat-on kita og bag-o ug lain-laing termino karong adlawa!
                </Text>
                {/* <View style={styles.searchBar}>
                    <Icon name="search" size={25}/>
                    <TextInput 
                        style={styles.searchBarText}
                        placeholder="Pangita bisag unsa..."
                        placeholderTextColor='#696969'
                    />
                </View> */}
                <View style={{
                    paddingVertical: 15, 
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
    header: {
      //textAlign: 'center',
      fontSize: 30,
      color: '#05375a',
      fontFamily: 'Quicksand-Bold'
    },
    subheader: {
      fontSize: 20,
      color: '#05375a',
      fontFamily: 'Quicksand-Bold',
      justifyContent: 'center',
      marginVertical: 20
    },
    lessonCardContainer: {
        backgroundColor: '#5454',
        borderRadius: 30,
        marginVertical: 12,
        marginHorizontal: 5,
        width: windowWidth / 1.4,
        height: windowHeight / 5,
        padding: 20,
    },
    gradeCardText: {
        fontSize: 20,
        color: '#402A03',
        alignItems: 'center', 
        justifyContent: 'center',
        // textAlign: 'left',
        fontFamily: 'Quicksand-Bold',
       // paddingLeft: 20,
       // paddingRight: 20,

    },
    // searchBar: {
    //     height: 60,
    //     marginVertical: 15,
    //     paddingVertical: 5,
    //     paddingLeft: 20,
    //     backgroundColor: "rgba(184, 184, 184, 0.534)",
    //     borderRadius: 30,
    //     alignItems: 'center',
    //     flexDirection: 'row',
    // },
    // searchBarText: {
    //     fontSize: 18,
    //     marginLeft: 5,
    //     color: '#000000',
    //     fontFamily: 'Quicksand-Regular'
    // },
});