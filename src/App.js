import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import Landingpage from "./pages/Landingpage";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/tecktick-landingPage" element={<Landingpage />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
