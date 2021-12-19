import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {inputFieldStyle} from './styles';
import {useTheme} from '../../hooks';
import {TextAreaContainer} from '../containers';

interface Props {
  value: string;
  placeholder?: string;
  onTextChange?: (value: string) => void;
}

export const TextAreaInputField: FC<Props> = ({
  value,
  placeholder,
  onTextChange,
}) => {
  const {theme} = useTheme();
  const {
    colors: {accent},
  } = theme;
  const styles = inputFieldStyle(theme);
  return (
    <TextAreaContainer>
      <TextInput
        testID={'text_area'}
        placeholder={placeholder}
        placeholderTextColor={accent}
        numberOfLines={10}
        scrollEnabled={true}
        multiline={true}
        value={value}
        onChangeText={onTextChange}
        style={styles.text}
      />
    </TextAreaContainer>
  );
};
