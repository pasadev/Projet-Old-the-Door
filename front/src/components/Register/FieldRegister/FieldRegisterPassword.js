import React from 'react';
import PropTypes from 'prop-types';

/**
 * A field to be used inside a form : label and input
 */
const FieldRegisterPassword = ({
  value,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  return (
    <div className="fieldRegister">
      <input
        className="input input-password"
        autoComplete="off"
        id={name}
        placeholder={placeholder}
        name={name}
        type="password"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

FieldRegisterPassword.propTypes = {
  /** identifier for the input : used both for name and id => must be unique */
  name: PropTypes.string.isRequired,
  /** text used as placeholder */
  placeholder: PropTypes.string.isRequired,
  /** text used as label */
  /** type of the input */
  /** text used as value for the input */
  value: PropTypes.string,
  /** called when onChange event is received by the input, two parameters :
   * - identifier
   * - new value
   */
  onChange: PropTypes.func.isRequired,
};

FieldRegisterPassword.defaultProps = {
  value: '',
};

export default FieldRegisterPassword;
