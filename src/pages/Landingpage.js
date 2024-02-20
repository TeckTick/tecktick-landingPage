import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Newsletter from "../components/landingpages/newsletter/Newsletter";
import Hero from "../components/landingpages/hero/Hero";
import Howitworks from "../components/landingpages/howitworks/Howitworks";
import Footer from "../components/shared/footer/Footer";
import Ourstack from "../components/landingpages/ourstack/Ourstack";
import Testimonials from "../components/landingpages/testimonial/Testimonials";

const Landingpage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Howitworks />
      <Ourstack />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Landingpage;
