import React from "react";
import "./Container.css";
export default function Container({ Child, data }) {
  return (
    <div className="main">
      {Child ? <Child data={data} /> : "No child component"}
    </div>
  );
}
