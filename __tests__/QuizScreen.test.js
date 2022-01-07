import React from 'react';
import renderer from 'react-test-renderer';
import QuizScreen from '../src/views/QuizScreen';

test('renders correctly', () => {
  renderer.create(<QuizScreen />);
});
