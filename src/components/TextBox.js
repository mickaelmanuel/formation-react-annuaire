import React from "react";

const TextBox = ({ name, placeholder, value, onChange, readOnly, label, orientation = "vertical" }) => {
  return (
    <div className={orientation + "-input"}>
      {label && (
        <label htmlFor={name} className="input--label">
          {label}
        </label>
      )}
      <input
        readOnly={readOnly}
        type="text"
        name={name}
        className="input--input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextBox;
