import {call, put, takeLatest} from 'redux-saga/effects';
import {
  Action,
  GET_ALL_TODO_FAILURE,
  GET_ALL_TODO_REQUEST,
  GET_ALL_TODO_SUCCESS,
  NEW_TODO_FAILURE,
  NEW_TODO_REQUEST,
  NEW_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  TodoListResponse,
  TodoResponse,
  Todo,
  GET_ALL_TODO_CLEAR_STATE,
  NEW_TODO_CLEAR_STATE,
  UPDATE_TODO_CLEAR_STATE,
} from '../../constants';
import {getTodoListAPI, newTodoAPI, updateTodoAPI} from '../../services';

export const getTodoListAction = (task: string) => ({
  type: GET_ALL_TODO_REQUEST,
  payload: task,
});

export const getTodoListClearStateAction = () => ({
  type: GET_ALL_TODO_CLEAR_STATE,
});

export const newTodoAction = (todo: Todo) => ({
  type: NEW_TODO_REQUEST,
  payload: todo,
});

export const newTodoClearStateAction = () => ({
  type: NEW_TODO_CLEAR_STATE,
});

export const updateTodoAction = (todo: Todo) => ({
  type: UPDATE_TODO_REQUEST,
  payload: todo,
});

export const updateTodoClearStateAction = () => ({
  type: UPDATE_TODO_CLEAR_STATE,
});

function* getTodoListActionGen(action: Action) {
  try {
    const response: TodoListResponse = yield call(
      getTodoListAPI,
      action.payload,
    );
    yield put({type: GET_ALL_TODO_SUCCESS, payload: response.data});
  } catch (error: any) {
    yield put({type: GET_ALL_TODO_FAILURE, payload: error});
  }
}

function* newTodoActionGen(action: Action) {
  try {
    const response: TodoResponse = yield call(newTodoAPI, action.payload);
    yield put({type: NEW_TODO_SUCCESS, payload: response.data});
  } catch (error: any) {
    yield put({type: NEW_TODO_FAILURE, payload: error});
  }
}

function* updateTodoActionGen(action: Action) {
  try {
    const response: TodoResponse = yield call(updateTodoAPI, action.payload);
    yield put({type: UPDATE_TODO_SUCCESS, payload: response.data});
  } catch (error: any) {
    yield put({type: UPDATE_TODO_FAILURE, payload: error});
  }
}

export function* watchTodoActions() {
  yield takeLatest(GET_ALL_TODO_REQUEST, getTodoListActionGen);
  yield takeLatest(NEW_TODO_REQUEST, newTodoActionGen);
  yield takeLatest(UPDATE_TODO_REQUEST, updateTodoActionGen);
}
