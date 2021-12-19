import React, {FC} from 'react';
import {Text} from 'react-native';
import {useTheme} from '../../hooks';
import {subTitleStyle} from './styles';

interface Props {
  text: string;
  onClick?: () => void;
  style?: any;
}

export const SubTitle: FC<Props> = ({text, style, onClick}) => {
  const {theme} = useTheme();
  const styles = subTitleStyle(theme);

  return (
    <Text style={[styles.text, {...style}]} numberOfLines={1} onPress={onClick}>
      {text}
    </Text>
  );
};
