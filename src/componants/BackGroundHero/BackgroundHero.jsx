import React from "react";
import "./BackgroundHero.css";
import image1 from "../Assets/image5.jpg";
import image2 from "../Assets/image1.png";
import image3 from "../Assets/image4.jpg";

const BackgroundHero = ({ heroCount }) => {
  if (heroCount === 0) {
    return (
      <div className="background">
        <img src={image3} alt="" />
      </div>
    );
  } else if (heroCount === 1) {
    return (
      <div className="background">
        <img src={image1} alt="" />
      </div>
    );
  } else if (heroCount === 2) {
    return (
      <div className="background">
        <img src={image2} alt="" />
      </div>
    );
  }
};

export default BackgroundHero;
