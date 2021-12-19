import 'react-native';
import React from 'react';
import {TaskScreen} from '..';
import {MockedNavigator, render} from '../../../utils/test-util';

it('TaskScreen to match snapshot', () => {
  const component = render(<MockedNavigator component={TaskScreen} />);
  expect(component.toJSON()).toMatchSnapshot();
});
