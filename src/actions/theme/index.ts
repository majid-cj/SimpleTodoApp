import {put, take} from 'redux-saga/effects';
import {AppTheme} from '@react-navigation/native';
import {Action, UPDATE_APP_THEME} from '../../constants';

export const updateAppThemeAction = (theme: AppTheme) => ({
  type: UPDATE_APP_THEME,
  payload: theme,
});

export function* watchUpdateAppTheme() {
  const action: Action = yield take(UPDATE_APP_THEME);
  yield put({type: action.type, payload: action.payload});
}
