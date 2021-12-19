import 'react-native';
import React from 'react';
import {AllTodosScreen} from '..';
import {MockedNavigator, render} from '../../../utils/test-util';

it('AllTodosScreen to match snapshot', () => {
  const component = render(<MockedNavigator component={AllTodosScreen} />);
  expect(component.toJSON()).toMatchSnapshot();
});
