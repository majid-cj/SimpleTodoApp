import React from 'react';
import {render as AppRender} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import taskListReducer from '../reducers/task-list';
import newTaskReducer from '../reducers/new-task';
import themeReducer from '../reducers/theme';
import todoListReducer from '../reducers/todo-list';
import todoReducer from '../reducers/new-todo';
import updateTodoReducer from '../reducers/update-todo';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

function render(
  ui: any,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        taskList: taskListReducer,
        task: newTaskReducer,
        theme: themeReducer,
        todoList: todoListReducer,
        todo: todoReducer,
        updateTodo: updateTodoReducer,
      },
      preloadedState,
    }),
  } = {},
) {
  function Wrapper({children}: {children: any}) {
    return <Provider store={store}>{children}</Provider>;
  }
  return AppRender(ui, {wrapper: Wrapper});
}

export * from '@testing-library/react-native';
export {render};

const Stack = createStackNavigator();
export const MockedNavigator = ({component, params = {}}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
