import 'react-native';
import TaskListReducer from '..';
import {
  GET_ALL_TASKS_CLEAR_STATE,
  GET_ALL_TASKS_FAILURE,
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_SUCCESS,
} from '../../../constants';

describe('all tasks reducer', () => {
  it('default all tasks state', () => {
    const all_task_reducer = TaskListReducer(
      {data: [], loading: false, error: undefined},
      {type: GET_ALL_TASKS_REQUEST, payload: []},
    );
    expect(all_task_reducer.loading).toEqual(true);
    expect(all_task_reducer.data).toEqual([]);
  });

  it('success add all task', () => {
    const mockTask = [{title: 'new task', id: '1', date: '2020-12-12'}];
    const all_task_reducer = TaskListReducer(
      {
        data: [],
        loading: false,
        error: undefined,
      },
      {type: GET_ALL_TASKS_SUCCESS, payload: mockTask},
    );
    expect(all_task_reducer.data).toEqual(mockTask);
  });

  it('failure all tasks reducer', () => {
    const all_task_reducer = TaskListReducer(
      {
        data: [],
        loading: false,
        error: undefined,
      },
      {type: GET_ALL_TASKS_FAILURE, payload: {message: 'error'}},
    );
    expect(all_task_reducer.error).toEqual({message: 'error'});
  });

  it('clear state all tasks', () => {
    const all_task_reducer = TaskListReducer(
      {
        data: [],
        loading: false,
        error: undefined,
      },
      {type: GET_ALL_TASKS_CLEAR_STATE, payload: undefined},
    );
    expect(all_task_reducer.loading).toEqual(false);
    expect(all_task_reducer.error).toEqual(undefined);
    expect(all_task_reducer.data).toEqual([]);
  });
});
