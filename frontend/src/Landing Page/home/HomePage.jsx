import React from "react";
import HeroSection from "./HeroSection.jsx";
import Awards from "./Awards.jsx";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer/>
    </>
  );
};

export default HomePage;
