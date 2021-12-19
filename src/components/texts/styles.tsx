import {AppTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const subTitleStyle = ({colors: {accent}}: AppTheme) =>
  StyleSheet.create({
    text: {
      fontSize: 18,
      textAlign: 'left',
      textAlignVertical: 'center',
      marginVertical: 4,
      padding: 2,
      fontWeight: '500',
      color: accent,
    },
  });

export const errorTextStyle = ({colors: {danger}}: AppTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 4,
      position: 'absolute',
      bottom: -24,
    },
    containerError: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 0,
    },
    text: {
      fontSize: 10,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginStart: 4,
      color: danger,
    },
  });
