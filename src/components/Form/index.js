import React from 'react';
import {View} from 'react-native';
import {FastField, Formik} from 'formik';
import CButton from '../cButton';
import CText from '../CText';

const Form = ({fields, buttonProps, ...props}) => {
  return (
    <Formik
      initialValues={fields.reduce(
        (p, c) => ({...p, [c.name]: c.initailValue}),
        {}, 
      )}
      {...props}>
      {({values, errors, handleSubmit, isSubmitting}) => (
        <>
          {errors.server && (
            <CText
              variant="error"
              style={{
                textAlign: 'center',
                paddingBottom: 8,
              }}>
              {errors.server}
            </CText>
          )}
          {fields.map(field => (
            <View key={field.name} style={{marginBottom: 8}}>
              <FastField {...field} />
            </View>
          ))}
          <CButton
            title="Login"
            loading={isSubmitting}
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
