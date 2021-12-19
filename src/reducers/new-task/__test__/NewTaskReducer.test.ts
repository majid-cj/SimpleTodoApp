import 'react-native';
import NewTaskReducer from '..';
import {
  NEW_TASK_CLEAR_STATE,
  NEW_TASK_FAILURE,
  NEW_TASK_REQUEST,
  NEW_TASK_SUCCESS,
} from '../../../constants';

describe('new task reducer', () => {
  it('default new task state', () => {
    const task_reducer = NewTaskReducer(
      {data: undefined, loading: false, error: undefined},
      {type: NEW_TASK_REQUEST, payload: undefined},
    );
    expect(task_reducer.loading).toEqual(true);
    expect(task_reducer.data).toEqual(undefined);
  });

  it('success new task', () => {
    const mockTask = {title: 'new task', id: '1', date: '2020-12-12'};
    const task_reducer = NewTaskReducer(
      {
        data: undefined,
        loading: false,
        error: undefined,
      },
      {type: NEW_TASK_SUCCESS, payload: mockTask},
    );
    expect(task_reducer.data).toEqual(mockTask);
  });

  it('failure new task', () => {
    const task_reducer = NewTaskReducer(
      {
        data: undefined,
        loading: false,
        error: undefined,
      },
      {type: NEW_TASK_FAILURE, payload: {message: 'error'}},
    );
    expect(task_reducer.error).toEqual({message: 'error'});
  });

  it('clear state new task', () => {
    const task_reducer = NewTaskReducer(
      {
        data: undefined,
        loading: false,
        error: undefined,
      },
      {type: NEW_TASK_CLEAR_STATE, payload: undefined},
    );
    expect(task_reducer.loading).toEqual(false);
    expect(task_reducer.error).toEqual(undefined);
  });
});
