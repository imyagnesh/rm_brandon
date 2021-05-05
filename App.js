import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  Platform,
  View,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import DeleteIcon from './assets/icons/delete.svg';
import CheckboxIcon from './assets/icons/check_box.svg';
import CheckboxOutlineIcon from './assets/icons/check_box_outline.svg';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
    flexGrow: 1,
    marginRight: 10,
  },
  inputContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  buttonStyle: {
    borderRadius: 4,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
  },
});

class App extends Component {
  state = {
    todo: '',
    todoList: [],
    isKeyboard: false,
    status: 'all',
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({isKeyboard: true});
  };

  _keyboardDidHide = () => {
    this.setState({isKeyboard: false});
  };

  onAddTodo = () => {
    const {todo, todoList} = this.state;
    this.setState({
      todoList: [
        {
          id: new Date().valueOf(),
          text: todo,
          isDone: false,
        },
        ...todoList,
      ],
      todo: '',
    });
  };

  onChangeText = text => {
    this.setState({
      todo: text,
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

  renderList = ({item}) => {
    return (
      <View
        key={item.id}
        style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={() => this.onCompleteToggle(item)}>
          {item.isDone ? (
            <CheckboxIcon height={24} width={24} />
          ) : (
            <CheckboxOutlineIcon height={24} width={24} />
          )}
        </Pressable>
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
        <Pressable onPress={() => this.deleteTodo(item)}>
          <DeleteIcon height={24} width={24} />
        </Pressable>
      </View>
    );
  };

  render() {
    const {todo, todoList, status, isKeyboard} = this.state;
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
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChangeText}
              value={todo}
              returnKeyType="done"
              onSubmitEditing={this.onAddTodo}
            />
            <Pressable
              onPress={this.onAddTodo}
              android_ripple={{
                color: 'red',
                borderless: false,
                radius: 4,
              }}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Add Todo</Text>
            </Pressable>
            {/* <Button title="Add Todo" /> */}
          </View>
          <FlatList
            style={{flex: 1}}
            data={filltedList}
            renderItem={this.renderList}
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
          <SafeAreaInsetsContext.Consumer>
            {insets => (
              <View
                style={{
                  flexDirection: 'row',
                  paddingBottom: isKeyboard ? 0 : insets.bottom,
                  backgroundColor: 'blue',
                }}>
                <Pressable
                  onPress={() => this.setState({status: 'all'})}
                  style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: 'blue',
                  }}>
                  <Text style={{color: '#fff'}}>All</Text>
                </Pressable>
                <Pressable
                  onPress={() => this.setState({status: 'pending'})}
                  style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: 'blue',
                  }}>
                  <Text style={{color: '#fff'}}>Pending</Text>
                </Pressable>
                <Pressable
                  onPress={() => this.setState({status: 'competed'})}
                  style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: 'blue',
                  }}>
                  <Text style={{color: '#fff'}}>Completed</Text>
                </Pressable>
              </View>
            )}
          </SafeAreaInsetsContext.Consumer>
          {/* <ScrollView>
          {todoList.map(todoItem => {
            return (
              <View key={todoItem.id}>
                <Text>{todoItem.text}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default App;
