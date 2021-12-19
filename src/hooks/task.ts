import {useDispatch, useSelector} from 'react-redux';
import {
  newTaskAction,
  getTaskListAction,
  getTaskListClearStateAction,
  newTaskClearAction,
} from '../actions';
import {Task} from '../constants';
import {AppReducer} from '../reducers';
import {NewTaskState} from '../reducers/new-task';
import {TaskListState} from '../reducers/task-list';

export const useTask = (): {
  taskList: TaskListState;
  task: NewTaskState;
  getAllTaskList: () => void;
  getAllTaskListClearState: () => void;
  createNewTask: (task: Task) => void;
  createNewTaskClearState: () => void;
} => {
  const taskList = useSelector((state: AppReducer) => state.taskList);
  const task = useSelector((state: AppReducer) => state.task);
  const dispatch = useDispatch();

  const getAllTaskList = () => {
    dispatch(getTaskListAction());
  };

  const getAllTaskListClearState = () => {
    dispatch(getTaskListClearStateAction());
  };

  const createNewTask = (task: Task) => {
    dispatch(newTaskAction(task));
  };

  const createNewTaskClearState = () => {
    dispatch(newTaskClearAction());
  };

  return {
    taskList,
    task,
    getAllTaskList,
    getAllTaskListClearState,
    createNewTask,
    createNewTaskClearState,
  };
};
