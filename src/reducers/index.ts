import {combineReducers} from 'redux';
import taskListReducer from './task-list';
import newTaskReducer from './new-task';
import themeReducer from './theme';
import todoListReducer from './todo-list';
import todoReducer from './new-todo';
import updateTodoReducer from './update-todo';

export const appReducer = combineReducers({
  taskList: taskListReducer,
  task: newTaskReducer,
  theme: themeReducer,
  todoList: todoListReducer,
  todo: todoReducer,
  updateTodo: updateTodoReducer,
});

export type AppReducer = ReturnType<typeof appReducer>;
