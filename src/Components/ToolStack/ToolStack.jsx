import React from "react";
import Carousel from "../Carousel/Carousel";
import { Tools } from "../../data";

export default function ToolStack() {
  return (
    <>
      <h2>Tool Stack</h2>
      <Carousel data={Tools} />
    </>
  );
}
