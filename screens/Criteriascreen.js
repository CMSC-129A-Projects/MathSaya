import React, { useState, useEffect, Component }  from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground} from 'react-native';
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
                    marginTop:20,
                    paddingVertical: 6,
                    paddingHorizontal: 9, 
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate( "Lessons", {data:grade})}>
                    <View style ={{
                            backgroundColor: '#fefac0',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            paddingHorizontal: 20, 
                            paddingVertical: 10, 
                            width:windowWidth / 1.04,
                            height:windowHeight / 7,
                            alignContent: 'center',
                        }}>
                        <Text style = {{
                                fontSize: 50, 
                                color: '#402A03', 
                                paddingTop: 20,
                                alignItems: 'baseline', 
                                textAlign: 'left',
                                fontFamily: 'Foundation'
                            }}>{grade.name}
                        </Text>
                        <ImageBackground source={grade.image} 
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
                        </ImageBackground>
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
            }}>
            <View style={{marginTop: 5, paddingHorizontal:10}}>
                <Text style={{fontSize:65, fontWeight: 'bold', color: '#05375a', fontFamily:'Feather'}}>
                    Kumusta,
                </Text>
                <ImageBackground source={require('../assets/image4.png')} 
                    style = {{
                        height: windowHeight / 4.5,
                        width: windowWidth/3, 
                        marginLeft: 250,
                        marginTop: -60,
                    }}>
                </ImageBackground>
                <Text style={{fontSize:25, color: '#05375a', marginTop:-125}}>
                    Tara ug magkat - on kita!
                </Text>
                <Text style={{fontSize:40, color: '#05375a', marginTop:60}}>
                    Mga Kategoriya
                </Text>
            </View> 
            <View style=
                {{
                    marginTop: 10,
                    flex: 1,
                    backgroundColor: '#F9E671',
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                }}>
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