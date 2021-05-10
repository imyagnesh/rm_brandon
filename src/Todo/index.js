import React, {Component} from 'react';
import {Text, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import axios from '../utils/axios';

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
    error: '',
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = async () => {
    try {
      const res = await fetch('http://localhost:3000/todos');
      const todoList = await res.json();
      this.setState({
        todoList: todoList,
      });
    } catch (error) {
      console.log(error);
      this.setState({error});
    }
  };

  onAddTodo = async todo => {
    try {
      const res = await axios.post('todos', {
        text: todo,
        isDone: false,
      });
      // const res = await fetch('http://localhost:3000/todos', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     text: todo,
      //     isDone: false,
      //   }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   },
      // });
      // const todo = await res.json();
      const {todoList} = this.state;
      this.setState({
        todoList: [res.data, ...todoList],
      });
    } catch (error) {
      this.setState({error});
    }
  };

  deleteTodo = async item => {
    try {
      await axios.delete(`todos/${item.id}`);
      const {todoList} = this.state;
      const index = todoList.findIndex(todoItem => todoItem.id === item.id);
      this.setState({
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      });
    } catch (error) {
      this.setState({error});
    }
  };

  onCompleteToggle = async item => {
    try {
      const res = await axios.put(`todos/${item.id}`, {
        ...item,
        isDone: !item.isDone,
      });
      const {todoList} = this.state;
      const index = todoList.findIndex(todoItem => todoItem.id === res.data.id);
      this.setState({
        todoList: [
          ...todoList.slice(0, index),
          res.data,
          ...todoList.slice(index + 1),
        ],
      });
    } catch (error) {
      console.log(error);
      this.setState({error});
    }
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
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        enabled={Platform.OS === 'ios'}>
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
