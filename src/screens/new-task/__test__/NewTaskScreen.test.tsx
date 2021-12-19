import 'react-native';
import React from 'react';
import {NewTaskScreen} from '..';
import {MockedNavigator, render} from '../../../utils/test-util';

it('NewTaskScreen to match snapshot', () => {
  const component = render(<MockedNavigator component={NewTaskScreen} />);
  expect(component.toJSON()).toMatchSnapshot();
});
