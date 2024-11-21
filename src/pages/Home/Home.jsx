import { Box } from "@mui/material";
import React from "react";
import BadgeCollection from "../../components/BadgeCollection/BadgeCollection.jsx";
import BuyMeACoffee from "../../components/BuyMeACoffee/BuyMeACoffee.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import QuoteBox from "../../components/QuoteBox/QuoteBox.jsx";
import Services from "../../components/Services/Services.jsx";
import Skills from "../../components/Skills/Skills.jsx";
import Teaching from "../../components/Teaching/Teaching.jsx";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Main Content */}
      <Box sx={{ marginTop: "0" }}>
        <BuyMeACoffee />
        <AboutMe />
        <Skills />
        <Services />
        <BadgeCollection />
        <QuoteBox />
        <Contact />
        {/* <Teaching /> */}
      </Box>
    </>
  );
};

export default Home;
