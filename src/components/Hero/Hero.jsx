import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import bgStarlitSky from "../../assets/bg-starlit-sky.jpg";
import ContactButtons from "../ContactButtons/ContactButtons";
import "./Hero.css";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: { xs: "92vh", md: "90vh" },
        width: "100vw",
        position: "relative",
        backgroundColor: "black",
      }}
    >
      {/* Background image with fade-in effect */}
      <Box
        className="fade-in-bg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "92vh", md: "90vh" },
          backgroundImage: `url(${bgStarlitSky})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0,
          zIndex: 1,
        }}
      />
      {/* Image Box */}
      {/* <Box
        sx={{
          marginTop: { xs: "10vh", md: 0 },
          marginBottom: { xs: "2vh", md: 3 },
          width: { xs: "100%", md: "22%" },
        }}
      >
        <Box
          component="img"
          src={isMobile ? heroImg  : heroImg}
          alt="heroImg"
          loading="eager"
          sx={{
            width: { xs: "60%", md: "70%" },
            borderRadius: "50%", //{ xs: "50%", md: "8px" },
          }}
        />
      </Box> */}

      {/* Text Box */}
      <Box
        sx={{
          width: "100%", //{ xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          gap: 1,
          zIndex: 2,
        }}
      >
        <Typography
          variant="h1"
          fontWeight={600}
          sx={{
            fontSize: { xs: "35px", md: "50px", lg: "55px" },
            width: { xs: "85%", md: "100%" },
            marginTop: { xs: "-5rem", md: 0 },
            marginBottom: { xs: 1, md: 3 },
            color: "white",
            textShadow: "4px 4px 8px black",
          }}
        >
          Web Developer, <br />
          Cloud Engineer <br />& Tutor
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: { xs: "90%", md: "100%" },
            marginBottom: 1,
            fontSize: { xs: "15px", md: "1.2rem" },
            color: "white", //"text.primary",
            textShadow: "4px 4px 8px black",
          }}
        >
          I build software and teach programming.
        </Typography>
        <ContactButtons color="primary.main" iconShadow={true} />
      </Box>
    </Box>
  );
}

export default Hero;
