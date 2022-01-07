import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Screens} from '../../constants';
import {useNavigation } from '@react-navigation/native';
import {RootStackListType} from '../../../App';

const LandingScreen: React.FunctionComponent = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackListType>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Landing Page</Text>
      <Button
        title="Go"
        onPress={() => navigator.navigate(Screens.QUIZ_SCREEN)}
      />
    </View>
  );
};

export default LandingScreen;
