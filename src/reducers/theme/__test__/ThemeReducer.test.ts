import 'react-native';
import AppThemeReducer from '..';
import {UPDATE_APP_THEME} from '../../../constants';
import {AppDarkTheme, AppLightTheme} from '../../../resources';

describe('new task reducer', () => {
  it('default new task state', () => {
    const theme_reducer = AppThemeReducer(
      {theme: AppLightTheme},
      {type: UPDATE_APP_THEME, payload: AppDarkTheme},
    );
    expect(theme_reducer.theme).toEqual(AppDarkTheme);
  });
});
