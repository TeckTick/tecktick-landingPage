import React from "react";
import Navbar from "./Navbar";
// import Herosection from "./Herosection";
import Features from "./Features";

import Newsletter from "./Newsletter";

import Hero from "../components/hero/Hero";
import Howitworks from "../components/howitworks/Howitworks";
import Testimonials from "../components/testimonial/Testimonials";
import Footer from "../components/footer/Footer";

// import OurPartners from "./OurPartners";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Howitworks />
      <Features />

      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Main;
