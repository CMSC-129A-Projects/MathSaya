import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import {Text, Button, Image} from 'react-native-elements';
import quizzy from '../assets/quizzy.png';
const Home = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quiz App</Text>
        <Text style={styles.subheading}>Rohan Bhatia</Text>
      </View>
      <View style={styles.welcomeContainer}>
        <Image source={quizzy} style={styles.quizzyImage} />
        <Text style={styles.welcomeText}>Hello, I'm Quizzy.</Text>
        <Text style={styles.welcomeText}>I'll be your quiz master</Text>
        <Button
          buttonStyle={styles.quizButton}
          titleStyle={styles.buttonTitle}
          title="START QUIZ"
          onPress={() => {
            props.setQuizStarted(true);
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#B1EDE8',
  },
  titleContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  welcomeContainer: {
    flex: 0.6,
  },
  quizzyImage: {
    width: 200,
    height: 200,
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3B0D11',
  },
  subheading: {
    fontSize: 16,
    color: '#3B0D11',
  },
  welcomeText: {
    fontSize: 18,
    color: '#3B0D11',
    alignSelf: 'center',
  },
  quizButton: {
    marginTop: 25,
    backgroundColor: '#6D435A',
    padding: 15,
    elevation: 5,
    borderRadius: 7,
  },
  buttonTitle: {
    color: '#FFFCF9',
  },
});
