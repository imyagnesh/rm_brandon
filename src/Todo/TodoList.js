import React, {memo} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import Checkbox from '../components/checkbox/index';
import DeleteIcon from '../../assets/icons/delete.svg';

const TodoList = ({filltedList, onCompleteToggle, deleteTodo}) => {
  console.log('TodoList component');

  const renderList = ({item}) => {
    return (
      <View
        key={item.id}
        style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox
          checked={item.isDone}
          onPress={() => onCompleteToggle(item)}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: '#111',
            flex: 1,
            paddingHorizontal: 8,
            textDecorationLine: item.isDone ? 'line-through' : 'none',
          }}>
          {item.text}
        </Text>
        <Pressable onPress={() => deleteTodo(item)}>
          <DeleteIcon height={24} width={24} fill="gray" />
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      style={{flex: 1}}
      data={filltedList}
      renderItem={renderList}
      keyExtractor={item => `${item.id}`}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 0.5,
            backgroundColor: 'gray',
            marginHorizontal: 10,
          }}
        />
      )}
    />
  );
};

export default memo(TodoList);
