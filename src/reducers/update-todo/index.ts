import {
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_CLEAR_STATE,
  Action,
  Error,
  Todo,
} from '../../constants';

export type UpdateTodoState = {
  loading: boolean;
  data?: Todo;
  error?: Error;
};

const initialState: UpdateTodoState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export default (state = initialState, action: Action): UpdateTodoState => {
  switch (action.type) {
    case UPDATE_TODO_REQUEST:
      return {...state, loading: true};

    case UPDATE_TODO_SUCCESS:
      return {...initialState, data: action.payload};

    case UPDATE_TODO_FAILURE:
      return {...initialState, error: action.payload};

    case UPDATE_TODO_CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
