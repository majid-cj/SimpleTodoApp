import {
  NEW_TASK_FAILURE,
  NEW_TASK_REQUEST,
  NEW_TASK_SUCCESS,
  NEW_TASK_CLEAR_STATE,
  Action,
  Error,
  Task,
} from '../../constants';

export type NewTaskState = {
  loading: boolean;
  data?: Task;
  error?: Error;
};

const initialState: NewTaskState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export default (state = initialState, action: Action): NewTaskState => {
  switch (action.type) {
    case NEW_TASK_REQUEST:
      return {...state, loading: true};

    case NEW_TASK_SUCCESS:
      return {...initialState, data: action.payload};

    case NEW_TASK_FAILURE:
      return {...initialState, error: action.payload};

    case NEW_TASK_CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
