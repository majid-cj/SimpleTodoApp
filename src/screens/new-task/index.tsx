import React, {FC, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, ErrorText, FieldInput, Screen, ToolBar} from '../../components';
import {Task} from '../../constants';
import {useTask} from '../../hooks';
import {strings} from '../../i18n';

export const NewTaskScreen: FC = () => {
  const [newTask, setNewTask] = useState<Task>({title: ''});
  const {
    task: {loading, error, data},
    createNewTask,
    createNewTaskClearState,
    getAllTaskList,
  } = useTask();
  const {goBack} = useNavigation();
  const onTextChange = (value: string) => {
    setNewTask({...newTask, title: value});
  };

  useEffect(() => {
    if (data && !loading) {
      createNewTaskClearState();
      getAllTaskList();
      goBack();
    }
  }, [data, loading]);

  const onPress = () => {
    createNewTask({...newTask, date: new Date().toString().substring(0, 21)});
  };

  return (
    <Screen
      header={<ToolBar goBack={goBack} center={strings('screen.new_task')} />}
      footer={
        <Button bottom text={strings('button.add_new')} onPress={onPress} />
      }>
      <FieldInput
        value={newTask.title}
        onTextChange={onTextChange}
        placeholder={strings('input.task_name')}
      />
      {error && <ErrorText label={error.message} />}
    </Screen>
  );
};
