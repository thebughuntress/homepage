import { Box } from "@mui/material";
import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Certificates from "../../components/Certificates/Certificates.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Services from "../../components/Services/Services.jsx";
import TechnologiesAndTools from "../../components/TechnologiesAndTools/TechnologiesAndTools.jsx";

const Home = () => {
  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <Hero />
      <AboutMe />
      <TechnologiesAndTools />
      {/* <Skills /> */}
      <Services />
      <Certificates />
    </Box>
  );
};

export default Home;
