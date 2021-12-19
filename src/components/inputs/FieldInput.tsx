import React, {FC, ReactElement} from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import SVG from 'react-native-svg';
import {FieldContainer} from '../containers';
import {inputFieldStyle} from './styles';
import {useTheme} from '../../hooks';

interface Props {
  value: string;
  placeholder?: string;
  icon?: ReactElement<SVG>;
  keyBoard?: KeyboardTypeOptions;
  onTextChange?: (value: string) => void;
}

export const FieldInput: FC<Props> = ({
  value,
  placeholder,
  icon,
  keyBoard = 'default',
  onTextChange,
}) => {
  const {theme} = useTheme();
  const {
    colors: {accent},
  } = theme;
  const {container, text} = inputFieldStyle(theme);
  return (
    <FieldContainer>
      <View style={container}>
        {icon}
        <TextInput
          testID={'input_text'}
          value={value}
          keyboardType={keyBoard}
          placeholder={placeholder}
          placeholderTextColor={accent}
          onChangeText={onTextChange}
          style={text}
          numberOfLines={1}
        />
      </View>
    </FieldContainer>
  );
};
