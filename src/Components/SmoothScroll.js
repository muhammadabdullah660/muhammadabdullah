import { useEffect, useRef, useState } from "react";

const SmoothScroll = ({ children }) => {
  const outerContainerRef = useRef(null);
  const innerContainerRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const outerContainer = outerContainerRef.current;
    const innerContainer = innerContainerRef.current;
    setScrollHeight(innerContainer.scrollHeight);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      outerContainer.style.transform = `translateY(${-scrollY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ height: scrollHeight, overflow: "hidden", position: "relative" }}
    >
      <div
        ref={outerContainerRef}
        style={{
          willChange: "transform",
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          transition: "transform 1s ease-out",
        }}
      >
        <div ref={innerContainerRef}>{children}</div>
      </div>
    </div>
  );
};

export default SmoothScroll;
