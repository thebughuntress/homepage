import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import heroImgMobile from "../../assets/hero-img-mobile.jpg";
import heroImg from "../../assets/hero-img.jpg";
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
            fontSize: { xs: "inherit", md: "50px" },
            width: { xs: "85%", md: "100%" },
            paddingTop: { xs: "0.5rem", md: 0 },
            marginTop: { xs: 1, md: 1 },
            marginBottom: { xs: 1, md: 1 },
          }}
        >
          Full Stack Developer, <br />
          Cloud Engineer & Tutor
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: { xs: "90%", md: "100%" },
            marginBottom: 1,
            fontSize: { xs: "14px", md: "1.2rem" },
          }}
        >
          I build software and teach programming.
        </Typography>
        <DownloadButton
          label="Download CV"
          pathToFile="/downloads/cv.pdf"
          downloadFileName="cv.pdf"
        />
      </Box>
    </Box>
  );
}

export default Hero;
