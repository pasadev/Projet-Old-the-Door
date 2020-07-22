import React from 'react';
import PropTypes from 'prop-types';

import './field.scss';

/**
 * A field to be used inside a form : label and input
 */
const Field = ({
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
    <div className="field">
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

Field.propTypes = {
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

Field.defaultProps = {
  type: 'text',
  value: '',
};

export default Field;
