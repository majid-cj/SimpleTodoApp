import {StyleSheet} from 'react-native';
import {AppTheme} from '@react-navigation/native';

export const itemListStyle = ({}: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 8,
    },
  });
