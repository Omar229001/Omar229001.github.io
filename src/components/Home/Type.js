import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud & DevOps Engineer",
          "Bare Metal & Infrastructure",
          "Full-Stack Developer",
          "MSc Data & AI @ Epitech",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;
