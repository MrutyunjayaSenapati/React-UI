import React, { useState } from "react";
import "./mouse-animation.css"; // Ensure correct import path for CSS

export default function MouseAnimation() {
  const [animationStyle, setAnimationStyle] = useState({
    animationName: "Spin",
    animationDuration: "4s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  });

  function handleMouseOver() {
    setAnimationStyle({
      animationName: "Spin",
      animationDuration: "1s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
    });
  }

  function handleMouseOut() {
    setAnimationStyle({
      animationName: "Zoom",
      animationDuration: "4s",
      animationIterationCount: "infinite", // Fixed typo
      animationTimingFunction: "linear",
    });
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center mt-5 ">
      <img
        src="/Image/react.png" // Corrected image path
        alt="React Logo"
        style={animationStyle} // Apply dynamic styles
        onMouseOver={handleMouseOver} // Attach mouse events
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}
