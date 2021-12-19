import {AxiosRequestConfig} from 'axios';

const APP_URL = 'http://192.168.30.46:8080/';

export const apiConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const LIST_TASKS_URLS = `${APP_URL}task`;
export const CREATE_TASKS_URLS = `${APP_URL}task`;

export const LIST_TODO_URLS = (task: string) => `${APP_URL}task/todo/${task}`;
export const CREATE_TODO_URLS = `${APP_URL}task/todo`;
export const UPDATE_TODO_URLS = `${APP_URL}task/todo`;
