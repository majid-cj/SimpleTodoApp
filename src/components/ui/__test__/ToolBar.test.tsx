import 'react-native';
import React from 'react';
import {render} from '../../../utils/test-util';
import {ToolBar} from '..';

it('test ToolBar', () => {
  const goBack = jest.fn();
  const {getByTestId} = render(<ToolBar goBack={goBack} />);
  const back_button = getByTestId('back_button');
  expect(back_button).not.toBeNull();
});

it('test ToolBar render change theme button', () => {
  const {getByTestId} = render(<ToolBar />);
  const back_button = getByTestId('theme_button');
  expect(back_button).not.toBeNull();
});
