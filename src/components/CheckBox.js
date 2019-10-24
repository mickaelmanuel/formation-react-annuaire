import React from "react";
import cuid from "cuid";

const CheckBox = ({ label, name, checked, onChange }) => {
  var id = cuid();
  return (
    <div className="checkbox">
      <input type="checkbox" name={id} id={name} checked={checked} onChange={onChange} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default CheckBox;
