import React, {Component} from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

class TodoFooter extends Component {
  state = {
    isKeyboard: false,
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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isKeyboard !== this.state.isKeyboard) {
      return true;
    }
    return false;
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
  render() {
    console.log('TodoFooter component');
    const {changeStatus} = this.props;
    const {isKeyboard} = this.state;

    return (
      <SafeAreaInsetsContext.Consumer>
        {insets => (
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: isKeyboard ? 0 : insets.bottom,
              backgroundColor: 'blue',
            }}>
            <Pressable
              onPress={() => changeStatus('all')}
              style={{
                flex: 1,
                paddingHorizontal: 16,
                paddingVertical: 10,
                backgroundColor: 'blue',
              }}>
              <Text style={{color: '#fff'}}>All</Text>
            </Pressable>
            <Pressable
              onPress={() => changeStatus('pending')}
              style={{
                flex: 1,
                paddingHorizontal: 16,
                paddingVertical: 10,
                backgroundColor: 'blue',
              }}>
              <Text style={{color: '#fff'}}>Pending</Text>
            </Pressable>
            <Pressable
              onPress={() => changeStatus('competed')}
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
    );
  }
}

export default TodoFooter;
