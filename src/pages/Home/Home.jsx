import { Box } from "@mui/material";
import React from "react";
import BadgeCollection from "../../components/BadgeCollection/BadgeCollection.jsx";
import BuyMeACoffee from "../../components/BuyMeACoffee/BuyMeACoffee.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import QuoteBox from "../../components/QuoteBox/QuoteBox.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import Services from "../../components/Services/Services.jsx";

const Home = () => {
  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <BadgeCollection />
    </Box>
  );
};

export default Home;
