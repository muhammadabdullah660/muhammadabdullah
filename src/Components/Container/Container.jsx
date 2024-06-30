import React from "react";
import "./Container.css";
export default function Container({ Child }) {
  return <div className="main">{Child ? <Child /> : "No child component"}</div>;
}
