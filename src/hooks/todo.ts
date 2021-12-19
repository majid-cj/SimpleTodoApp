import {useDispatch, useSelector} from 'react-redux';
import {
  getTodoListAction,
  getTodoListClearStateAction,
  newTodoAction,
  newTodoClearStateAction,
  updateTodoAction,
  updateTodoClearStateAction,
} from '../actions';
import {Todo} from '../constants';
import {AppReducer} from '../reducers';
import {NewTodoState} from '../reducers/new-todo';
import {TodoListState} from '../reducers/todo-list';
import {UpdateTodoState} from '../reducers/update-todo';

export const useTodo = (): {
  todoList: TodoListState;
  todo: NewTodoState;
  updateTodo: UpdateTodoState;
  getAllTodoList: (task: string) => void;
  getAllTodoListClearState: () => void;
  createNewTodo: (todo: Todo) => void;
  createNewTodoClearState: () => void;
  updateTodoItem: (todo: Todo) => void;
  updateTodoItemClearState: () => void;
} => {
  const todoList = useSelector((state: AppReducer) => state.todoList);
  const todo = useSelector((state: AppReducer) => state.todo);
  const updateTodo = useSelector((state: AppReducer) => state.updateTodo);
  const dispatch = useDispatch();

  const getAllTodoList = (task: string) => {
    dispatch(getTodoListAction(task));
  };

  const getAllTodoListClearState = () => {
    dispatch(getTodoListClearStateAction());
  };

  const createNewTodo = (todo: Todo) => {
    dispatch(newTodoAction(todo));
  };

  const createNewTodoClearState = () => {
    dispatch(newTodoClearStateAction());
  };

  const updateTodoItem = (todo: Todo) => {
    dispatch(updateTodoAction(todo));
  };

  const updateTodoItemClearState = () => {
    dispatch(updateTodoClearStateAction());
  };

  return {
    todoList,
    todo,
    updateTodo,
    getAllTodoList,
    getAllTodoListClearState,
    createNewTodo,
    createNewTodoClearState,
    updateTodoItem,
    updateTodoItemClearState,
  };
};
