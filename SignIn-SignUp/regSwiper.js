/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable comma-dangle */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefac0'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefac0'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    
    alignItems: 'center',
    backgroundColor: '#fefac0'
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  },
  progressDot: {
    backgroundColor: '#956209',
    width: 22,
    height: 22,
    borderRadius: 15,
    marginLeft: 25,
    marginRight: 25
  },
  activeProgressDot: {
    backgroundColor: '#402A03',
    width: 25,
    height: 25,
    borderRadius: 15,
    marginLeft: 25,
    marginRight: 25
  }
})


export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
          buttonWrapperStyle={{ alignItems: 'flex-start' }}
          paginationStyle={{bottom: undefined, left: "30%", top:50, right:"30%"}}
          dot={
            <View style={styles.progressDot}/>}
          activeDot={
            <View style={styles.activeProgressDot}/>}>

          <View style={styles.slide1}>
            <Text style={styles.text}>Registration 1</Text>
            <View>
              <Text>Name:</Text>
            </View>
      
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Registration 2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Registration 3</Text>
          </View>
        </Swiper>
    )
  }
}

AppRegistry.registerComponent('Project', () => SwiperComponent);