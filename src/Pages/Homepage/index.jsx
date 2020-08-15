import React from "react";

import About from "../../sections/About";
import Content from "../../sections/Content";
import Video from "../../sections/Video";
import Team from "../../sections/Team";
import Footer from "../../components/Footer";

import "../../App.css";

const Homepage = () => {
  return (
    <>
      <section id="download">
        <About />
      </section>
      <section id="about">
        <Content />
      </section>
      <section id="video">
        <Video />
      </section>
      <section id="team">
        <Team />
      </section>
      <Footer />
    </>
  );
}

export default Homepage;
