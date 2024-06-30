// src/SkillsCarouselStyles.js

import styled, { keyframes } from "styled-components";

// Keyframes for the animation
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Styled container for the carousel
export const CarouselContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 20px 0;
`;

// Styled item wrapper to handle animation
export const CarouselWrapper = styled.div`
  display: inline-block;
  animation: ${scroll} 20s linear infinite; /* Slowed down the animation */
`;

// Styled individual skill item
export const SkillItem = styled.div`
  display: inline-block;
  padding: 0 15px;
  font-size: 24px;
  font-style: italic;
  color: #fff9f6;
  font-family: "Gambetta", serif;
`;
