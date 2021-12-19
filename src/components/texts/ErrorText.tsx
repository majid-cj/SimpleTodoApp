import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '../../hooks';
import {AboutIcon} from '../../resources/icons/common';
import {errorTextStyle} from './styles';

interface Props {
  label: string;
  warning?: boolean;
}

export const ErrorText: FC<Props> = ({label, warning = false}) => {
  const {theme} = useTheme();
  const {
    colors: {danger},
  } = theme;
  const {container, containerError, text} = errorTextStyle(theme);
  return (
    <View style={warning ? containerError : container}>
      <AboutIcon size={10} color={danger} />
      <Text style={text} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};
