import React, {FC} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {loadingStyle} from './styles';
import {useTheme} from '../../hooks';

interface Props {}

export const Loader: FC<Props> = () => {
  const {theme} = useTheme();
  const {
    colors: {accent},
  } = theme;
  const {container} = loadingStyle(theme);

  return (
    <Modal visible={true} transparent animationType="fade">
      <View style={container}>
        <ActivityIndicator size={128} color={accent} />
      </View>
    </Modal>
  );
};
