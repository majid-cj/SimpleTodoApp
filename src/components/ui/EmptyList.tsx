import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '../../hooks';
import {emptyListStyle} from './styles';

interface Props {
  error: string;
  onPress?: () => void;
}

export const EmptyList: FC<Props> = ({error, onPress}) => {
  const {theme} = useTheme();
  const {container, text} = emptyListStyle(theme);
  return (
    <TouchableOpacity activeOpacity={0.9} style={container} onPress={onPress}>
      <Text style={text}>{error}</Text>
    </TouchableOpacity>
  );
};
