import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Todo} from '../../constants';
import {useTheme, useTodo} from '../../hooks';
import {todoItemStyle} from './styles';

interface Props {
  todo: Todo;
}

export const TodoItem: FC<Props> = ({todo}) => {
  const [toggle, setToggle] = useState<Todo>(todo);
  const {theme} = useTheme();
  const {
    colors: {accent},
  } = theme;
  const {
    updateTodo: {loading, data},
    getAllTodoList,
    updateTodoItem,
    updateTodoItemClearState,
  } = useTodo();
  const {container, header} = todoItemStyle(theme);

  useEffect(() => {
    if (!loading && data) {
      getAllTodoList(todo.task);
      updateTodoItemClearState();
    }
  }, [loading, data]);

  const toggleTodo = (value: boolean) => {
    setToggle({...toggle, done: value});
    updateTodoItem({...todo, done: value});
  };

  return (
    <View testID={'todo_item'} style={container}>
      <CheckBox
        value={toggle.done}
        onValueChange={toggleTodo}
        boxType={'square'}
        lineWidth={1}
        onCheckColor={accent}
        onTintColor={accent}
      />
      <Text style={header}>{toggle.description}</Text>
    </View>
  );
};
