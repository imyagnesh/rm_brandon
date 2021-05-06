import React, {PureComponent, createRef} from 'react';
import {
  Pressable,
  TextInput,
  View,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
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

class TodoForm extends PureComponent {
  state = {
    todo: '',
    inputErr: '',
  };

  inputRef = createRef();

  onChangeText = text => {
    this.setState({
      todo: text,
      inputErr: '',
    });
  };

  onAddTodo = () => {
    const {todo} = this.state;
    if (todo) {
      const {onSubmit} = this.props;
      onSubmit(todo);
      this.inputRef.current.clear();
      // TODO: Add function
    } else {
      this.setState({inputErr: 'Please enter valid data'});
    }
  };

  render() {
    console.log('TodoForm component');
    const {todo, inputErr} = this.state;
    return (
      <View style={styles.inputContainer}>
        <View style={{flex: 1}}>
          <TextInput
            ref={this.inputRef}
            style={styles.textInput}
            onChangeText={this.onChangeText}
            value={todo}
            returnKeyType="done"
            onSubmitEditing={this.onAddTodo}
          />
          {!!inputErr && <Text>{inputErr}</Text>}
        </View>
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
    );
  }
}

export default TodoForm;
