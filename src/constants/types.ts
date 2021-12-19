import {strings} from '../i18n';

export type Action = {
  type: string;
  payload: any;
};

export type Task = {
  id?: string;
  title: string;
  date?: string;
};

export type Todo = {
  id?: string;
  task: string;
  description: string;
  done?: boolean;
};

export type TaskList = Array<Task>;

export type TodoList = Array<Todo>;

export type TaskResponse = {
  data: Task;
};

export type TodoResponse = {
  data: Todo;
};

export type TaskListResponse = {
  data: TaskList;
};

export type TodoListResponse = {
  data: TodoList;
};

export type Error = {
  message: string;
};

export class ErrorWrapper implements Error {
  message: string = strings('errors.general');

  constructor(code: string = 'general') {
    this.message = strings(`errors.${code}`);
  }
}
