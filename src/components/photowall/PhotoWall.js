import React from "react";
import "./PhotoWall.scss";

const PhotoWall = () => {
  const photo = require("../../assets/images/gallery/gallery1.jpg");

  return (
    <div className="photo-wall-container" id="photowall">
      <h1 className="section-title"> Photo Wall</h1>
      <div className="photo-single">
        <img src={photo} alt="My Photo" />
      </div>
    </div>
  );
};

export default PhotoWall;
