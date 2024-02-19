import React from "react";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import Hero from "../components/hero/Hero";
import Howitworks from "../components/howitworks/Howitworks";
import Testimonials from "../components/testimonial/Testimonials";
import Footer from "../components/footer/Footer";
import Ourstack from "../components/ourstack/Ourstack";

const Main = () => {
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

export default Main;
