import React from "react";

const HeroSection = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="images/homeHero.png" alt="hero image" className="mb-5"/>
        <h1 className="mt-5">Invest in Everything</h1>
        <p>Online platform to invest in Stocks , derivatives , mutual funds and more... </p>
        <button style={{width: "22%" , margin: "0 auto"}} className="p-3 btn btn-primary fs-6">Sign Up Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
