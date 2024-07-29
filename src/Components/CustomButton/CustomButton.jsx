import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
