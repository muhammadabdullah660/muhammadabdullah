// SmoothScroll.js
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      container.style.transform = `translateY(${-window.scrollY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <motion.div
        ref={containerRef}
        style={{
          willChange: "transform",
          transition: "transform 2s ease-out",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SmoothScroll;
