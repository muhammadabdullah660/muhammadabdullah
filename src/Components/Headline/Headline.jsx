import React, { useState, useEffect } from "react";
import "./Headline.css";

export default function Headline() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const strTime = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
      setCurrentTime(strTime);
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime(); // Initial call to display the time immediately

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <h1>Muhammad Abdullah</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <h2>Software Engineer</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 location">
          <div className="location-header">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/6C6C6D/marker--v1.png"
              alt="marker--v1"
            />
            <h4>Lahore, PK</h4>
          </div>
          <p>{currentTime}</p>
        </div>
      </div>
    </>
  );
}
