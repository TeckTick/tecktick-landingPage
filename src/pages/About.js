import React from "react";
import DiscoverEvents from "../components/aboutpages/discover-events/DiscoverEvents";
import Hero from "../components/aboutpages/about-hero/Hero";
import Meetteam from "../components/aboutpages/Team/Meetteam";

const About = () => {
  return (
    <div>
      <Hero />

      <Meetteam/>
   <DiscoverEvents />

    </div>
  );
};

export default About;
