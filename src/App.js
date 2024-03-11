import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import Landingpage from "./pages/Landingpage";
import About from "./pages/About";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/tecktick-landingPage" element={<Landingpage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={ <Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
