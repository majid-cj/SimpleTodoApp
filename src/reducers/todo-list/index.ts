import {
  GET_ALL_TODO_FAILURE,
  GET_ALL_TODO_REQUEST,
  GET_ALL_TODO_SUCCESS,
  GET_ALL_TODO_CLEAR_STATE,
  Action,
  Error,
  TodoList,
} from '../../constants';

export type TodoListState = {
  loading: boolean;
  data: TodoList;
  error?: Error;
};

const initialState: TodoListState = {
  loading: false,
  data: [],
  error: undefined,
};

export default (state = initialState, action: Action): TodoListState => {
  switch (action.type) {
    case GET_ALL_TODO_REQUEST:
      return {...state, loading: true};

    case GET_ALL_TODO_SUCCESS:
      return {...initialState, data: action.payload};

    case GET_ALL_TODO_FAILURE:
      return {...initialState, error: action.payload};

    case GET_ALL_TODO_CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
