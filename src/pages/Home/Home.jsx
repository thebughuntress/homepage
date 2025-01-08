import { Box } from "@mui/material";
import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Certificates from "../../components/Certificates/Certificates.jsx";
import Hero2 from "../../components/Hero2/Hero2.jsx";
import Services from "../../components/Services/Services.jsx";
import TechnologiesAndTools from "../../components/TechnologiesAndTools/TechnologiesAndTools.jsx";
import QuoteBox from "../../components/QuoteBox/QuoteBox.jsx";

const Home = () => {
  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <Hero2 />
      <AboutMe />
      <TechnologiesAndTools />
      <Services />
      <Certificates />
      <QuoteBox />
    </Box>
  );
};

export default Home;
