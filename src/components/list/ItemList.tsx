import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {EmptyList, TaskItem, TodoItem} from '..';
import {useTheme} from '../../hooks';
import {strings} from '../../i18n';
import {itemListStyle} from './styles';

interface Props {
  items: Array<any>;
  error?: string;
  isTask?: boolean;
  navigate?: (...args: any) => void;
}

export const ItemList: FC<Props> = ({items, error, isTask, navigate}) => {
  const {theme} = useTheme();
  const {container} = itemListStyle(theme);

  return (
    <View style={container}>
      <FlatList
        testID={'item_list'}
        data={items}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}: {item: any}) => {
          return isTask ? (
            <TaskItem navigate={navigate} task={item} />
          ) : (
            <TodoItem todo={item} />
          );
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyList error={error || strings('errors.not_found')} />
        }
      />
    </View>
  );
};
