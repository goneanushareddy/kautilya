import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.scss";
import "./assets/css/responsive.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Common_footer";

import "./assets/css/responsive.css";
import "./assets/css/style.scss";
import SocialLinks from "./components/SocialLinks";
import BackToTopButton from "./components/Backtotop";
import Metatag from "./components/Metatag";
import Routers from "./Routers";

function App() {
  return (
    <Router>
      <>
        <NavBar />

        {/* <Metatag /> */}

        <Routers />
        <SocialLinks />
        <BackToTopButton />
        {/* <Admission_enquiry /> */}
        <Footer />
      </>
    </Router>
  );
}

export default App;
