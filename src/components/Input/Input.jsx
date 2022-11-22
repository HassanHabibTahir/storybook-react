import "./inuput.css";
import React from "react";
const Input = ({ size, placeholder }) => {
  return (
    <div>
      <input type="text" className={`${size}`} placeholder={placeholder} />
    </div>
  );
};

export default Input;
