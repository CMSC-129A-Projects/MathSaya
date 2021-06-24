import React, { useState, useEffect, Component }  from 'react';
import { SafeAreaView, Image, View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground} from 'react-native';
import Grades from './Grades';
import {windowHeight, windowWidth} from '../utils/Dimensions';
// import SQLite from 'react-native-sqlite-storage';
// import { withNavigation } from 'react-navigation';
// import { ListItem } from 'native-base';
// let db;
// db = SQLite.openDatabase(
//   {
//   name: 'MathSaya-database.db',
//   createFromLocation : "~MathSaya-database.db",
//   },
//   () => { },
//   error => {
//       console.log(error);
//   }
// );

const Criteriascreen = ({ navigation }) => {
    // let [gradeFlatListItems, setgradeFlatListItems] = useState([]);

    // useEffect(() => {
    //     db.transaction((tx) => {
    //       tx.executeSql('SELECT * FROM Grade', [], (tx, results) => {
    //         console.log("Query completed");
    //         var temp = [];
    //         for (let i = 0; i < results.rows.length; ++i)
    //             console.log('Grade ID: {row.grade_id}, Grade Level: {row.grade_level}');
    //             temp = results.rows.item(i);
    //             // temp.push(results.rows.item(i));
    //         setgradeFlatListItems(temp);
    //         console.log(temp);
    //       });
    //     });
    //   }, []);

    const GradeCard = ({ grade }) => {
        return (
            <View 
                // key = {item.grade_id}
                style={{
                    // marginTop:20, 
                    flex: 1,                  
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate( "Lessons", {data:grade})}>
                    <View style ={styles.gradeCardContainer}>
                        <Text style = {styles.gradeCardText}>{grade.name}</Text>
                        {/* <ImageBackground source={grade.image} 
                            style =
                            {{
                                width: windowWidth / 2.42, 
                                height: windowHeight / 8,
                                overflow:'hidden',
                                marginLeft: 205,
                                marginTop: -63,
                                marginBottom: -65,
                                borderBottomLeftRadius:10,
                                borderTopLeftRadius: 10,
                            }}>
                        </ImageBackground> */}
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1,}}>
                <View style={{ alignItems: 'center'}}>
                    <Image
                        source={require('../assets/learning2.png')}
                        style={styles.learning2}
                    />
                    <Text style={styles.header}>
                        Kumusta, Tara magkat-on kita!
                    </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.subheader}>
                        Mga Kategorya
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center',}}>
                    <FlatList
                        showsVerticalScrollIndicator={false} 
                        data={Grades}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item})=><GradeCard grade={item}/>}
                    />
                </View> 
            </SafeAreaView>
        </View>
    );
};

export default Criteriascreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fefac0',
        flex: 1,
        padding: 20,
    },
    gradeCardContainer: {
        backgroundColor: '#5454',
        borderRadius: 30,
        // paddingHorizontal: 20, 
        // paddingVertical: 10, 
        marginVertical: 10,
        width: windowWidth/1.75,
        height: windowHeight/13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradeCardText: {
        fontSize: 30,
        color: '#402A03',
        // alignItems: 'center', 
        // textAlign: 'left',
        fontFamily: 'Quicksand-Bold'
    },
    learning2: {
        height: windowHeight/4,
        width: windowWidth/2,
        resizeMode: 'cover',
        marginTop: 15,
    },
    header: {
        textAlign: 'center',
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
});