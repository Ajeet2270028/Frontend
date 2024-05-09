import React from "react";
import "./Hero.css";
import arrow from "../Assets/arrow.png";

const Hero = ({ heroCount, setHeroCount }) => {
  return (
    <div className="hero1">
      {/* <div className="explor-btn">
        <p>Explore more Product</p>
        <img src={arrow} alt="" />
      </div> */}
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
      </div>
      {/* <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
