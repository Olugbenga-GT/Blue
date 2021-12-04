import React, { Component } from "react";

import Button from "../../components/ui/button/Button";
import Notifications from "../notifications/Notifications";
import "./Header.scss";
import avatar from "../../assets/avatar.jpg";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      active: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="header">
        <form
          onSubmit={(e) => {
            this.props.handleSubmit(e, this.state.term);
            this.setState({ term: "" });
          }}
          className="search-form"
        >
          <label className="search-label">
            <i className="fas fa-search"></i>
          </label>
          <input
            className="search-input"
            placeholder="Find Something..."
            type="search"
            value={this.state.term}
            name="term"
            onChange={this.handleChange}
          />
          <Button>Search</Button>
        </form>

        {/* second half of header nav */}

        <div className="items">
          <div
            className="notification-icon"
            onClick={() => this.setState({ active: !this.state.active })}
          >
            <i className="fas fa-2x fa-bell"></i>
            <span className="count"> 3</span>
          </div>
          <div className="avatar">
            <img src={avatar} alt={avatar} />
            <span className="status"> </span>
          </div>

          <div className="options">
            Abigail <i className="fas fa-angle-down"></i>
          </div>

          <Notifications active={this.state.active} />
        </div>
      </div>
    );
  }
}

export default Header;
