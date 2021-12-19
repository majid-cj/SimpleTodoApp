import {call, put, takeLatest} from 'redux-saga/effects';
import {
  Action,
  GET_ALL_TASKS_CLEAR_STATE,
  GET_ALL_TASKS_FAILURE,
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_SUCCESS,
  NEW_TASK_CLEAR_STATE,
  NEW_TASK_FAILURE,
  NEW_TASK_REQUEST,
  NEW_TASK_SUCCESS,
  Task,
  TaskListResponse,
  TaskResponse,
} from '../../constants';
import {getTaskListAPI, newTaskAPI} from '../../services';

export const getTaskListAction = () => ({
  type: GET_ALL_TASKS_REQUEST,
});

export const getTaskListClearStateAction = () => ({
  type: GET_ALL_TASKS_CLEAR_STATE,
});

export const newTaskAction = (task: Task) => ({
  type: NEW_TASK_REQUEST,
  payload: task,
});

export const newTaskClearAction = () => ({
  type: NEW_TASK_CLEAR_STATE,
});

function* getTaskListActionGen() {
  try {
    const response: TaskListResponse = yield call(getTaskListAPI);
    yield put({type: GET_ALL_TASKS_SUCCESS, payload: response.data});
  } catch (error: any) {
    yield put({type: GET_ALL_TASKS_FAILURE, payload: error});
  }
}

function* newTaskActionGen(action: Action) {
  try {
    const response: TaskResponse = yield call(newTaskAPI, action.payload);
    yield put({type: NEW_TASK_SUCCESS, payload: response.data});
  } catch (error: any) {
    yield put({type: NEW_TASK_FAILURE, payload: error});
  }
}

export function* watchTaskActions() {
  yield takeLatest(GET_ALL_TASKS_REQUEST, getTaskListActionGen);
  yield takeLatest(NEW_TASK_REQUEST, newTaskActionGen);
}
