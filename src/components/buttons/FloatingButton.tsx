import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '../../hooks';
import {AddIcon} from '../../resources';
import {floatingButtonStyle} from './styles';

interface Props {
  onPress: () => void;
}

export const FloatingButton: FC<Props> = ({onPress}) => {
  const {theme} = useTheme();
  const {
    colors: {background},
  } = theme;
  const {container} = floatingButtonStyle(theme);

  return (
    <TouchableOpacity style={container} activeOpacity={0.9} onPress={onPress}>
      <AddIcon color={background} />
    </TouchableOpacity>
  );
};
