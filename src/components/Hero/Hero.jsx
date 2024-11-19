import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import heroImg from "../../assets/hero-img.jpg";
import heroImgMobile from "../../assets/hero-img-mobile.jpg";
import DownloadButton from "../DownloadButton/DownloadButton";

function Hero() {
  // Check if the screen is small (phone)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "normal", md: "center" },
        textAlign: "center",
        height: "92vh",
        width: "100vw",
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: { xs: "white", md: "transparent" },
        }}
      >
        <Box
          component="img"
          src={isMobile ? heroImgMobile : heroImg}
          alt="heroImg"
          loading="eager"
          sx={{
            width: { xs: "100%", md: "70%" },
            borderRadius: { xs: 0, md: "8px" },
          }}
        />
      </Box>

      {/* Text Box */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          background: {
            xs: "linear-gradient(to bottom, white, #fffdf4)",
            md: "inherit",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={500}
          sx={{
            width: { xs: "85%", md: "50%" },
            paddingTop: { xs: "0.5rem", md: 0 },
            marginTop: 1,
          }}
        >
          Full Stack Developer, Cloud Engineer & Tutor
        </Typography>
        <Typography sx={{ width: { xs: "80%", md: "100%" }, marginBottom: 1 }}>
          I build software and teach programming.
        </Typography>
        <DownloadButton
          label="Download CV"
          pathToFile="/downloads/cv.pdf"
          downloadFileName="cv.pdf"
        />
        {/*  <Typography variant="body1">
          In today’s digital world, information technology isn’t just a tool,
          it’s the backbone of progress, creativity, and connection.
        </Typography> */}
      </Box>
    </Box>
  );
}

export default Hero;
