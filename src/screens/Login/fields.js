import {createRef} from 'react';
import CTextInput from '../../components/cTextInput';

const usernameRef = createRef();
const passwordRef = createRef();

const fields = [
  {
    name: 'userName',
    initailValue: '',
    component: CTextInput,
    forwardedRef: usernameRef,
    placeholder: 'Username',
    returnKeyType: 'next',
    autoCompleteType: 'username',
    textContentType: 'username',
    autoCapitalize: 'none',
    autoCorrect: false,
    onSubmitEditing: () => {
      passwordRef.current.focus();
    },
    validate: value => {
      if (!value) {
        return 'Required';
      }
    },
  },
  {
    name: 'password',
    initailValue: '',
    component: CTextInput,
    forwardedRef: passwordRef,
    placeholder: 'Password',
    returnKeyType: 'done',
    autoCapitalize: 'none',
    autoCompleteType: 'password',
    textContentType: 'password',
    autoCorrect: false,
    secureTextEntry: true,
    validate: value => {
      if (!value) {
        return 'Required';
      }
    },
  },
];

export default fields;
