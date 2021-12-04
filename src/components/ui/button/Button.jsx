import React from "react";
import "./Button.scss";

const Button = ({ children, style, appearance }) => {
  return (
    <button
      style={style}
      className={`button ${appearance ? appearance : null}`}
    >
      {children}
    </button>
  );
};

export default Button;
