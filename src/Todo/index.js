import React, {Component} from 'react';
import {Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

class Todo extends Component {
  state = {
    todoList: [],
    status: 'all',
    inputErr: '',
  };

  onAddTodo = todo => {
    const {todoList} = this.state;
    this.setState({
      todoList: [
        {
          id: new Date().valueOf(),
          text: todo,
          isDone: false,
        },
        ...todoList,
      ],
    });
  };

  deleteTodo = item => {
    const {todoList} = this.state;
    const index = todoList.findIndex(todoItem => todoItem.id === item.id);
    this.setState({
      todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
    });
  };

  onCompleteToggle = item => {
    const {todoList} = this.state;
    const index = todoList.findIndex(todoItem => todoItem.id === item.id);
    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        {...item, isDone: !item.isDone},
        ...todoList.slice(index + 1),
      ],
    });
  };

  render() {
    console.log('Todo component');
    const {todoList, status} = this.state;
    const filltedList = todoList.filter(item => {
      if (status === 'competed') {
        return item.isDone;
      } else if (status === 'pending') {
        return !item.isDone;
      } else {
        return true;
      }
    });

    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <SafeAreaView
          style={{flex: 1}}
          forceInset={{top: 'always', bottom: 'never'}}>
          <Text style={styles.title}>Todo App</Text>
          {/* form */}
          <TodoForm onSubmit={this.onAddTodo} />
          {/* list */}
          <TodoList
            filltedList={filltedList}
            onCompleteToggle={this.onCompleteToggle}
            deleteTodo={this.deleteTodo}
          />
          {/* footer button */}
          <TodoFooter changeStatus={sts => this.setState({status: sts})} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default Todo;
