import _ from 'axios';
import {
  apiConfig,
  ErrorWrapper,
  LIST_TASKS_URLS,
  CREATE_TASKS_URLS,
  Task,
  TaskListResponse,
  TaskResponse,
} from '../../constants';
import {API_ERRORS} from './types';

export const getTaskListAPI = async (): Promise<TaskListResponse> => {
  try {
    const response = await _.get<TaskListResponse>(LIST_TASKS_URLS, apiConfig);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new ErrorWrapper(API_ERRORS.NOT_FOUND);
    }
    throw new ErrorWrapper();
  }
};

export const newTaskAPI = async (task: Task): Promise<TaskResponse> => {
  try {
    const response = await _.post<TaskResponse>(
      CREATE_TASKS_URLS,
      task,
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
