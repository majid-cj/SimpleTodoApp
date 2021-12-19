import {StyleSheet} from 'react-native';
import {AppTheme} from '@react-navigation/native';

export const screenStyles = ({colors: {background}}: AppTheme) =>
  StyleSheet.create({
    statusBarSafeArea: {
      width: '100%',
      backgroundColor: background,
    },
    statusBarContainer: {
      flex: 1,
      backgroundColor: background,
    },
    safeArea: {
      flex: 1,
      backgroundColor: background,
    },
    container: {
      flex: 1,
      backgroundColor: background,
      paddingHorizontal: 8,
    },
  });

export const fieldContainerStyles = ({
  colors: {background, border},
}: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 40,
      backgroundColor: background,
      borderRadius: 0,
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      borderWidth: 1,
      marginBottom: 16,
      marginTop: 8,
      borderBottomColor: border,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
    },
    childrenContainer: {
      flex: 1,
    },
  });

export const textAreaContainerStyles = ({
  colors: {background, accent},
}: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 150,
      backgroundColor: background,
      borderRadius: 0,
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      borderWidth: 1,
      marginTop: 4,
      marginBottom: 12,
      borderBottomColor: accent,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
    },
    content: {
      flex: 1,
    },
  });
