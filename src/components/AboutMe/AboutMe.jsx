import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for desktop
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        backgroundColor: "primary.main",
      }}
    >
      {/* Image Section */}
      {/* <Box
        sx={{
          flex: { xs: 1, md: 3 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Antonia"
          src={meImg}
          sx={{
            width: { xs: "50vw", md: "15vw" },
            height: { xs: "50vw", md: "15vw" },
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box> */}

      {/* Text Section */}
      <Box
        sx={{
          flex: { xs: 1, md: 7 },
          textAlign: { xs: "center", md: "left" },
          padding: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "25px", md: "35px" },
            margin: { xs: "25px 0 20px 0", md: "0 0 20px 0" },
            color: "white",
          }}
        >
          Hi, I'm Antonia
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            color: "white",
          }}
        >
          During my studies in Electrical Engineering, I
          discovered my passion for IT and programming. Since graduating in
          2020, I have been working as a software engineer in IT consulting.
          Over the past few years, I've had the opportunity to contribute to diverse projects
          and gain experience across various industries, including automotive, energy, and telecommunications. 
          I'm always eager to explore new technologies and enjoy creating and
          implementing innovative solutions. Design and automation continually inspire and drive my work.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
