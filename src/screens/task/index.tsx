import React, {FC, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Screen,
  FloatingButton,
  ToolBar,
  ItemList,
  Loader,
} from '../../components';
import {StackNavigation} from '../../navigations';
import {strings} from '../../i18n';
import {useTask} from '../../hooks';

export const TaskScreen: FC = () => {
  const {
    taskList: {loading, data, error},
    getAllTaskList,
  } = useTask();
  const {navigate} = useNavigation<StackNavigation>();
  const onPress = () => {
    navigate('NEW_TASK');
  };

  useEffect(() => {
    getAllTaskList();
  }, []);

  return (
    <Screen header={<ToolBar center={strings('screen.view_tasks')} />}>
      {loading && <Loader />}
      <ItemList
        navigate={navigate}
        isTask={true}
        items={data || []}
        error={error?.message}
      />
      <FloatingButton onPress={onPress} />
    </Screen>
  );
};
