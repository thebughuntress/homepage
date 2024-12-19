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
          paddingTop: 2,
          fontSize: { xs: "25px", md: "35px" },
          color: "white",
        }}
      >
        Hi, I'm Antonia
      </Typography>
      <Typography
        variant="body1"
        sx={{
          paddingTop: 3,
          fontSize: { xs: "16px", md: "18px" },
          color: "white",
        }}
      >
        During my studies in Electrical Engineering, I discovered my passion for
        IT and programming. Since graduating in 2020, I have been working as a
        software engineer in IT consulting. Over the past few years, I've had
        the opportunity to contribute to diverse projects and gain experience
        across various industries, including automotive, energy, and
        telecommunications. I'm always eager to explore new technologies and
        enjoy creating and implementing innovative solutions. Design and
        automation continually inspire and drive my work.
      </Typography>
    </Box>
  );
};

export default AboutMe;
