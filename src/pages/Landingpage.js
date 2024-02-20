import React from "react";
import Newsletter from "../components/landingpages/newsletter/Newsletter";
import Hero from "../components/landingpages/hero/Hero";
import Howitworks from "../components/landingpages/howitworks/Howitworks";
import Ourstack from "../components/landingpages/ourstack/Ourstack";
import Testimonials from "../components/landingpages/testimonial/Testimonials";

const Landingpage = () => {
  return (
    <>
      <Hero />
      <Howitworks />
      <Ourstack />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Landingpage;
