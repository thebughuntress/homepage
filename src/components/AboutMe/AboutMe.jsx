import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "primary.main",
        paddingTop: 5,
        paddingX: { xs: 3, md: "20rem" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          paddingY: 3,
          fontSize: { xs: "25px", md: "35px" },
          color: "white",
        }}
      >
        Something About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "16px", md: "18px" },
          color: "white",
        }}
      >
        During my studies in Electrical Engineering, I discovered my passion for
        IT and programming. Since graduating in 2020, I have been working as a
        software engineer. Over the past few years, I've had the opportunity to
        contribute to diverse projects, with different technologies and gain
        experience across various industries.
        <br />I enjoy learning new technologies and writing well-structured and
        robust code to reduce complexity. Automation and design continually
        inspire and drive my work.
      </Typography>
    </Box>
  );
};

export default AboutMe;
