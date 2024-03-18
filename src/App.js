import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import Landingpage from "./pages/Landingpage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./portals/Events"
import Community from "./portals/Community"
import Hackathons from "./portals/Hackathons"
import Merchandise from "./portals/Merchandise"
import Gallery from "./portals/Gallery"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/tecktick-landingPage" element={<Landingpage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={ <Blog />} />
        <Route path="/events" element={ <Events />} />
        <Route path="/hackathons" element={ <Hackathons />} />
        <Route path="/community" element={ <Community />} />
        <Route path="/merchandise" element={ <Merchandise />} />
        <Route path="/gallery" element={ <Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;


