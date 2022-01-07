import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './src/views/LandingScreen';
import QuizScreen from './src/views/QuizScreen';
import {Screens} from './src/constants';

export type RootStackListType = {
  LandingScreen: undefined;
  QuizScreen: undefined;
};

const RootStack = createStackNavigator<RootStackListType>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Screens.LANDING_PAGE}>
        <RootStack.Screen
          name={Screens.LANDING_PAGE}
          component={LandingScreen}
        />
        <RootStack.Screen name={Screens.QUIZ_SCREEN} component={QuizScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
