import React from "react";
import "./Avatar.css";

const Avatar = () => {
  const imageUrl = "/images/Muhammad Abdullah.jpg";
  const altText = "Avatar";
  return (
    <div className="avatar-container">
      <div className="rounded-picture">
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

export default Avatar;
