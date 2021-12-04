import React from "react";
import ImageCard from "../../components/image-card/ImageCard";
import FilterBar from "./filter-bar/FilterBar";

import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <FilterBar />

        <div className="display">
          {this.props.peopleData.map((data, i) => (
            <ImageCard key={i} {...data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
