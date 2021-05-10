import React, {PureComponent, createRef} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import CText from '../CText';

const normalBorder = {
  borderWidth: 0.5,
  borderColor: '#D0D0D0',
};

const focusedBorder = {
  borderWidth: 1,
  borderColor: 'blue',
};

const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

class CTextInput extends PureComponent {
  inputRef = createRef();

  focusedTextInput = () => {
    const {style, error} = this.props;
    this.inputRef.current.setNativeProps({
      style: {
        ...styles.textInput,
        ...style,
        ...focusedBorder,
        borderWidth: error ? 1 : 0.5,
        borderColor: error ? 'red' : 'blue',
      },
    });
  };

  noneFocusedTextInput = () => {
    const {style, error} = this.props;
    this.inputRef.current.setNativeProps({
      style: {
        ...styles.textInput,
        ...style,
        ...focusedBorder,
        borderWidth: error ? 1 : 0.5,
        borderColor: error ? 'red' : '#BDBDBD',
      },
    });
  };

  componentDidMount() {
    this.noneFocusedTextInput();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.error && this.props.error !== prevProps.error) {
      this.noneFocusedTextInput();
    }
  }

  render() {
    console.log('redner');
    const {style, error, ...props} = this.props;
    return (
      <>
        <TextInput
          ref={this.inputRef}
          onFocus={() => {
            this.focusedTextInput();
          }}
          onBlur={() => {
            this.noneFocusedTextInput();
          }}
          maxFontSizeMultiplier={1.2}
          {...props}
        />
        {error && (
          <CText variant="inlineError" style={{marginHorizontal: 10}}>
            Error Message
          </CText>
        )}
      </>
    );
  }
}

export default CTextInput;
