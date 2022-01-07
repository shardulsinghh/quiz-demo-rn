import React from 'react';
import LandingScreen from '../src/views/LandingScreen';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../App';

configure({adapter: new Adapter()});

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Testing Landing Screen', () => {
  afterEach(cleanup);
  test('renders correctly', async () => {
    const component = (
      <NavigationContainer>
        <LandingScreen />
      </NavigationContainer>
    );

    const {queryByText} = render(component);
    const screenLabel = queryByText('Landing Page');
    expect(screenLabel).toBeTruthy();
  });

  test('should render navigation button correctly', () => {
    const {getByTestId, getByText} = render(<LandingScreen />);
    const buttonTitleText = 'Go';
    const navigateButton = getByTestId('gotoQuizButton');
    expect(navigateButton).toBeTruthy();

    const buttonTitle = getByText(buttonTitleText);
    expect(buttonTitle.props.children).toEqual(buttonTitleText);
  });

  // test('should call onPress on tap', () => {
  //   const wrapper = shallow(<LandingScreen />);
  //   wrapper.find(Button).simulate('press');
  //   expect(wrapper.find(Button).first().props().onPress()).toHaveBeenCalled();
  // });

  test('should navigate to QuizScreen on Button Press', async () => {
    const component = <App />;

    const {getByTestId, queryByText} = render(component);
    const oldScreenLabel = queryByText('Landing Page');
    const navigateButton = await getByTestId('gotoQuizButton');

    expect(oldScreenLabel).toBeTruthy();
    expect(navigateButton).toBeTruthy();

    fireEvent.press(navigateButton);
    // console.log('ITemmm', navigateButton);
    const newScreen = queryByText('Quiz Screen');

    expect(newScreen).toBeTruthy();
  });
});
