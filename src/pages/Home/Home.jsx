import { Box } from "@mui/material";
import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Teaching from "../../components/Teaching/Teaching.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import BuyMeACoffee from "../../components/BuyMeACoffee/BuyMeACoffee.jsx";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Main Content */}
      <Box sx={{ display: "none" }}>
        <Teaching />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BuyMeACoffee />
        <Contact />
      </Box>
    </>
  );
};

export default Home;
