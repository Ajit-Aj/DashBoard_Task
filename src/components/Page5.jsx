import React, { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./assests/help.json";
import "./page5.css";

const Page5 = () => {
  useEffect(() => {
    const container = document.getElementById("lottie-container");

    lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <div className="page5-container">
      <div id="lottie-container" />
    </div>
  );
};

export default Page5;
