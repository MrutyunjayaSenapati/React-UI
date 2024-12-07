import React, { useState } from "react";
import "./mouse-animation.css";

export default function MouseAnimation() {
  const [animationStyle, setAnimationStyle] = useState({
    animationName: "Spin",
    animationDuration: "4s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  });

  const handleMouseOver = () => {
    setAnimationStyle({
      animationName: "Spin",
      animationDuration: "1s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
    });
  };

  const handleMouseOut = () => {
    setAnimationStyle({
      animationName: "Zoom",
      animationDuration: "4s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
    });
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center mt-5 bg-dark"
      style={{ height: "100vh" }}
    >
      <img
        src="/Image/react.png"
        alt="React Logo"
        style={animationStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}
