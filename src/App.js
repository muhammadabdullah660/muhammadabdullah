import React from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import Headline from "./Components/Headline/Headline";
import Avatar from "./Components/Avatar/Avatar";
import Carousel from "./Components/Carousel/Carousel";
import Skills from "./data";
export default function App() {
  return (
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
        <Carousel data={Skills} />
      </div>
    </div>
  );
}
