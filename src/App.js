import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Landingpage from "./pages/Landingpage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./portals/Events";
import Community from "./portals/Community";
import Hackathons from "./portals/Hackathons";
import Merchandise from "./portals/Merchandise";
import Gallery from "./portals/Gallery";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Signin from "./pages/Signin";
import Post from "./pages/Post";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/tecktick-landingPage" element={<Landingpage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/community" element={<Community />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
