import React from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import Headline from "./Components/Headline/Headline";
import Avatar from "./Components/Avatar/Avatar";

export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-2">
          <Avatar />
        </div>
        <div className="col-md-10">
          <Container Child={Headline} />
        </div>
      </div>
    </div>
  );
}
