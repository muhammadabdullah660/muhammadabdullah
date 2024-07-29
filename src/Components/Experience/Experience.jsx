import React from "react";
import "./Experience.css"; // Import the CSS file for styling

export default function Experience(
  { data } // Pass the data prop to the Experience component
) {
  return (
    <>
      <h2 className="mb-5">{data.title}</h2>

      {data.data.map((item, index) => (
        <div className="container-fluid mt-4 ps-0">
          <div className="row" key={index}>
            <div className="col-md-2">
              <a href={item.link}>
                <div className="icon-container">
                  <img
                    width="50"
                    height="50"
                    src={item.icon}
                    alt="Muhammad Abdullah"
                  />
                </div>
              </a>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12 p-0">
                  <a href={item.link} className="d-flex align-items-center">
                    <h4 className="mb-0">{item.company}</h4>
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/external-link.png"
                      alt="external-link"
                      className="ms-2"
                    />
                  </a>
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
              {/* only add this div if the item has a desc */}
              {item.desc && (
                <div className="row">
                  <div className="col-md-12 ps-0 pe-0 mt-4">
                    <p>{item.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
