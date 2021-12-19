import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from '../../hooks';
import {spinnerStyle} from './styles';

interface Props {
  size?: number;
  marginTop?: number;
}

export const Spinner: FC<Props> = ({size = 64, marginTop = 0}) => {
  const {theme} = useTheme();

  const {
    colors: {primary},
  } = theme;

  const styles = spinnerStyle(theme);

  return (
    <View style={[styles.container, {marginTop: `${marginTop}%`}]}>
      <ActivityIndicator size={size} color={primary} />
    </View>
  );
};
