import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nac-box"> Description</div>
        <div className="descriptionbox-nav-box-fade"> Reviews (122)</div>
      </div>
      <div className="descrptionbox-descrption">
        <p>
          An e-commerce website is an online platfrom that facitiaties buying
          and selling of product or service over the internet
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          inventore modi architecto veritatis molestiae atque optio tenetur
          illum necessitatibus quasi, maxime placeat deserunt unde voluptatum
          esse voluptates provident assumenda incidunt.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
