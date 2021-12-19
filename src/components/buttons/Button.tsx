import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonStyles} from './styles';
import {useTheme} from '../../hooks';

interface Props {
  onPress: () => void;
  text: string;
  bottom?: boolean;
}

export const Button: FC<Props> = ({onPress, bottom, text}) => {
  const {theme} = useTheme();
  const {container, absolute, textStyle} = buttonStyles(theme);

  return (
    <TouchableOpacity
      testID={'button'}
      onPress={onPress}
      activeOpacity={0.95}
      style={bottom ? absolute : container}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
