import React, {FC, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  FloatingButton,
  GroupButton,
  ItemList,
  Loader,
  Screen,
  ToolBar,
} from '../../components';
import {TodoList} from '../../constants';
import {useTodo} from '../../hooks';
import {StackNavigation} from '../../navigations';

export const AllTodosScreen: FC = () => {
  const {
    params: {task_id = ''},
  } = useRoute();
  const {navigate, goBack} = useNavigation<StackNavigation>();
  const {
    todoList: {loading, error, data},
    getAllTodoList,
  } = useTodo();
  const [todoList, setTodoList] = useState<TodoList>([]);

  useEffect(() => {
    getAllTodoList(task_id);
  }, [task_id]);

  useEffect(() => {
    if (data) {
      setTodoList(data.filter(item => !item.done));
    }
    if (error) {
      setTodoList([]);
    }
  }, [data, error]);

  const onPress = () => {
    navigate('ADD_TODO', {task_id: task_id});
  };

  const viewActive = () => {
    setTodoList(data.filter(item => item.done === false));
  };

  const viewDone = () => {
    setTodoList(data.filter(item => item.done === true));
  };

  return (
    <Screen header={<ToolBar goBack={goBack} center={task_id} />}>
      {loading && <Loader />}
      <GroupButton viewActive={viewActive} viewDone={viewDone} />
      <ItemList navigate={navigate} items={todoList} error={error?.message} />
      <FloatingButton onPress={onPress} />
    </Screen>
  );
};
