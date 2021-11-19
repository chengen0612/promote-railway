import React from "react";

import Navbar from "./sections/Navbar";
import PageWrapper from "./components/PageWrapper";
import Backdrop from "./components/Backdrop";
import HeroSection from "./sections/HeroSection";
import AboutUs from "./sections/AboutUs";
import Gallery from "./sections/Gallery";
import News from "./sections/News";
import Project from "./sections/Project";
import Note from "./sections/Note";
import Contact from "./sections/Contact";
import Connection from "./sections/Connection";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Backdrop>
          <HeroSection />
          <AboutUs />
          <Gallery />
          <News />
          <Project />
          <Note />
          <Contact />
          <Connection />
        </Backdrop>
        <Footer />
      </PageWrapper>
    </>
  );
}

export default App;
