import {Action, UPDATE_APP_THEME} from '../../constants';
import {AppLightTheme} from '../../resources';
import {AppTheme} from '@react-navigation/native';

export type AppThemeState = {
  theme: AppTheme;
};

const initialState: AppThemeState = {
  theme: AppLightTheme,
};

export default (state = initialState, action: Action): AppThemeState => {
  switch (action.type) {
    case UPDATE_APP_THEME:
      return {theme: action.payload};

    default:
      return state;
  }
};
