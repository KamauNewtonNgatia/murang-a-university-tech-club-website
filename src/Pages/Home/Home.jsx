import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/AboutUs/About";
import Title from "../../components/Title/Title";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Title mainTitle="About Us" />
      <About />
      <Title mainTitle="Testimonials" />
      <Testimonials />
    </>
  );
}

export default Home;
