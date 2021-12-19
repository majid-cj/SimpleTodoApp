import 'react-native';
import React from 'react';
import {render} from '../../../utils/test-util';
import {TextAreaInputField} from '..';

it('test TextAreaInputField', () => {
  const onTextChange = jest.fn();
  const {getByTestId} = render(
    <TextAreaInputField onTextChange={onTextChange} value={'text area text'} />,
  );
  const input_text = getByTestId('text_area');
  expect(input_text.props.value).toEqual('text area text');
});
