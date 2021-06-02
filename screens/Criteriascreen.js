import React, { useState, useEffect, Component }  from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
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
                    paddingVertical: 10, 
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate( "Lessons", {data:grade})}>
                    <View style ={{
                            backgroundColor: '#dfbf9f',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            paddingHorizontal: 20, 
                            paddingVertical: 10, 
                            width:windowWidth / 1.112,
                            height:windowHeight / 7,
                            alignItems: 'center',
                            alignContent: 'center',
                        }}>
                        <Text style = {{
                                fontSize: 59, 
                                color: '#604020', 
                                paddingTop: 20,
                                alignItems: 'center', 
                                textAlign: 'center',
                                fontFamily: 'Foundation'
                            }}>{grade.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView 
            style={{
                backgroundColor: '#fefac0', 
                flex: 1, 
                paddingHorizontal: 20,
            }}>
            <View style={{marginTop: 15}}>
                <Text style={{fontSize:60, fontWeight: 'bold', color: '#4d2600', fontFamily:'Feather'}}>
                    Kumusta,
                </Text>
                <Text style={{fontSize:25, color: '#663300', fontStyle: 'italic'}}>
                    Tara ug magkat - on kita!
                </Text>
                <View style={{marginTop: 5}}>
                    <Text style={{fontSize:40, fontWeight:'bold', color: '#4d2600'}}>
                        Mga Kategoriya
                    </Text>
                </View>
            </View> 
            <View style={{flex: 1}}>
                <FlatList
                    showsVerticalScrollIndicator={false} 
                    data={Grades}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=><GradeCard grade={item}/>}
                />
            </View> 
        </SafeAreaView>
    );
};

export default Criteriascreen;