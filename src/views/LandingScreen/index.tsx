import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Screens} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {RootStackListType} from '../../../App';
import {Button} from '../../components';

const LandingScreen: React.FunctionComponent = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackListType>>();

  const navigateToQuizScreen = () => {
    navigator.navigate(Screens.QUIZ_SCREEN);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={require('../../assets/brain.png')} style={styles.image} />
      <Text style={styles.landingPageLabel}>Quiz Trivia!</Text>
      <Text style={styles.subLabel}>All trivia collides here.</Text>
      <Button
        label="Start"
        testID="gotoQuizButton"
        onPress={navigateToQuizScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  landingPageLabel: {
    fontSize: 42,
    color: '#0d0630',
    fontFamily: 'Arial',
    fontWeight: '500',
    marginTop: 30,
  },
  subLabel: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 164,
    color: 'black',
    fontFamily: 'Arial',
  },
  image: {width: '70%', height: '40%', resizeMode: 'contain'},
});

export default LandingScreen;
