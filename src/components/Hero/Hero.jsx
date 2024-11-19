import React from "react";
import { Box, Typography } from "@mui/material";
import heroImg from "../../assets/hero-img.jpg";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: { xs: "auto", md: "92vh" },
        width: "100vw",
        gap: 1,
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          component="img"
          src={heroImg}
          alt="A descriptive text for the image"
          sx={{
            width: { xs: "100%", md: "70%" },
            maxWidth: "500px",
            borderRadius:{ xs: 0, md: "8px" },
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
          padding: { xs: "10px", md: "20px" },
        }}
      >
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Welcome.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontStyle: "italic", opacity: 0.9, my: 3 }}
        >
          "Technology is best when it brings people together." <br />
          Matt Mullenweg
        </Typography>
        <Typography variant="h6" gutterBottom >
          In today’s digital world, information technology isn’t just a tool,{" "}
          <br />
          it’s the backbone of progress, creativity, and connection.
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
