import React from "react";
import "./Filter.scss";

const Filter = ({ children }) => {
  return (
    <div className="filter">
      <span>
        {" "}
        {children} <i className="fas fa-angle-down"></i>
      </span>
    </div>
  );
};

export default Filter;
