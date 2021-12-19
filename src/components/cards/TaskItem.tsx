import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Task} from '../../constants';
import {useTheme} from '../../hooks';
import {taskItemStyle} from './styles';

interface Props {
  task: Task;
  navigate: (...args: any) => void;
}

export const TaskItem: FC<Props> = ({task, navigate}) => {
  const {id = '', title = '', date = ''} = task;
  const {theme} = useTheme();
  const {container, header, subHeader} = taskItemStyle(theme);

  const onPress = () => {
    navigate('ALL_TODO', {task_id: id});
  };
  return (
    <TouchableOpacity
      testID={'task_item'}
      style={container}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={header}>{title}</Text>
      <Text style={subHeader}>{date}</Text>
    </TouchableOpacity>
  );
};
