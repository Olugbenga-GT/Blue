import React from "react";

import Button from "../ui/button/Button";

import "./ImageCard.scss";

const ImageCard = ({ name, location, age, imageUrl }) => {
  return (
    <div className="card">
      <div>
        <img
          className="card-image"
          alt="name"
          src={imageUrl}
          //   src={`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80`}
        />
        {/* <img className="card-image" src={image} /> */}
      </div>
      <div className="details">
        <p className="name">
          {name} , {age}
        </p>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i>{" "}
          {location ? location : "No Location"}
        </p>

        <div className="card-buttons">
          <Button appearance="badge">
            <i className="far fa-heart"></i>
          </Button>
          <Button appearance="badge" style={{ backgroundColor: "red" }}>
            <i className="far fa-thumbs-down"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
