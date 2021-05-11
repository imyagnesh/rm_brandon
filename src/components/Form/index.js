import React from 'react';
import {View} from 'react-native';
import {FastField, Formik} from 'formik';
import CButton from '../cButton';

const Form = ({fields, buttonProps, ...props}) => {
  return (
    <Formik
      initialValues={fields.reduce(
        (p, c) => ({...p, [c.name]: c.initailValue}),
        {},
      )}
      {...props}>
      {({values, errors, handleSubmit}) => (
        <>
          {fields.map(field => (
            <View style={{marginBottom: 8}}>
              <FastField key={field.name} {...field} />
            </View>
          ))}
          <CButton
            title="Login"
            style={{marginBottom: 8}}
            onPress={handleSubmit}
            {...buttonProps}
          />
        </>
      )}
    </Formik>
  );
};

export default Form;
