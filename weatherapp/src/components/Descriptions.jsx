import React from "react";
import "./descriptions.css";
import { FaArrowDown } from "react-icons/fa";

const Descriptions = () => {
  return (
    <div className="section sectionDescriptions">
      <div className="card">
        <div className="descriptionCard-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>17 °C</h2>
      </div>
      <div className="card">
        <div className="descriptionCard-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>17 °C</h2>
      </div>
      <div className="card">
        <div className="descriptionCard-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>17 °C</h2>
      </div>
      <div className="card">
        <div className="descriptionCard-icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>17 °C</h2>
      </div>
    </div>
  );
};

export default Descriptions;
