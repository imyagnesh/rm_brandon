import {createRef} from 'react';
import CTextInput from '../../components/cTextInput';

const firstNameRef = createRef();
const usernameRef = createRef();
const passwordRef = createRef();

const fields = [
  {
    name: 'firstName',
    initailValue: '',
    component: CTextInput,
    forwardedRef: firstNameRef,
    placeholder: 'Firstname',
    returnKeyType: 'next',
    // autoCompleteType: 'username',
    // textContentType: 'username',
    autoCapitalize: 'none',
    autoCorrect: false,
    onSubmitEditing: () => {
      usernameRef.current.focus();
    },
    validate: value => {
      if (!value) {
        return 'Required';
      }
    },
  },
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
