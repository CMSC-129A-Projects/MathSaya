import React from 'react';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import { StyleSheet } from 'react-native';
const QuizButton = props => {
  return (
    <View>
      <Button
        buttonStyle={styles.quizButton}
        title={props.title}
        onPress={props.onPress}
        disabled={props.disabled}
      />
    </View>
  );
};

export default QuizButton;

const styles = StyleSheet.create({
  quizButton: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#6D435A',
    elevation: 5,
    borderRadius: 5,
    margin: 25,
  },
});
