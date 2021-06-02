import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ImageBackground, Dimensions, FlatList } from 'react-native';
import grades from './grades';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const CriteriaScreen = ({ navigation }) => {
    const GradeCard = ({ grade }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate( "MyLesson", {data:grade} )}>
                <ImageBackground source={grade.image} style={{
                    marginVertical: 5,
                    marginHorizontal: 5,
                    width:windowWidth / 2 - 30, 
                    height:windowHeight / 3,
                    paddingVertical: 25,
                    overflow:"hidden",
                    paddingTop: 25,
                    paddingLeft: 20,
                    borderRadius: 25,
                    flexDirection: 'row'
                    
                }}>
                    <Text style = {{
                        fontSize: 30, 
                        color: '#006400', 
                        fontWeight: 'bold', 
                        paddingBottom: -15, 
                        textAlign: 'center'
                    }}>{grade.name}
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
            <View style={{marginTop: 15}}>
                <Text style={{fontSize:35, fontWeight: 'bold'}}>
                    Kumusta,
                </Text>
                <Text style={{fontSize:22, color: '#616888', marginTop:3}}>
                    Tara ug magkat - on kita!
                </Text>
                <View style={{
                    paddingVertical: 15, 
                    flexDirection: "row", 
                    justifyContent: "space-between",
                }}>
                    <Text style={{fontSize:40, fontWeight:'bold'}}>
                        Mga Kategoriya
                    </Text>
                </View>
            </View> 
            <View style={{flex: 1}}>
                <FlatList
                    showsVerticalScrollIndicator={false} 
                    numColumns={2} 
                    data={grades}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=><GradeCard grade={item}/>}
                />
            </View> 
        </SafeAreaView>
    );
};

export default CriteriaScreen;