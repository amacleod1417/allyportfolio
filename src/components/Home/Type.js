import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Hackathon Enthusiast",
          "Biomedical Engineer",
          "Open Source Contributor",
          "Full-Stack Experience",
          'UI Designer'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;