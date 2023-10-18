import React, { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./assests/promotion.json";
import "./page4.css";

const Page4 = () => {
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
    <div className="page4-container">
      <div id="lottie-container" />
    </div>
  );
};

export default Page4;
