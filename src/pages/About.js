import React from "react";
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

const About = () => {
  return (
    <section className="flex flex-col gap-3">
      <MissionStory
        title={missionTitle}
        description1={missionDescription1}
        description2={missionDescription2}
        image={mission_img}
        smallImg={mdMission_img}
        flexStyle="flex-row"
      />
      <MissionStory
        title={storyTitle}
        description1={storyDescription1}
        description2={storyDescription2}
        image={story_img}
        smallImg={mdStory_img}
        flexStyle="flex-row-reverse"
      />
    </section>
  );
};

export default About;
