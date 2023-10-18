import React, { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./assests/animation_lnvj7a3d.json"; 
import "./page2.css";  

const Page2 = () => {
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
    <div className="page2-container">
    
      <div id="lottie-container" />
    
    </div>
  );
};

export default Page2;