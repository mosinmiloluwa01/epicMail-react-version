import React from 'react';
import Proptype from 'prop-types';
import '../../css/style.css';

const inputField = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
  error,
  labelName,
  onFocus,
  divClassName,
}) => (
  <>
    <div className='label'>
      <p>{labelName}</p>
    </div>
    <div className={divClassName}>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        autoComplete="off"
      />
    </div>
      <p className="error-message">{error}</p>
  </>
);

inputField.propTypes = {
  type: Proptype.string.isRequired,
  placeholder: Proptype.string,
  name: Proptype.string,
  value: Proptype.string.isRequired,
  onChange: Proptype.func,
  className: Proptype.string.isRequired,
  error: Proptype.string,
  labelName: Proptype.string,
  onFocus: Proptype.func,
  divClassName: Proptype.string,
};

export default inputField;
