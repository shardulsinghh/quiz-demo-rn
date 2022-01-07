import {Question} from '../../@types/network';
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackListType} from '../../../App';
import {Screens} from '../../constants';

interface QuizPropTypes {
  data: Question;
}

const QuizComponent: React.FC<QuizPropTypes> = props => {
  const navigator = useNavigation<StackNavigationProp<RootStackListType>>();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const selectOption = (option: string) => {
    setSelectedOption(option);
    setTimeout(() => {
      navigator.navigate(Screens.LANDING_PAGE);
    }, 250);

    // navigator.navigate(Screens.LANDING_PAGE);
    // setTimeout(() => navigator.navigate(Screens.LANDING_PAGE), 3000);
  };
  return (
    <View>
      <Text style={styles.questionHeader}>QUESTION:</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.questionContainer}>{'\u2B24'}</Text>
        <Text style={styles.questionText}>{props.data.questions}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {props.data.options.map(option => (
          <Button
            key={option}
            styleProps={
              selectedOption === option
                ? option === props.data.answer
                  ? {backgroundColor: '#4BB453'}
                  : {backgroundColor: '#FC100D'}
                : {}
            }
            onPress={() => selectOption(option)}
            label={option}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionHeader: {
    fontSize: 26,
    fontWeight: '500',
    color: '#00CED0',
    marginTop: '20%',
  },
  questionContainer: {
    fontSize: 8,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    paddingRight: 10,
  },
  questionText: {
    fontSize: 22,
  },
  optionsContainer: {
    alignItems: 'center',
    height: '30%',
    justifyContent: 'space-between',
    marginTop: '20%',
  },
});

export default QuizComponent;
