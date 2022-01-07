import React from 'react';
import renderer from 'react-test-renderer';
import LandingScreen from '../src/views/LandingScreen';

test('renders correctly', () => {
  renderer.create(<LandingScreen />);
});
