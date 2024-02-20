import React from "react";
import DiscoverEvents from "../components/aboutpages/discover-events/DiscoverEvents";
import Hero from "../components/aboutpages/about-hero/Hero";
import Meetteam from "../components/aboutpages/Team/Meetteam";
import Qoutes from "../components/aboutpages/quote/Qoutes";


const About = () => {
  return (
    <div>
      <Hero />
      <Meetteam/>
      <Qoutes/>
      <DiscoverEvents />
   
    </div>
  );
};

export default About;
