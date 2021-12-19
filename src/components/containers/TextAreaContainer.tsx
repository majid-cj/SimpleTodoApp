import React, {FC} from 'react';
import {View} from 'react-native';
import {textAreaContainerStyles} from './styles';
import {useTheme} from '../../hooks';

interface Props {}

export const TextAreaContainer: FC<Props> = ({children}) => {
  const {theme} = useTheme();
  const {container, content} = textAreaContainerStyles(theme);

  return (
    <View style={container}>
      <View style={content}>{children}</View>
    </View>
  );
};
