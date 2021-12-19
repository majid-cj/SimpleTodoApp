import {AppTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const taskItemStyle = ({colors: {text, accent, background}}: AppTheme) =>
  StyleSheet.create({
    container: {
      borderRadius: 8,
      height: 56,
      backgroundColor: text,
      margin: 4,
      padding: 8,
    },
    header: {
      fontSize: 18,
      fontWeight: '500',
      color: background,
      textAlign: 'left',
      textAlignVertical: 'center',
      marginVertical: 2,
    },
    subHeader: {
      fontSize: 12,
      fontWeight: '500',
      color: accent,
      textAlign: 'left',
      textAlignVertical: 'center',
      marginVertical: 2,
    },
  });

export const todoItemStyle = ({colors: {background, text}}: AppTheme) =>
  StyleSheet.create({
    container: {
      borderRadius: 8,
      height: 56,
      backgroundColor: background,
      margin: 4,
      padding: 8,
      flexDirection: 'row',
      borderColor: text,
      borderWidth: 0.5,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    header: {
      fontSize: 18,
      fontWeight: '500',
      color: text,
      textAlign: 'left',
      textAlignVertical: 'center',
      marginVertical: 2,
      marginStart: 8,
    },
  });
