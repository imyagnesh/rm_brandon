import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {BorderlessButton} from 'react-native-gesture-handler';
import CheckboxIcon from '../../../assets/icons/check_box.svg';
import CheckboxOutlineIcon from '../../../assets/icons/check_box_outline.svg';

const Checkbox = ({checked, onPress}) => {
  return (
    <BorderlessButton onPress={onPress}>
      {checked ? (
        <CheckboxIcon height={24} width={24} fill="gray" />
      ) : (
        <CheckboxOutlineIcon height={24} width={24} fill="gray" />
      )}
    </BorderlessButton>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onPress: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  onPress: () => {},
};

export default memo(Checkbox);
