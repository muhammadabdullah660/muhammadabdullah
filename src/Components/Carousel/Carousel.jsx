// src/Carousel.js

import React from "react";
import {
  CarouselContainer,
  CarouselWrapper,
  SkillItem,
} from "./Carousel-Styles";

const Carousel = ({ data }) => {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        {data.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
        {/* Repeat the skills to create a continuous scrolling effect */}
        {data.map((skill, index) => (
          <SkillItem key={index + data.length}>{skill}</SkillItem>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
