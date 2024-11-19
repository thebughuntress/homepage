import { Box } from "@mui/material";
import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Teaching from "../../components/Teaching/Teaching.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import BuyMeACoffee from "../../components/BuyMeACoffee/BuyMeACoffee.jsx";
import BadgeCollection from "../../components/BadgeCollection/BadgeCollection.jsx";
import QuoteBox from "../../components/QuoteBox/QuoteBox.jsx";
import Services from "../../components/Services/Services.jsx";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Main Content */}

      <Services />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BadgeCollection />
        <QuoteBox />

        <BuyMeACoffee />
        <Contact />
      </Box>

      <Box sx={{ display: "none" }}>
        <Teaching />
      </Box>
    </>
  );
};

export default Home;
