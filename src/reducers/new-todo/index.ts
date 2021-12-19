import {
  NEW_TODO_FAILURE,
  NEW_TODO_REQUEST,
  NEW_TODO_SUCCESS,
  NEW_TODO_CLEAR_STATE,
  Action,
  Error,
  Todo,
} from '../../constants';

export type NewTodoState = {
  loading: boolean;
  data?: Todo;
  error?: Error;
};

const initialState: NewTodoState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export default (state = initialState, action: Action): NewTodoState => {
  switch (action.type) {
    case NEW_TODO_REQUEST:
      return {...state, loading: true};

    case NEW_TODO_SUCCESS:
      return {...initialState, data: action.payload};

    case NEW_TODO_FAILURE:
      return {...initialState, error: action.payload};

    case NEW_TODO_CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
