import React from "react";
import "./Experience.css"; // Import the CSS file for styling
import { ExperienceItems } from "../../data"; // Import the experience data from data.jsx

export default function Experience() {
  return (
    <>
      <h2>Experience</h2>

      {ExperienceItems.map((item, index) => (
        <div className="container-fluid mt-5 ps-0">
          <div className="row" key={index}>
            <div className="col-md-2">
              <div className="icon-container">
                <img width="50" height="50" src={item.icon} alt={item.title} />
              </div>
            </div>
            <div className="col-md-10 pe-0 ps-0">
              <div className="row">
                <div className="col-md-12 ps-0 pe-0">
                  <h4>{item.company}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 ps-0 pe-0">
                  <h3>{item.title}</h3>
                </div>
                <div className="col-md-4 ps-0 pe-0 d-flex align-items-end">
                  <h3>{item.date}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
