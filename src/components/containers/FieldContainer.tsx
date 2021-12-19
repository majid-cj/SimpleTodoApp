import React, {FC} from 'react';
import {View} from 'react-native';
import {useTheme} from '../../hooks';
import {fieldContainerStyles} from './styles';

export const FieldContainer: FC = ({children}) => {
  const {theme} = useTheme();
  const {container, childrenContainer} = fieldContainerStyles(theme);
  return (
    <View style={container}>
      <View style={childrenContainer}>{children}</View>
    </View>
  );
};
