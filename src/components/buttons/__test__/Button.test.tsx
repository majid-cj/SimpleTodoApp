import 'react-native';
import React from 'react';
import {fireEvent, render} from '../../../utils/test-util';
import {Button} from '..';

it('test Button', () => {
  const onPress = jest.fn();
  const {getByTestId} = render(<Button onPress={onPress} text={'button'} />);
  const button = getByTestId('button');
  fireEvent.press(button);
});
