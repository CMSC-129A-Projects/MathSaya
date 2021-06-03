import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import { StyleSheet } from 'react-native';

const QuizQuestion = props => {
  const optionsLength = props.options.length;
  const optionsContainerStyle =
    optionsLength < 5 ? styles.optionsContainer : styles.optionsContainerInline;
  const [selectedOption, setSelectedOption] = useState(null);
  const optionsButtons = props.options.map(option => {
    return (
      <Button
        key={option}
        title={option}
        buttonStyle={
          selectedOption === option
            ? [styles.optionSingle, styles.optionSelected]
            : styles.optionSingle
        }
        titleStyle={
          selectedOption === option
            ? [styles.optionTitle, styles.optionTitleSelected]
            : styles.optionTitle
        }
        onPress={() => {
          setSelectedOption(option);
          props.setUserAnswer(option);
        }}
      />
    );
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.questionTitleContainer}>
        <Text style={styles.questionTitle}>{props.question}</Text>
      </View>
      <View style={optionsContainerStyle}>{optionsButtons}</View>
    </View>
  );
};

export default QuizQuestion;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  questionTitleContainer: {
    flex: 0.2,
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B0D11',
  },
  optionsContainer: {
    flex: 0.8,
    marginHorizontal: 50,
    justifyContent: 'center',
  },
  optionsContainerInline: {
    flex: 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  optionSingle: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginHorizontal: 6,
    marginVertical: 8,
    borderWidth: 1.2,
    borderColor: '#FFFCF9',
    backgroundColor: '#FFFCF9',
    elevation: 5,
    borderRadius: 25,
    minWidth: 100,
  },
  optionSelected: {
    borderColor: '#3B0D11',
    opacity: 0.9,
    backgroundColor: '#EFFBFA',
  },
  optionTitle: {
    color: '#3B0D11',
  },
  optionTitleSelected: {
    color: '#3B0D11',
  },
});
