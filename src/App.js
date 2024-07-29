import React from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import Headline from "./Components/Headline/Headline";
import Avatar from "./Components/Avatar/Avatar";
import Carousel from "./Components/Carousel/Carousel";
import { Skills } from "./data";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import ToolStack from "./Components/ToolStack/ToolStack";
import { ExperienceItems, EducationItems, VolunteeringItems } from "./data";
import SmoothScroll from "./Components/SmoothScroll.js";
import Divider from "./Components/Divider/Divider.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Service from "./Components/Services/Service.jsx";

export default function App() {
  return (
    <SmoothScroll>
      <div className="App">
        {/* Headline row */}
        <div className="row">
          <div className="col-md-2">
            <Avatar />
          </div>
          <div className="col-md-10">
            <Container Child={Headline} />
          </div>
        </div>
        {/* Skills row */}
        <div className="row">
          <div className="col-md-12">
            <Carousel data={Skills} />
          </div>
        </div>
        {/* About row */}
        <div className="row">
          <div className="col-md-12">
            <Container Child={About} />
          </div>
        </div>
        {/* Experience row */}
        <div className="row">
          <div className="col-md-12">
            <Container Child={Experience} data={ExperienceItems} />
          </div>
        </div>
        {/* Education row */}
        <div className="row">
          <div className="col-md-12">
            <Container Child={Experience} data={EducationItems} />
          </div>
        </div>
        {/* Tool Stack row */}
        <div className="row">
          <div className="col-md-12">
            <Container Child={ToolStack} />
          </div>
        </div>
        {/* Services row */}
        <div className="row">
          <div className="col-md-12">
            <Container Child={Service} />
          </div>
        </div>
        {/* Volunteering row */}
        <div className="row">
          <div className="col-md-12">
            <Container Child={Experience} data={VolunteeringItems} />
          </div>
        </div>
        <Divider />
        {/* Footer row */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
