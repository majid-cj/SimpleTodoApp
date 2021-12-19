import 'react-native';
import TodoListReducer from '..';
import {
  GET_ALL_TODO_CLEAR_STATE,
  GET_ALL_TODO_FAILURE,
  GET_ALL_TODO_REQUEST,
  GET_ALL_TODO_SUCCESS,
} from '../../../constants';

describe('all todo reducer', () => {
  it('default all todo state', () => {
    const all_task_reducer = TodoListReducer(
      {data: [], loading: false, error: undefined},
      {type: GET_ALL_TODO_REQUEST, payload: []},
    );
    expect(all_task_reducer.loading).toEqual(true);
    expect(all_task_reducer.data).toEqual([]);
  });

  it('success add all todo', () => {
    const mockTodoList = [
      {id: '1', task: '2', description: 'test', done: false},
    ];
    const all_task_reducer = TodoListReducer(
      {
        data: [],
        loading: false,
        error: undefined,
      },
      {type: GET_ALL_TODO_SUCCESS, payload: mockTodoList},
    );
    expect(all_task_reducer.data).toEqual(mockTodoList);
  });

  it('failure all todo reducer', () => {
    const all_task_reducer = TodoListReducer(
      {
        data: [],
        loading: false,
        error: undefined,
      },
      {type: GET_ALL_TODO_FAILURE, payload: {message: 'error'}},
    );
    expect(all_task_reducer.error).toEqual({message: 'error'});
  });

  it('clear state all todos', () => {
    const all_task_reducer = TodoListReducer(
      {
        data: [],
        loading: false,
        error: undefined,
      },
      {type: GET_ALL_TODO_CLEAR_STATE, payload: undefined},
    );
    expect(all_task_reducer.loading).toEqual(false);
    expect(all_task_reducer.error).toEqual(undefined);
    expect(all_task_reducer.data).toEqual([]);
  });
});
