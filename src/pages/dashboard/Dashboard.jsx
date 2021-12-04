import React, { Component } from "react";
import axios from "axios";

import Sidebar from "../../layout/sidebar/Sidebar";
import Header from "../../layout/header/Header";
import Main from "../../layout/main/Main";

import "./Dashboard.scss";

export class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      peopleData: [],
      showNav: false,
    };
  }



  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=ca66pjxhkigqER_Nnn60-V4Nk7RbP9AaHSQX6wk4Zns"
      )
      .then((res) => {
        // the mapping function can be exported into an helper function and put into a utils  folder but oh well!!!!/.
        const data = res.data.map((item) => {
          return {
            name: item.user.username,
            location: item.user.location,
            age: item.user.total_photos,
            imageUrl: item.urls.regular,
          };
        });

        this.setState({ peopleData: data });
      });


    setInterval(() => {
      const w = window.innerWidth;
      if (w < 600) {
        this.setState({ showNav: false });
      } else {
        this.setState({ showNav: true });
      }
    }, 1000);
  }

  handleSubmit = async (e, term) => {
    e.preventDefault();
    this.setState({ peopleData: [] });
    console.log(term);
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${term}?&client_id=ca66pjxhkigqER_Nnn60-V4Nk7RbP9AaHSQX6wk4Zns`
    );
    const data = await res.data.results.map((item) => {
      return {
        name: item.user.username,
        location: item.user.location,
        age: item.user.total_photos,
        imageUrl: item.urls.regular,
      };
    });

    this.setState({ peopleData: data });

    console.log(data);
  };

  render() {
    // this.resize();
    return (
      <div className="dashboard">
        <Sidebar showNav={this.state.showNav} />
        <div className="main-section">
          <Header handleSubmit={(e, term) => this.handleSubmit(e, term)} />
          {this.state.peopleData.length ? (
            <Main peopleData={this.state.peopleData} />
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
