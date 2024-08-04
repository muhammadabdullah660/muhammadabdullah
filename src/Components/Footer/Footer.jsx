import React from "react";
import "./Footer.css";
import CustomButton from "../CustomButton/CustomButton";
import { Socials } from "../../utils/data";
export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:muhammadabdullahtalib51@gmail.com";
  };

  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1A6aoU7TgdmOTT76q_bzvWAmPyYsDKFP1"; // Replace with the actual path to your CV
    link.download = "Muhammad_Abdullah.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="footer">
      <h2>Contact me</h2>
      <p>Let's make something great!</p>
      <div className="button-group mt-5">
        <CustomButton text={"Drop an email"} onClick={handleEmailClick} />
        <CustomButton text={"Download CV"} onClick={handleCvDownload} />
      </div>
      <div className="socials">
        {Socials.map((social, index) => (
          <a href={social.link} target="_blank" rel="noreferrer" key={index}>
            <img
              width="30"
              height="30"
              src={social.icon}
              alt="Muhammad Abdullah"
            />
          </a>
        ))}
      </div>
      <div className="credits mt-5">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://linktr.ee/muhammad_abdullah00"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", fontFamily: "Gambetta, serif" }}
          >
            Muhammad Abdullah
          </a>
        </p>
      </div>
    </div>
  );
}
