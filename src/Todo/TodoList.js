import React, {memo} from 'react';
import {FlatList, Pressable, Text, View, Animated} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
import Checkbox from '../components/checkbox/index';
import DeleteIcon from '../../assets/icons/delete.svg';

const TodoList = ({filltedList, onCompleteToggle, deleteTodo}) => {
  // const renderLeftActions = (progress, dragX) => {
  //   const trans = dragX.interpolate({
  //     inputRange: [0, 50, 100, 101],
  //     outputRange: [-20, 0, 0, 1],
  //   });
  //   return (
  //     <RectButton
  //       style={{
  //         height: 40,
  //         width: 100,
  //         backgroundColor: 'red',
  //       }}
  //       onPress={this.close}>
  //       <Animated.Text
  //         style={[
  //           {
  //             color: '#fff',
  //             transform: [{translateX: trans}],
  //           },
  //         ]}>
  //         Delete
  //       </Animated.Text>
  //     </RectButton>
  //   );
  // };

  const renderList = ({item}) => {
    // return (
    //   <Swipeable renderRightActions={renderLeftActions}>
    //     <Text>{item.text}</Text>
    //   </Swipeable>
    // );
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
        <BorderlessButton onPress={() => deleteTodo(item)}>
          <DeleteIcon height={24} width={24} fill="gray" />
        </BorderlessButton>
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

export default memo(TodoList, (prevProps, nextProps) => {
  return prevProps.filltedList === nextProps.filltedList;
});
