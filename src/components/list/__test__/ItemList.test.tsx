import 'react-native';
import React from 'react';
import {render} from '../../../utils/test-util';
import {ItemList} from '..';
import {TaskList, TodoList} from '../../../constants';

it('test ItemList to match snapshot', () => {
  const items: TaskList = [{id: '1', title: 'test', date: '2020-12-12'}];
  const {toJSON} = render(<ItemList isTask items={items} />);
  expect(toJSON()).toMatchSnapshot();
});

it('test ItemList Task', () => {
  const items: TaskList = [{id: '1', title: 'test', date: '2020-12-12'}];
  const {getAllByTestId} = render(<ItemList isTask items={items} />);
  const taskItems = getAllByTestId('task_item');
  expect(taskItems.length).toBe(1);
});

it('test ItemList Todo', () => {
  const items: TodoList = [
    {id: '1', task: '1', description: 'test', done: false},
    {id: '2', task: '1', description: 'test 2', done: true},
  ];
  const {getAllByTestId} = render(<ItemList items={items} />);
  const taskItems = getAllByTestId('todo_item');
  expect(taskItems.length).toBe(2);
});
