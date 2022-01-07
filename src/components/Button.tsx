import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
  testID?: string;
  styleProps?: any;
}

const Button: React.FunctionComponent<ButtonProps> = props => {
  return (
    <Pressable
      testID={props.testID}
      style={
        props.styleProps
          ? [styles.container, props.styleProps]
          : styles.container
      }
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.label.toUpperCase()}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 32,
    borderRadius: 5,
    backgroundColor: '#00CED0',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: '500',
  },
});

export default Button;
