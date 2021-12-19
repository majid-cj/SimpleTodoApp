import {spawn} from 'redux-saga/effects';
import {watchTodoActions} from '.';
import {watchTaskActions} from './task';
import {watchUpdateAppTheme} from './theme';

export function* rootSaga() {
  yield spawn(watchTaskActions);
  yield spawn(watchUpdateAppTheme);
  yield spawn(watchTodoActions);
}
