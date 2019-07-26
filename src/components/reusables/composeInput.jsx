import React from 'react';
import Proptype from 'prop-types';
import '../../css/style.css';

const ComposeInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  onFocus,
  divClassName,
}) => (
  <>
    <div className={divClassName}>
      <input
        type={type}
        placeholder={placeholder}
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

ComposeInput.propTypes = {
  type: Proptype.string.isRequired,
  placeholder: Proptype.string,
  name: Proptype.string,
  value: Proptype.string.isRequired,
  onChange: Proptype.func,
  error: Proptype.string,
  labelName: Proptype.string,
  onFocus: Proptype.func,
  divClassName: Proptype.string,
};

export default ComposeInput;
