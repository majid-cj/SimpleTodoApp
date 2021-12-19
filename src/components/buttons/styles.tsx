import {AppTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

export const buttonStyles = ({colors: {primary, background}}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: '90%',
      height: 40,
      backgroundColor: primary,
      borderRadius: 8,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: '5%',
    },
    absolute: {
      width: '90%',
      height: 40,
      backgroundColor: primary,
      position: 'absolute',
      bottom: '2.5%',
      left: '5%',
      right: '5%',
      borderRadius: 8,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: background,
      fontSize: 24,
      fontWeight: '500',
      lineHeight: 24,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });

export const floatingButtonStyle = ({colors: {primary}}: AppTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      zIndex: 1,
      bottom: 8,
      right: 8,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: primary,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.9,
      shadowRadius: 1,
      elevation: 1,
    },
  });

export const backButtonStyle = ({colors: {background}}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: 24,
      height: 24,
      backgroundColor: background,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
    },
  });

export const groupButtonStyle = ({colors: {background, text}}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: background,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textContainer: {
      borderRadius: 8,
      borderWidth: 0.5,
      margin: 8,
      padding: 8,
      width: '100%',
      alignSelf: 'center',
      borderColor: text,
      backgroundColor: background,
    },
    text: {
      fontWeight: '900',
      fontSize: 18,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: text,
      backgroundColor: background,
    },
  });
