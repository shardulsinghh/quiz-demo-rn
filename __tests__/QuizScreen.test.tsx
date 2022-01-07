import React from 'react';
import QuizScreen from '../src/views/QuizScreen';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

describe('Testing Quiz Screen', () => {
  test('renders correctly', () => {
    const component = (
      <NavigationContainer>
        <QuizScreen />
      </NavigationContainer>
    );

    const {queryByText} = render(component);
    const screenLabel = queryByText('Quiz Screen');
    expect(screenLabel).toBeTruthy();
  });
});
