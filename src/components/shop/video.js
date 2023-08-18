import React from "react";
// import backvideo from "../videos/loginBackground.mp4";
import backvideo from "../images/loginbg.mp4";

export default function Video() {
  return (
    <video muted autoPlay loop id="myVideo">
      <source src={backvideo} type="video/mp4" />
    </video>
  );
}

