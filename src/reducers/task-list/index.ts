import {
  GET_ALL_TASKS_FAILURE,
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_CLEAR_STATE,
  Action,
  Error,
  TaskList,
} from '../../constants';

export type TaskListState = {
  loading: boolean;
  data: TaskList;
  error?: Error;
};

const initialState: TaskListState = {
  loading: false,
  data: [],
  error: undefined,
};

export default (state = initialState, action: Action): TaskListState => {
  switch (action.type) {
    case GET_ALL_TASKS_REQUEST:
      return {...state, loading: true};

    case GET_ALL_TASKS_SUCCESS:
      return {...initialState, data: action.payload};

    case GET_ALL_TASKS_FAILURE:
      return {...initialState, error: action.payload};

    case GET_ALL_TASKS_CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
