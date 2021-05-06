import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Pressable} from 'react-native';
import CheckboxIcon from '../../../assets/icons/check_box.svg';
import CheckboxOutlineIcon from '../../../assets/icons/check_box_outline.svg';

const Checkbox = ({checked, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      {checked ? (
        <CheckboxIcon height={24} width={24} fill="gray" />
      ) : (
        <CheckboxOutlineIcon height={24} width={24} fill="gray" />
      )}
    </Pressable>
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
