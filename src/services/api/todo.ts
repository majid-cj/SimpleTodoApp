import _ from 'axios';
import {
  apiConfig,
  ErrorWrapper,
  LIST_TODO_URLS,
  CREATE_TODO_URLS,
  UPDATE_TODO_URLS,
  Todo,
  TodoListResponse,
  TodoResponse,
} from '../../constants';
import {API_ERRORS} from './types';

export const getTodoListAPI = async (
  task: string,
): Promise<TodoListResponse> => {
  try {
    const response = await _.get<TodoListResponse>(
      LIST_TODO_URLS(task),
      apiConfig,
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new ErrorWrapper(API_ERRORS.NOT_FOUND);
    }
    throw new ErrorWrapper();
  }
};

export const newTodoAPI = async (todo: Todo): Promise<TodoResponse> => {
  try {
    const response = await _.post<TodoResponse>(
      CREATE_TODO_URLS,
      todo,
      apiConfig,
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new ErrorWrapper(API_ERRORS.SERVER);
    }
    throw new ErrorWrapper();
  }
};

export const updateTodoAPI = async (todo: Todo): Promise<TodoResponse> => {
  try {
    const response = await _.put<TodoResponse>(
      UPDATE_TODO_URLS,
      todo,
      apiConfig,
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new ErrorWrapper(API_ERRORS.SERVER);
    }
    throw new ErrorWrapper();
  }
};
