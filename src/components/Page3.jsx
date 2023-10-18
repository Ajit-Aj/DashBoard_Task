import React, { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./assests/income.json";
import "./page3.css";

const Page3 = () => {
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
    <div className="page3-container">
      <div id="lottie-container" />
    </div>
  );
};

export default Page3;
