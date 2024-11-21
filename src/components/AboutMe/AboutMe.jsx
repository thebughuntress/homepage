import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import meImg from "../../assets/aaf.jpg";

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
        padding: 4,
      }}
    >
      {/* Image Section */}
      <Box
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
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          flex: { xs: 1, md: 7 },
          textAlign: { xs: "center", md: "left" },
          paddingRight: "7%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            margin: {xs: "25px 0 20px 0", md: "0 0 20px 0"},
            color: "white",
          }}
        >
          Hi, mein Name ist Antonia
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            color: "white",
          }}
        >
          Ich bin eine leidenschaftliche Entwicklerin mit einem Interesse an
          kreativen Technologien und Design. In meiner Freizeit liebe ich es,
          neue Herausforderungen zu meistern und innovative Lösungen zu
          entwickeln.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
