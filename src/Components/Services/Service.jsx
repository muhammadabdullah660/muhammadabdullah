import React from "react";
import "./Service.css";
import { Services } from "../../data";
export default function Service() {
  return (
    <>
      <h2 className="mb-5">Services</h2>

      {Services.data.map((item, index) => (
        <div className="container-fluid mt-4">
          <div className="row" key={index}>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10 ps-0 pe-0">
                  <a
                    href="https://topmate.io/muhammad_abdullah15/1116175"
                    className="d-flex align-items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="mb-0">{item.title}</h3>
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
              {item.desc && (
                <div className="row">
                  <div className="col-md-12 ps-0 pe-0 mt-1">
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
