import 'react-native';
import React from 'react';
import {render} from '../../../utils/test-util';
import {FieldInput} from '..';

it('test FieldInput', () => {
  const onTextChange = jest.fn();
  const {getByTestId} = render(
    <FieldInput onTextChange={onTextChange} value={'text input text'} />,
  );
  const input_text = getByTestId('input_text');
  expect(input_text.props.value).toEqual('text input text');
});
