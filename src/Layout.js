import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavBarAndFooter = [
    "/signup",
    "/login",
    "/forgot-password",
    "/events",
    "/community",
    "/hackathons",
    "/merchandise",
    "/gallery",
    "/blog",
    "/sign-in",
  ].includes(location.pathname);

  return (
    <>
      {!hideNavBarAndFooter && <Navbar />}

      <main>{children}</main>

      {!hideNavBarAndFooter && <Footer />}
    </>
  );
};

export default Layout;
