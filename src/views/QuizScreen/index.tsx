import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {getRandomQuizQuestion} from '../../services/QuizService';
import {Question} from '../../@types/network';
import {LoadingIndicator} from '../../components';
import QuizComponent from './QuizComponent';

const QuizScreen: React.FC = () => {
  const [quizData, setQuizData] = useState<Question | null>(null);
  useEffect(() => {
    getRandomQuizQuestion().then(response => {
      console.log(response.data);
      setQuizData(response.data);
    });
  }, []);
  return (
    <View style={styles.quizContainer}>
      {quizData ? <QuizComponent data={quizData} /> : <LoadingIndicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 10,
    alignSelf: 'center',
    // backgroundColor: 'red',
    width: '94%',
  },
});

export default QuizScreen;
