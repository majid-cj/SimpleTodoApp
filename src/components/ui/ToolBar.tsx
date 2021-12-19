import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SubTitle} from '..';
import {useTheme} from '../../hooks';
import {AboutIcon} from '../../resources';
import {BackButton} from '../buttons';
import {toolBarStyles} from './styles';

interface Props {
  goBack?: () => void;
  center?: string;
}

export const ToolBar: FC<Props> = ({goBack, center}) => {
  const {theme, changeAppTheme} = useTheme();
  const {dark} = theme;
  const {container, area} = toolBarStyles(theme);
  const saveArea = <View style={area} />;

  return (
    <View testID={'tool_bar'} style={container}>
      {goBack ? (
        <BackButton goBack={goBack} />
      ) : (
        <TouchableOpacity
          testID={'theme_button'}
          style={area}
          activeOpacity={0.9}
          onPress={changeAppTheme}>
          <AboutIcon size={24} color={dark ? '#fff' : '#000'} />
        </TouchableOpacity>
      )}
      <SubTitle text={center || ''} />
      {saveArea}
    </View>
  );
};
