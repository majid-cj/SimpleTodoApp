import React, {FC, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Button,
  ErrorText,
  Screen,
  TextAreaInputField,
  ToolBar,
} from '../../components';
import {strings} from '../../i18n';
import {Todo} from '../../constants';
import {useTodo} from '../../hooks';

export const AddTodoScreen: FC = () => {
  const {
    params: {task_id = ''},
  } = useRoute();
  const {goBack} = useNavigation();
  const [newTodo, setNewTodo] = useState<Todo>({
    task: task_id,
    description: '',
  });
  const {
    todo: {loading, data, error},
    createNewTodo,
    getAllTodoList,
    createNewTodoClearState,
  } = useTodo();

  useEffect(() => {
    if (!loading && data) {
      getAllTodoList(task_id);
      createNewTodoClearState();
      goBack();
    }
  }, [loading, data]);

  const onTextChange = (value: string) => {
    setNewTodo({...newTodo, description: value});
  };

  const onPress = () => {
    createNewTodo({...newTodo, done: false, id: ''});
  };

  return (
    <Screen
      header={<ToolBar goBack={goBack} center={task_id} />}
      footer={<Button onPress={onPress} text={strings('button.add_todo')} />}>
      <TextAreaInputField
        value={newTodo.description}
        onTextChange={onTextChange}
        placeholder={strings('input.todo_desc')}
      />
      {error && <ErrorText label={error.message} />}
    </Screen>
  );
};
