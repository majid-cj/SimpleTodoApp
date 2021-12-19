import React, {FC, ReactElement} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useTheme} from '../../hooks';
import {screenStyles} from './styles';

type Props = {
  header?: ReactElement;
  footer?: ReactElement;
};

export const Screen: FC<Props> = ({header, footer, children}) => {
  const {theme} = useTheme();
  const {dark} = theme;
  const {container, safeArea, statusBarSafeArea, statusBarContainer} =
    screenStyles(theme);
  return (
    <>
      <SafeAreaView style={statusBarSafeArea}>
        <View style={statusBarContainer}>
          <StatusBar
            translucent
            barStyle={dark ? 'light-content' : 'dark-content'}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={safeArea}>
        {header}
        <View style={container}>{children}</View>
        {footer}
      </SafeAreaView>
    </>
  );
};
