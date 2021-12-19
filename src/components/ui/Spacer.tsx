import React, {FC} from 'react';
import {View} from 'react-native';
import {useTheme} from '../../hooks';
import {spacerStyle} from './styles';

interface Props {
  size?: number;
  visible?: boolean;
}

export const Spacer: FC<Props> = ({size = 4, visible = false}) => {
  const {theme} = useTheme();
  const {container} = spacerStyle(theme, size, visible);
  return <View style={container} />;
};
