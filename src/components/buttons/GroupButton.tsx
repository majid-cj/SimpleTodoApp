import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from '../../hooks';
import {strings} from '../../i18n';
import {groupButtonStyle} from './styles';

interface Props {
  viewActive: () => void;
  viewDone: () => void;
}

export const GroupButton: FC<Props> = ({viewActive, viewDone}) => {
  const {theme} = useTheme();
  const {} = theme;
  const {container, textContainer, text} = groupButtonStyle(theme);
  return (
    <View style={container}>
      <TouchableOpacity
        style={textContainer}
        activeOpacity={0.9}
        onPress={viewActive}>
        <Text style={text}>{strings('button.active')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={textContainer}
        activeOpacity={0.9}
        onPress={viewDone}>
        <Text style={text}>{strings('button.done')}</Text>
      </TouchableOpacity>
    </View>
  );
};
