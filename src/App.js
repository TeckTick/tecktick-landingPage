import React from "react";
import Landingpage from "./pages/Landingpage";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/tecktick-landingPage" element={<Landingpage />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
