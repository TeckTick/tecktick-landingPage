import React from "react";
import Navbar from "../components/navbar/Navbar";
// import Herosection from "./Herosection";
import Features from "../components/features/Features";

import Newsletter from "../components/newsletter/Newsletter";

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
