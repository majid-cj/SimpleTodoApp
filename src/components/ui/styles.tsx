import {AppTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const emptyListStyle = ({colors: {danger}}: AppTheme) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: '100%',
      margin: 32,
      padding: 32,
    },
    text: {
      fontSize: 18,
      color: danger,
      textAlign: 'center',
    },
  });

export const spinnerStyle = ({}: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export const toolBarStyles = ({colors: {background}}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: background,
    },
    area: {
      width: 24,
      height: 24,
      backgroundColor: background,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
    },
  });

export const spacerStyle = (
  {colors: {accent}}: AppTheme,
  height: number = 4,
  visible: boolean = false,
) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: visible ? accent : 'transparent',
      height: height,
    },
  });

export const loadingStyle = ({colors: {light}}: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: light,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.75,
    },
  });
