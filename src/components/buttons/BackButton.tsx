import React, {FC} from 'react';
import {TouchableOpacity, I18nManager} from 'react-native';
import {backButtonStyle} from './styles';
import {ArrowLeft, ArrowRight} from '../../resources/icons/common';
import {useTheme} from '../../hooks';

interface Props {
  goBack: () => void;
}

export const BackButton: FC<Props> = ({goBack}) => {
  const {theme} = useTheme();
  const {
    colors: {accent},
  } = theme;

  const {container} = backButtonStyle(theme);
  return (
    <TouchableOpacity
      testID={'back_button'}
      onPress={goBack}
      style={container}
      activeOpacity={0.9}>
      {I18nManager.isRTL ? (
        <ArrowRight color={accent} />
      ) : (
        <ArrowLeft color={accent} />
      )}
    </TouchableOpacity>
  );
};
