import 'react-native';
import React from 'react';
import {AddTodoScreen} from '..';
import {MockedNavigator, render} from '../../../utils/test-util';

it('AddTodoScreen to match snapshot', () => {
  const component = render(<MockedNavigator component={AddTodoScreen} />);
  expect(component.toJSON()).toMatchSnapshot();
});
