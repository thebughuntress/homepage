import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import heroImgMobile from "../../assets/hero-img-mobile.jpg";
import heroImg from "../../assets/hero-img.jpg";
import theme from "../../theme/lightTheme";
import ContactButtons from "../ContactButtons/ContactButtons";

function Hero() {
  // Check if the screen is small (phone)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        alignItems: "center",
        justifyContent: { xs: "normal", md: "center" },
        textAlign: "center",
        minHeight: { xs: "90vh", md: "90vh" },
        width: "100vw",
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          marginTop: { xs: "10vh", md: 0 },
          marginBottom: { xs: "2vh", md: 0 },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          component="img"
          src={isMobile ? heroImgMobile : heroImg}
          alt="heroImg"
          loading="eager"
          sx={{
            width: { xs: "60%", md: "70%" },
            borderRadius: { xs: "50%", md: "8px" },
          }}
        />
      </Box>

      {/* Text Box */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h1"
          fontWeight={600}
          sx={{
            fontSize: { xs: "28px", md: "40px", lg: "50px" },
            width: { xs: "85%", md: "100%" },
            marginTop: { xs: 2, md: 0 },
            marginBottom: { xs: 1, md: 1 },
            color: "text.primary",
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
            fontSize: { xs: "15px", md: "1.2rem" },
            color: "text.primary",
          }}
        >
          I build software and teach programming.
        </Typography>
        <ContactButtons color="primary.main" />
      </Box>
    </Box>
  );
}

export default Hero;
