import React from "react";
import "./NavItem.scss";

const NavItem = ({ children, icon, active }) => {
  return (
    // <li className={"nav-item " + active ? "active" : null}>
    <li className={`nav-item ${active ? "active" : null}`}>
      <i className={`fas fa-${icon} `}></i>{" "}
      <span className="nav-text">{children}</span>
    </li>
  );
};

export default NavItem;
