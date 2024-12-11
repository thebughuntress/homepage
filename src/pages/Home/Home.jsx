import { Box } from "@mui/material";
import React from "react";
import BadgeCollection from "../../components/BadgeCollection/BadgeCollection.jsx";
import BuyMeACoffee from "../../components/BuyMeACoffee/BuyMeACoffee.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import QuoteBox from "../../components/QuoteBox/QuoteBox.jsx";
import Skills from "../../components/Skills/Skills.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Box>
        <Box
          sx={{
            display: {
              xs: "block", 
              sm: "none",
            },
            marginY: 3
          }}
        >
          <BuyMeACoffee />
        </Box>
        <AboutMe />
        <Skills />
        {/* <Services /> */}
        <BadgeCollection />
        <QuoteBox />
      </Box>
    </>
  );
};

export default Home;
