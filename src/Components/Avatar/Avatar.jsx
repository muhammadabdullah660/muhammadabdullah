import React from "react";
import "./Avatar.css";

const Avatar = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/me.jpg`;
  const altText = "Muhammad Abdullah";
  return (
    <div className="avatar-container">
      <div className="rounded-picture">
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

export default Avatar;
