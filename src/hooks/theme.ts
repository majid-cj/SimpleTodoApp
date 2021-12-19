import {AppTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateAppThemeAction} from '../actions';
import {AppReducer} from '../reducers';
import {AppDarkTheme, AppLightTheme} from '../resources';

export const useTheme = (): {theme: AppTheme; changeAppTheme: () => void} => {
  const theme = useSelector((state: AppReducer) => state.theme.theme);
  const dispatch = useDispatch();

  const changeAppTheme = () => {
    const {dark} = theme;
    dispatch(updateAppThemeAction(dark ? AppLightTheme : AppDarkTheme));
  };

  return {theme, changeAppTheme};
};
