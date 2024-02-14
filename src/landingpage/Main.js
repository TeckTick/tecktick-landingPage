import React from "react";
import Navbar from "./Navbar";
// import Herosection from "./Herosection";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

import Footer from "./Footer";
import Howitworks from "./Howitworks";
import Hero from "./Hero";

 import Footer from "./Footer";
import OurPartners from "./OurPartners";


const Main = () => {
  return (
    <div>

       <Navbar />
      <Herosection />
      <OurPartners /> 
      <Features /> 

      <Testimonials />
      <Newsletter />
      <Footer /> 
    </div>
  );
};

export default Main;
