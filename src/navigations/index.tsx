import React, {FC} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {AddTodoScreen} from '../screens/add-todo';
import {AllTodosScreen} from '../screens/all-todos';
import {APP_NAVIGATION} from './types';
import {TaskScreen} from '../screens/task';
import {NewTaskScreen} from '../screens/new-task';

const {Navigator, Screen} = createStackNavigator<APP_NAVIGATION>();

export type StackRoute = RouteProp<APP_NAVIGATION, keyof APP_NAVIGATION>;

export type StackNavigation = StackNavigationProp<
  APP_NAVIGATION,
  keyof APP_NAVIGATION
>;

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={'TASK'} component={TaskScreen} />
        <Screen name={'NEW_TASK'} component={NewTaskScreen} />
        <Screen
          name={'ALL_TODO'}
          component={AllTodosScreen}
          initialParams={{task_id: ''}}
        />
        <Screen
          name={'ADD_TODO'}
          component={AddTodoScreen}
          initialParams={{task_id: ''}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
