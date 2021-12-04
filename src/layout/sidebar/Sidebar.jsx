import React from "react";

import NavItem from "../../components/nav/nav-item/NavItem";

import "./Sidebar.scss";

const Sidebar = ({ showNav }) => {
  return (
    <div className="sidebar">
      <h1 className="logo"> {showNav ? "bluecube" : "B"} </h1>
      <nav className="navbar">
        <ul>
          <NavItem active icon="home">
            {showNav ? "Home" : ""}
          </NavItem>
          <NavItem icon="sticky-note">{showNav ? "Message" : ""}</NavItem>
          {showNav ? <span>SHARE</span> : ""}
          <NavItem icon="chart-bar">{showNav ? "Ranking" : ""}</NavItem>
          <NavItem icon="medal">{showNav ? "Challenge" : ""}</NavItem>
          <NavItem icon="glass-cheers">{showNav ? "Party" : ""}</NavItem>
          <NavItem icon="link">{showNav ? "Connect" : ""}</NavItem>
          <NavItem icon="male">{showNav ? "Parade" : ""}</NavItem>
          <NavItem icon="users">{showNav ? "Group" : ""}</NavItem>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
