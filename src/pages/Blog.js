import React from "react";
import Popular from "../components/blogpages/homepages/Popular";
import Recent from "../components/blogpages/homepages/Recent";
import Ad from "../components/blogpages/homepages/Ad";
import Hotstuff from "../components/blogpages/homepages/Hotstuff";
import Topoftheweek from "../components/blogpages/homepages/Topoftheweek";
import Mostread from "../components/blogpages/homepages/Mostread";
import Carousel from "../components/blogpages/homepages/Carousel";
import Newletters from "../components/blogpages/homepages/Newletters";

const Blog = () => {
  return (
    <div>
      <Carousel/>
      <Ad/>
      <Recent/>
      <Popular/>
      <Ad/>
      <Mostread/>
      <Newletters/>
      <Hotstuff/>
      <Topoftheweek/>
    </div>
  );
};

export default Blog;
