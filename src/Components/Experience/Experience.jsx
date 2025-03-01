import React from "react";
import "./Experience.css"; // Import the CSS file for styling

export default function Experience({ data }) {
  return (
    <>
      <h2 className="mb-5">{data.title}</h2>

      {data.data.map((item, index) => (
        <div className="container-fluid mt-4 ps-0" key={index}>
          <div className="row">
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
              <div className="row mb-2">
                <div className="col-md-12">
                  <a
                    href={item.link}
                    className="d-flex align-items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="mb-0 position-title">{item.company}</h4>
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
                <div className="col-12 col-md-8">
                  <h3 className="position-title">{item.title}</h3>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-end">
                  <h3 className="date">{item.date}</h3>
                </div>
              </div>
              {/* only add this div if the item has a desc */}
              {item.desc && (
                <div className="row">
                  <div className="col-md-12 mt-4">
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
