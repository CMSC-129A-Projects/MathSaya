import React, {useState, useEffect} from 'react';
import {View, Animated, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';

const QuizHeader = props => {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  });

  const startAnimation = () => {
    let toValue = props.currentIndex / props.quizLength;
    if (toValue === 0) {
      toValue = 0.05;
    }
    Animated.timing(animatedValue, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const showExitQuizAlert = async () => {
    Alert.alert(
      'Exit Quiz?',
      'Are you sure you want to exit the quiz? All progress will be lost.',
      [
        {text: 'Continue Quiz', onPress: () => {}},
        {
          text: 'Exit',
          onPress: () => {
            props.setQuizStarted(false);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.closeButtonContainer}>
        <Button
          title="X"
          onPress={showExitQuizAlert}
          buttonStyle={styles.closeButton}
          titleStyle={styles.closeButtonTitle}
        />
      </View>
      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressBarFill, {flex: animatedValue}]}
        />
      </View>
    </View>
  );
};

export default QuizHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  closeButtonContainer: {
    marginRight: 10,
  },
  closeButton: {
    backgroundColor: 'transparent',
  },
  closeButtonTitle: {
    color: '#3B0D11',
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressBar: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    backgroundColor: '#FFFCF9',
    elevation: 1,
    borderWidth: 0.4,
    borderRadius: 5,
    borderColor: 'black',
  },
  progressBarFill: {
    backgroundColor: '#FF6978',
  },
});
