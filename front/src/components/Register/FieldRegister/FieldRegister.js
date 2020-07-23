import React from 'react';
import PropTypes from 'prop-types';
import './fieldRegister.scss';
/**
 * A field to be used inside a form : label and input
 */
const FieldRegister = ({
  value,
  type,
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
        autoComplete="off"
        className="input"
        id={name}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

FieldRegister.propTypes = {
  /** identifier for the input : used both for name and id => must be unique */
  name: PropTypes.string.isRequired,
  /** text used as placeholder */
  placeholder: PropTypes.string.isRequired,
  /** text used as label */
  /** type of the input */
  type: PropTypes.string,
  /** text used as value for the input */
  value: PropTypes.string,
  /** called when onChange event is received by the input, two parameters :
   * - identifier
   * - new value
   */
  onChange: PropTypes.func.isRequired,
};

FieldRegister.defaultProps = {
  type: 'text',
  value: '',
};

export default FieldRegister;
