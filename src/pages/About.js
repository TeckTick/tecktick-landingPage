import React from "react";
import DiscoverEvents from "../components/aboutpages/discover-events/DiscoverEvents";
import Hero from "../components/aboutpages/about-hero/Hero";
import Meetteam from "../components/aboutpages/Team/Meetteam";
import MissionStory from "../components/aboutpages/missionstory/MissionStory";

import mission_img from "../assets/images/Frame 239.png";
import story_img from "../assets/images/Frame 241.png";
import mdStory_img from "../assets/images/Frame 4.png";
import mdMission_img from "../assets/images/Frame 3.png";

import {
  missionTitle,
  missionDescription1,
  missionDescription2,
  storyTitle,
  storyDescription1,
  storyDescription2,
} from "../data/mission-story";
import Quotes from "../components/aboutpages/quote/Qoutes";

const About = () => {
  return (
    <>
      <Hero />
      <section className="flex flex-col gap-3">
        <MissionStory
          title={missionTitle}
          description1={missionDescription1}
          description2={missionDescription2}
          image={mission_img}
          smallImg={mdMission_img}
          flexStyle="lg:flex-row"
        />
        <MissionStory
          title={storyTitle}
          description1={storyDescription1}
          description2={storyDescription2}
          image={story_img}
          smallImg={mdStory_img}
          flexStyle="lg:flex-row-reverse"
        />
      </section>
      <Meetteam />
      <Quotes />
      <DiscoverEvents />
    </>
  );
};

export default About;
